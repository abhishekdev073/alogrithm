import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  head = null;
  size = 0;
  code = []
  constructor() { }

  ngOnInit() {
    this.code[0] = `
    LinkList() {
      const self: any = this;
      var obj = {
        head: null,
        size: 0,
        insertAt: (element: any, index: any) => {
          if (index > self.size) {
            return;
          }
          self.size++
          var newNode = { element: element, next: null };
          if (index == 0) {
            newNode.next = self.head;
            self.head = newNode;
          } else {
            var cur = self.head;
            var it = 0;
            var prev: any = '';
            while (it < index) {
              it++;
              prev = cur;
              cur = cur.next;
            }
  
            newNode.next = cur;
            prev.next = newNode
          }
  
        },
        removeFrom: (index) => {
          if (index > self.size) {
            return
          }
          var it = 0;
          var cur = self.head;
          while (it < index - 1) {
            it++;
            cur = cur.next;
          }
          cur.next = cur.next.next;
          self.size--
        },
        removeElement: (element) => {
          var cur = self.head;
          var prev = cur;
          while (cur) {
            if (cur.element == element) {
              prev.next = cur.next
              return;
            }
            prev = cur;
            cur = cur.next;
          }
          self.size--
        },
        add: (val) => {
          self.size++
          var newNode = { element: val, next: null };;
          if (!self.head) {
            self.head = newNode
          } else {
            var current = self.head
            while (current.next) {
              current = current.next
            }
            current.next = newNode;
          }
        },
        isEmpty: () => {
          return !!self.head
        },
        size_Of_List: () => {
          return self.size;
        },
        PrintList: () => {
          var current = self.head
          while (current) {
            console.log(current.element);
            current = current.next
          }
  
        }
      }
      return obj
    }
    `
    this.code[1]=`{
      "element": "inset item a 0",
      "next": {
        "element": "List Item 1",
        "next": {
          "element": "List Item 2",
          "next": {
            "element": "List Item 3",
            "next": {
              "element": "List Item 4",
              "next": {
                "element": "List Item 5",
                "next": {
                  "element": "List Item 6",
                  "next": {
                    "element": "List Item 7",
                    "next": {
                      "element": "List Item 9",
                      "next": null
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  }

  start() {
    this.head = null;
    this.size = 0;
    var list1 = this.LinkList();
    var i = 0;
    while (i < 10) {
      list1.add('List Item ' + i)
      i++;
    }
    list1.insertAt('inset item a 0', 0)
    list1.removeFrom(1)
    list1.removeElement('List Item 8')
    list1.PrintList();
  }
  LinkList() {
    const self: any = this;
    var obj = {
      head: null,
      size: 0,
      insertAt: (element: any, index: any) => {
        if (index > self.size) {
          return;
        }
        self.size++
        var newNode = { element: element, next: null };
        if (index == 0) {
          newNode.next = self.head;
          self.head = newNode;
        } else {
          var cur = self.head;
          var it = 0;
          var prev: any = '';
          while (it < index) {
            it++;
            prev = cur;
            cur = cur.next;
          }

          newNode.next = cur;
          prev.next = newNode
        }

      },
      removeFrom: (index) => {
        if (index > self.size) {
          return
        }
        var it = 0;
        var cur = self.head;
        while (it < index - 1) {
          it++;
          cur = cur.next;
        }
        cur.next = cur.next.next;
        self.size--
      },
      removeElement: (element) => {
        var cur = self.head;
        var prev = cur;
        while (cur) {
          if (cur.element == element) {
            prev.next = cur.next
            return;
          }
          prev = cur;
          cur = cur.next;
        }
        self.size--
      },
      add: (val) => {
        self.size++
        var newNode = { element: val, next: null };;
        if (!self.head) {
          self.head = newNode
        } else {
          var current = self.head
          while (current.next) {
            current = current.next
          }
          current.next = newNode;
        }
      },
      isEmpty: () => {
        return !!self.head
      },
      size_Of_List: () => {
        return self.size;
      },
      PrintList: () => {
        var current = self.head
        console.log(JSON.stringify(current))

        while (current) {
          console.log(current.element);
          current = current.next
        }
        
      }
    }
    return obj
  }
}
