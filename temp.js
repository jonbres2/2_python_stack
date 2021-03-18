function moveMaxToBack(node) {
    if (node == null) {
        return null;
    }
    else if (node.next == null) {
        return node;
    }

    var maxNode = node;
    var runner = node;
    while (runner != null) {
        if (runner.value > maxNode.value) {
            maxNode = runner;
        }
        if (runner.next == null) {
            var tailNode = runner;
        }
        runner = runner.next;
    }

    if (maxNode == tailNode) {
        return node;
    }
    else if (maxNode == node) {
        var newHead = maxNode.next;
        tailNode.next = maxNode;
        maxNode.next = null;
        return newHead;
    }

    runner = node;
    while (runner != null) {
        if (runner.next == maxNode) {
            var beforeMax = runner;
        }
    runner = runner.next;
    }

    beforeMax.next = maxNode.next;
    tailNode.next = maxNode;
    maxNode.next = null;
    return node;
}