const logger = console;
/**
 * A LinkedList based solution for Add Two Numbers
 *
 */
import { Node } from './SinglyLinkedList.js'

/*
Problem Statement:
Given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

Link for the Problem: https://leetcode.com/problems/add-two-numbers/
*/

class AddTwoNumbers {
  constructor() {
	logger.debug('>>> Entering constructor()');
    this.dummyNode = new Node(0)
	logger.debug('<<< Exiting constructor()');
  }

  solution(firstList, secondList) {
	logger.debug(`>>> Entering solution(firstList=${firstList},secondList=${secondList})`);
    let firstRunner = firstList
    let secondRunner = secondList
    let tail = this.dummyNode
    let carry = 0
    while (firstRunner != null || secondRunner != null) {
      const firstNumber = firstRunner ? firstRunner.data : 0
      const secondNumber = secondRunner ? secondRunner.data : 0
      const sum = carry + firstNumber + secondNumber
      carry = parseInt(sum / 10)
      tail.next = new Node(sum % 10)
      tail = tail.next
      if (firstRunner) {
        firstRunner = firstRunner.next
      }
      if (secondRunner) {
        secondRunner = secondRunner.next
      }
    }
    if (carry > 0) {
      tail.next = new Node(carry % 10)
    }

	logger.debug(`<<< Exiting solution(firstList=${firstList},secondList=${secondList})`);
    return this.dummyNode.next
  }

  solutionToArray() {
	logger.debug('>>> Entering solutionToArray()');
    const list = []
    let currentNode = this.dummyNode.next
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }

	logger.debug('<<< Exiting solutionToArray()');
    return list
  }
}

export { AddTwoNumbers }
