/**
 * The problem-solving wall.
 *
 * This is the beat that says "this person can actually think", so it gets real
 * code rather than a decorative texture: a recruiter who reads code will read
 * it, and one who does not still gets the numbers.
 */

export const dsa = {
  /** Two fills the grid exactly — it is `grid-cols-2`, not a three-up row. */
  stats: [
    { value: '500+', label: 'problems solved' },
    { value: 'Top 15%', label: 'LeetCode, globally' },
  ],

  /** Named strengths, shown as accent chips beside the wall. */
  topics: ['Graphs  |', 'Dynamic programming  |', 'Heaps  |', 'Trees  |', 'Binary search'],

  platform: { name: 'LeetCode', handle: 'RudyMontoo' },

  /**
   * Rendered verbatim on the wall. Keep lines under ~62 characters — beyond
   * that they overrun the wall width on a narrow viewport.
   *
   * Python and a heap, deliberately: it is the same top-k selection that sits
   * under every retrieval pipeline on the rest of this page, so the snippet
   * reads as something he uses rather than something he memorised.
   */
  wallCode: `# Top-k retrieval — O(n log k), not O(n log n)
import heapq

def top_k(query, index, k=5):
    """Nearest k embeddings by cosine similarity."""
    heap = []

    for doc_id, vec in index.items():
        score = cosine(query, vec)

        if len(heap) < k:
            heapq.heappush(heap, (score, doc_id))
        elif score > heap[0][0]:
            # Cheaper than a push followed by a pop.
            heapq.heapreplace(heap, (score, doc_id))

    return sorted(heap, reverse=True)`,
} as const
