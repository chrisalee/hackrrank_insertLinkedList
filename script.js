/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    const node = new SinglyLinkedListNode(data);
    let runner = 0;
    let previous = null;
    let current = llist;
    
    while(runner < position) {
        previous = current;
        current = current.next;
        runner++;
    }
    previous.next = node;
    node.next = current;
    return llist;

}

//////////////////////////////////////////////////////////////////
