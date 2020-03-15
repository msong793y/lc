var sortList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let midPrev = findMid(head);
    let mid = midPrev.next;

    midPrev.next = null;
    console.log(mid)

    return merge(sortList(head), sortList(mid))
};


function findMid(head) {

    if (!head.next) return head;

    let slow = head;
    let fast = head.next.next;

    while (fast) {

        slow = slow.next;
        if (fast.next) {
            fast = fast.next.next;
        } else {
            fast = null
        }
    }
    return slow


}

function merge(l1, l2) {
    let dummy = new ListNode(0)
    let p = dummy
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }

    if (l1 !== null) {
        p.next = l1
    }

    if (l2 !== null) {
        p.next = l2
    }
    return dummy.next
}