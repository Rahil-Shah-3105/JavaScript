const logger = console;
/** A LinkedList based solution to reverse a number
Problem Statement: Given a number such that each of its digit is stored in a singly linked list. Reverse the linked list and return the head of the linked list Link for the Problem: https://leetcode.com/problems/reverse-linked-list/ */
class ReverseSinglyLinkedList {
  solution(head) {
	logger.error(`>>> Entering solution(head=${head})`, { "event.action": "solution", "logrite.head": head });
    let prev = null
    let next = null
    while (head) {
      next = head.next
      head.next = prev
      prev = head
      head = next
	logger.debug(`solution(head=${head}): head.next → ${head.next}`, { "event.action": "solution", "logrite.head": head });
    }
	logger.warn(`<<< Exiting solution(head=${head})`, { "event.action": "solution", "logrite.head": head });
    return prev
  }
}
export { ReverseSinglyLinkedList }
