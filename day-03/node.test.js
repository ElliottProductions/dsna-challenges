// const node3 = {
//     value: 4,
//     next: null,
//   };
  
//   const node2 = {
//     value: 12,
//     next: node3,
//   };
  
//   const node1 = {
//     value: 34,
//     next: node2,
//   };
  
  
  
  // console.log(root.getList()); // 'A B'
  // const nodeC = new LinkedListNode('C');
  // const nodeD = new LinkedListNode('D');
  // const nodeE = new LinkedListNode('E');
  // root.add(nodeC);
  // root.add(nodeD);
  // root.add(nodeE);
  // console.log(root.getList()); // 'A B C D E'
  
 
  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        if(this.value > node.value){
            if(!this.left) {this.left = node} else {this.left.add(node)};
        } else {
            if(!this.right) {this.right = node} else {this.right.add(node)};
        }
    }

  }

  test('binary tree', () => {

    const B = new BinaryTreeNode(2);
    const A = new BinaryTreeNode(1);
    const C = new BinaryTreeNode(3);
    const D = new BinaryTreeNode(4);

    B.add(A);
    B.add(D);
    B.add(C);
  
    console.log(A.value)

    expect(B.left).toBe(A);
    expect(B.right).toBe(D);
    expect(A.left).toBe(null);
    expect(C.left).toBe(null);
  });

  test('linked list', () => {
    
    const root = new LinkedListNode('A');
    const nodeB = new LinkedListNode('B');
    root.add(nodeB);
    console.log(root.getList()); // 'A B'
    const nodeC = new LinkedListNode('C');
    const nodeD = new LinkedListNode('D');
    const nodeE = new LinkedListNode('E');
    root.add(nodeC);
    root.add(nodeD);
    root.add(nodeE);
    console.log(root.getList()); // 'A B C D E'
    root.remove(1);
    console.log(root.getList()); // 'A C D E'

    expect(root.next).toBe(nodeB);
    expect(nodeB.next).toBe(nodeC);
    expect(nodeC.next).toBe(nodeD);
    expect(nodeD.next.next).toBe(null);
  });

  class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  
    add(node) {
      if (!this.next) this.next = node;
      else {
        this.next.add(node);
      }
    }

    getList() {
        if(!this.next) return this.value;
        return `${this.value} ${this.next.getList()}`;
    }

    remove(value) {
        if (!this.next) return;
        if (this.next.value === value) {
            this.next = this.next.next;
          } else {
            this.next.remove(value);
          }
        }
}