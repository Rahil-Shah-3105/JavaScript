const logger = console;
/**
 * A LinkedList based solution for finding the starting node of the cycle in a list.
 * @returns the node where cycle begins in the linked list. If there is no cycle present, returns null.
 * @see https://en.wikipedia.org/wiki/Cycle_detection
 * @see https://leetcode.com/problems/linked-list-cycle-ii/
 */

function findCycleStart(head) {
logger.debug(`>>> Entering findCycleStart(head=${head})`);
  let length = 0
  let fast = head
  let slow = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      length = cycleLength(slow)
      break
    }
  }

  if (length === 0) {
    // If there is no cycle, return null.
    return null
  }

  let ahead = head
  let behind = head
  // Move slow pointer ahead 'length' of cycle times
  while (length > 0) {
    ahead = ahead.next
    length--
  }

  // Now move both pointers until they meet - this will be the start of cycle
  while (ahead !== behind) {
    ahead = ahead.next
    behind = behind.next
  }

  // return the meeting node
logger.debug(`<<< Exiting findCycleStart(head=${head})`);
  return ahead
}

// head is a node on a cycle
function cycleLength(head) {
logger.debug(`>>> Entering cycleLength(head=${head})`);
  // How long until we visit head again?
  let cur = head
  let len = 0
  do {
    cur = cur.next
    len++
  } while (cur != head)
logger.debug(`<<< Exiting cycleLength(head=${head})`);
  return len
}

export { findCycleStart }
