"""
Cuts a figure out of a solid-colour studio backdrop.

    python3 scripts/make-cutout-chroma.py <source.png> <out.png>

scripts/make-cutout.mjs removes a painted-in transparency checkerboard. This
does the other job: a real photograph shot against a saturated red backdrop,
which is what the hero cut-out needs and what a phone-camera portrait never is.

Red is separated by *ratio*, not by brightness. The backdrop ranges from #81 to
#CD red and skin is itself red-dominant, so any absolute threshold either eats
the face or leaves the dark corners. g/r and b/r hold the two apart cleanly:
backdrop sits near 0.05, skin near 0.45.

The mask is then flooded inward from the border rather than applied globally,
so anything enclosed by the figure survives even if it happens to match.
"""
import sys

import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

if len(sys.argv) != 3:
    sys.exit("usage: python3 scripts/make-cutout-chroma.py <source> <out.png>")

src, out = sys.argv[1], sys.argv[2]

im = Image.open(src).convert("RGB")
a = np.asarray(im).astype(np.float32)
r, g, b = a[..., 0], a[..., 1], a[..., 2]

# Backdrop: red-dominant with almost no green or blue. The +1 avoids a divide
# by zero on the near-black corners.
denom = np.maximum(r, 1.0)
backdrop = (r > 18) & (g / denom < 0.30) & (b / denom < 0.34)

# Keep only the backdrop connected to the frame edge. The suit reaches the
# bottom of the frame and the neck touches the backdrop on both sides, so a
# global mask would leak into the figure; a border-connected one cannot.
labels, n = ndimage.label(backdrop)
edge = np.concatenate([labels[0, :], labels[-1, :], labels[:, 0], labels[:, -1]])
outside = np.isin(labels, np.unique(edge[edge > 0]))

alpha = np.where(outside, 0, 255).astype(np.uint8)

# Close pinholes the ratio test punched in dark hair, then drop specks of
# backdrop it missed inside the silhouette.
solid = ndimage.binary_closing(alpha > 0, structure=np.ones((5, 5)))
solid = ndimage.binary_fill_holes(solid)
alpha = np.where(solid, 255, 0).astype(np.uint8)

# Despill. The backdrop throws red onto hair and shoulders, and against the
# site's dark ground that rim reads as a magenta halo. Pull red back toward the
# other two channels, but only in the 4px band along the edge — doing it
# everywhere would drain the skin.
band = (ndimage.binary_dilation(alpha == 0, iterations=4)) & (alpha > 0)
ceiling = np.maximum(g, b) * 1.35 + 12
rgb = a.copy()
rgb[..., 0] = np.where(band, np.minimum(r, ceiling), r)

img = Image.fromarray(rgb.astype(np.uint8), "RGB")
mask = Image.fromarray(alpha, "L").filter(ImageFilter.GaussianBlur(0.8))

rgba = img.convert("RGBA")
rgba.putalpha(mask)

# Crop to the *mask*, not to rgba.getbbox(). getbbox() on an RGBA image counts
# any non-zero channel, so the discarded backdrop — still red underneath its
# zero alpha — would keep the box at full frame.
rgba = rgba.crop(mask.getbbox())

# The hero renders this at 21rem wide at most. Anything past ~2x that is weight
# on the critical path for pixels nobody resolves.
TARGET_W = 800
if rgba.width > TARGET_W:
    h = round(rgba.height * TARGET_W / rgba.width)
    rgba = rgba.resize((TARGET_W, h), Image.LANCZOS)

rgba.save(out, optimize=True)
print(f"{out}  {rgba.size[0]}x{rgba.size[1]}  {len(open(out, 'rb').read()) / 1024:.0f} KB")
