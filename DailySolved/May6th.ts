class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNodes(head: ListNode | null): ListNode | null {
  const stack: number[] = [];
  stack.push(head!.val);
  head = head!.next;
  while (head) {
    while (stack.length && head.val > stack[stack.length - 1]) {
      stack.pop();
    }
    stack.push(head.val);
    head = head.next;
  }

  let res: ListNode;
  while (stack.length) {
    let newHead = new ListNode(stack.pop(), res);
    res = newHead;
  }

  return res;
}
