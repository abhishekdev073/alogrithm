import { Component, OnInit } from '@angular/core';
import { arrayMax } from 'highcharts';

@Component({
  selector: 'app-hashing',
  templateUrl: './hashing.component.html',
  styleUrls: ['./hashing.component.css']
})
export class HashingComponent implements OnInit {
  arr: any = [];
  constructor() { }
  ngOnInit() {
    this.arr.length = 100;
    this.setValue('name', 'abhishek');
    this.setValue('lName', 'yadav');
    this.setValue('age', '20');
    this.setValue('like', 'everything');

    console.log(this.getValue('name'))
    console.log(this.getValue('lName'))
    console.log(this.getValue('age'))
    console.log(this.getValue('like'))
    console.log(this.arr)

  }

  setValue(key, value) {
    var hashCode = this.hashFunction(key);
    var index = hashCode % this.arr.length;
   this.arr[index] = [key,value];
  }

  setValueLinearProbing(key, value) {
    var hashCode = this.hashFunction(key);
    var index = hashCode % this.arr.length;
    while (this.arr[index]) {
      index = (index + 1) % this.arr.length;
    }
    this.arr[index] = [key,value];
  }

  setValueQuaraticProbing(key, value) {
    var hashCode = this.hashFunction(key);
    var index = hashCode % this.arr.length;
    let h = 0;
    while (this.arr[index]) {
      index = (h * h) % this.arr.length;
      h++;
    }
    this.arr[index] = [key,value];
  }

  setValueDoubleHashing(key, value) {
    var hashCode = this.hashFunction(key);
    var hashCode2 = this.hashFunction(key);
    var index = hashCode % this.arr.length;
    var index2 = hashCode2 % this.arr.length;
    let h = 0;
    while (this.arr[index]) {
      index = (index + index2) % this.arr.length;
    }
   this.arr[index] = [key,value];
  }


  getValue(key) {
    var hashCode = this.hashFunction(key);
    var index = hashCode % this.arr.length;
    return this.arr[index]
  }

  hashFunction(str) {
    let ascii = 0;
    for (var i = 0; i < str.length; i++) {
      ascii += (str[i].charCodeAt() * 10) + i + 1;
    }
    return ascii % 2069;
  }
  hashFunction2(str) {
    let ascii = 0;
    for (var i = 0; i < str.length; i++) {
      ascii += (str[i].charCodeAt()) + i + 1;
    }
    return ascii % 2069;
  }

}
