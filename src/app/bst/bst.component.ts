import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bst',
  templateUrl: './bst.component.html',
  styleUrls: ['./bst.component.css']
})
export class BSTComponent implements OnInit {
  data: any = ''
  BSTData: any[];
  randomNo: number;
  h: number;
  orderData = []

  constructor() { }
  ngOnInit() {
    this.generateRandomData(true);
    this.data = '';
    for (var i = 0; i <= 10; i++) {
      this.addAVL(i);
      console.log(11111111111, this.data)
    }
    this.displayData()
  }

  clear() {
    this.data = '';
    this.randomNo = 0
    this.BSTData = []
  }
  generateRandomData(AVL) {
    if (this.randomNo) {
      if (!this.data) {
        this.data = { data: this.randomNo }
      } else {
        if (AVL) {
          this.addAVL(this.randomNo)
        } else {
          this.add(this.randomNo)
        }
      }
      this.displayData();
    }
    this.randomNo = Math.floor(Math.random() * 100);
  }

  displayData() {
    var data: any = this.data;
    var temp = [];
    getData(data, 0)
    function getData(data: any, index) {
      if (!data || (!data.data && data.data != 0)) {
        return
      }
      let val = data ? data.data : '';
      if (temp[index] || temp[index] == 0) {
        temp[index].push(val);
      } else {
        temp[index] = [val];
      }

      var l = getData(data.left, index + 1)
      var r = getData(data.right, index + 1)
    }
    this.BSTData = temp;
  }

  search() {
    let msg = this.randomNo + " Not found";
    let self = this;
    find(this.data)
    function find(data) {
      if (!data) {
        return
      }
      if (data.data == self.randomNo) {
        msg = self.randomNo + ' found'
        return
      }
      if (data.data < self.randomNo) {
        find(data.right)
      } else {
        find(data.left)
      }
    }
    alert(msg)
  }
  remove() {
    let self = this;
    find(this.data, self.randomNo)
    console.log(this.data)
    function find(data, deleteValue) {
      if (!data) {
        return
      }
      if (data.data == deleteValue) {
        if (!data.left && !data.right) {
          delete data.data
        } else {
          if (!data.left) {
            data.data = data.right.data
            data.left = data.right.left
            data.right = data.right.right
          } else {
            var lowest = getLowest(data.right);
            data.data = lowest;
            if (!lowest) {
              return;
            }
            find(data.right, lowest);
          }
        }
        return
      }
      if (data.data < self.randomNo) {
        find(data.right, deleteValue)
      } else {
        find(data.left, deleteValue)
      }
    }

    function getLowest(data) {
      if (!data.left) {
        return data.data
      }
      return getLowest(data.left)
    }
    console.log(this.data)
    this.displayData();
  }
  add(val1) {
    insert(this.data, val1)
    function insert(node, val) {
      if (node.data <= val) {
        if (!node.right) {
          node.right = { data: val }
        } else {
          insert(node.right, val)
        }
      }
      else {
        if (!node.left) {
          node.left = { data: val }
        } else {
          insert(node.left, val)
        }
      }
    }
  }

  addAVL(val1) {
    if (!this.data) {
      this.data = { data: val1 }
      return
    }
    var self: any = this;
    insert(this.data, val1)
    function insert(node, val) {
      if (node.data <= val) {
        if (!node.right) {
          node.right = { data: val }
        } else {
          insert(node.right, val)
          if (node.right && self.getBalanceFactor(node) < -1) {
            if (node.right.data <= val) {
              self.leftRotation(node);
            } else {
              self.rotateRightLeft(node);
            }
          }
        }
      }
      else {
        if (!node.left) {
          node.left = { data: val }
        } else {
          insert(node.left, val)
          if (node.left && self.getBalanceFactor(node) > 1) {
            if (node.left.data > val) {
              self.rightRotation(node);
            } else {
              self.rotateLeftRight(node);
            }
          }
        }
      }
    }
  }
  rightRotation(node) {
    let valueToReplace = node.data
    var leftHighest = node.left.right
    node.data = node.left.data
    node.left = node.left.left
    var rightNNode = null
    if (node.right) {
      rightNNode = JSON.parse(JSON.stringify(node.right));
    } else {
      node.right = {}
    }
    node.right.data = valueToReplace;
    node.right.right = rightNNode
    node.right.left = leftHighest;
    this.displayData()
    //   6          4
    //  4  9       2     6
    //                  5   9
    // 2  5
  }
  leftRotation(node) {
    let valueToReplace = node.data
    var rightLowest = node.right.left
    node.data = node.right.data
    node.right = node.right.right
    var leftNode = null
    if (node.left) {
      leftNode = JSON.parse(JSON.stringify(node.left));
    } else {
      node.left = {}
    }
    node.left.data = valueToReplace;
    node.left.left = leftNode
    node.left.right = rightLowest;
    this.displayData()
  }
  height() {
    this.h = this.getHeight(this.data);

  }
  rotateLeftRight(node) {
    this.leftRotation(node.left);
    this.rightRotation(node);
  }
  rotateRightLeft(node) {
    this.rightRotation(node.right);
    this.leftRotation(node);
  }
  getHeight(node) {
    let height = 0;
    if (!node) {
      return -1;
    }
    height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    return height;
  }
  getBalanceFactor(node) {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  preOrder() {
    let data = this.data;
    let self = this;
    this.orderData = []
    loop1(data);
    function loop1(data) {
      if (!data) {
        return
      }
      self.orderData.push(data.data)
      loop1(data.left)
      loop1(data.right);
    }

  }
  postOrder() {
    let data = this.data;
    let self = this;
    this.orderData = []
    loop1(data);
    function loop1(data) {
      if (!data) {
        return
      }
      loop1(data.left)
      loop1(data.right);
      self.orderData.push(data.data)

    }

  }
  inOrder() {
    let data = this.data;
    let self = this;
    this.orderData = []
    loop1(data);
    function loop1(data) {
      if (!data) {
        return
      }
      loop1(data.left)
      self.orderData.push(data.data)
      loop1(data.right);
    }

  }
  inLineOrder() {
    let data:any = this.data;
    let self = this;
    let queue = []
    this.orderData =[];
    queue.push(data.left);
    queue.push(data.right);
    this.orderData.push(data.data)
    while(queue.length){
      data =  queue.shift();
      this.orderData.push(data.data)
      if(data.left){
        queue.push(data.left);
      } 
      if(data.right){
        queue.push(data.right);
      } 

    }
    this.orderData = this.orderData;
  }
}
