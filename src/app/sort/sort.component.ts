import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { async } from '@angular/core/testing';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  chartOptions = {};
  randomData = [];
  totalReord = 1000;
  checked = false;
  time = 0;
  dataForGraph = [];
  active = 0;
  code=[];
  constructor() { }

  ngOnInit() {
    this.generateRandomData();
    this.code.length = 10;
    this.code[7]=`
    heapify(arr) {
      var n = Math.floor(arr.length / 2);
      for (var i = n; i >= 0; i--) {
        heapifyAtIndex(arr, i)
      }
      function heapifyAtIndex(arr, i) {
        var largest = i;
        var left = 2 * i + 1
        var right = 2 * i + 2
        if (arr[largest] < arr[left]) {
          largest = left;
        }
        if (arr[largest] < arr[right]) {
          largest = right;
        }
  
        if (i !== largest) {
          const temp = arr[largest];
          arr[largest] = arr[i]
          arr[i] = temp;
          if (2 * largest < arr.length) {
            heapifyAtIndex(arr, largest)
          }
        }
      }
      return arr;
    }
  
    `
  }
  generateRandomData() {
    this.active = 0;
    this.time = 0;
    if (this.totalReord) {
      this.totalReord = this.totalReord * 1
    }
    this.randomData = [];
    for (var i = 0; i < this.totalReord; i++) {
      this.randomData.push(Math.floor(Math.random() * 1000))
    }
    //  this.randomData = [4,6,3,2,1,9,7]
    this.renderGraph();
  }


  renderGraph() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: ''
      },
      plotOptions: {
        series: {
          animation: false
        }
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: ''
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: ''
        }
      },
      series: [{
        name: '',
        showInLegend: false,
        data: this.randomData
      }]
    }
    return new Promise((resolve, reject) => {
      HighCharts.chart('container', this.chartOptions, function (chart) {
        setTimeout(() => {
          resolve(true)
        }, 0);
      });
    })

  }
  async bubbleSort(activeIndex) {
    this.active = activeIndex;
    this.time = 0;
    var t1 = new Date();
    var data = this.randomData;
    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < data.length - i; j++) {
        if (data[j] > data[j + 1]) {
          const temp = data[j];
          data[j] = data[j + 1]
          data[j + 1] = temp;
          if (!this.checked) {
            await this.renderGraph();
          }
        }


      }
    }
    if (this.checked) {
      var t2 = new Date();
      var dif = t2.getTime() - t1.getTime();
      this.time = dif / 1000;
      await this.renderGraph();
    }
  }
  async insertionSort(activeIndex) {
    this.active = activeIndex;
    this.time = 0;
    var t1 = new Date();
    for (var i = 1; i < this.randomData.length; i++) {
      var key = this.randomData[i];
      var j = i - 1;
      while (j >= 0 && this.randomData[j] > key) {
        this.randomData[j + 1] = this.randomData[j];
        j = j - 1;
        if (!this.checked) {
          await this.renderGraph();
        }
      }
      this.randomData[j + 1] = key;
      if (!this.checked) {
        await this.renderGraph();
      }
    }
    if (this.checked) {
      var t2 = new Date();
      var dif = t2.getTime() - t1.getTime();
      this.time = dif / 1000;
      this.renderGraph();
    }

  }
  async selectionSort(activeIndex) {
    this.active = activeIndex
    this.time = 0;
    var t1 = new Date();
    for (var i = 0; i < this.randomData.length; i++) {
      let minIndex = -1;
      let min = this.randomData[i]
      for (var j = i + 1; j < this.randomData.length; j++) {
        if (min > this.randomData[j]) {
          minIndex = j
          min = this.randomData[j];
        }
      }
      if (minIndex != -1) {
        let temp = this.randomData[i];
        this.randomData[i] = this.randomData[minIndex];
        this.randomData[minIndex] = temp;
        if (!this.checked) {
          await this.renderGraph();
        }
      }

    }
    if (this.checked) {
      var t2 = new Date();
      var dif = t2.getTime() - t1.getTime();
      this.time = dif / 1000;
      this.renderGraph();
    }

  }

  async shellSort(activeIndex) {
    this.active = activeIndex
    this.time = 0;
    var t1 = new Date();
    var h = 1;
    while (h < this.randomData.length / 3) {
      h = 3 * h + 1
    }
    while (h > 0) {
      for (let i = h; i < this.randomData.length; i++) {
        var valueToInsert = this.randomData[i]
        for (var j = i; j >= h && this.randomData[j - h] > valueToInsert; j = j - h) {
          var temp = this.randomData[j]
          this.randomData[j] = this.randomData[j - h];
          this.randomData[j - h] = temp;
          if (!this.checked) {
            await this.renderGraph();
          }
        }
      }
      h = (h - 1) / 3
    }
    if (this.checked) {
      var t2 = new Date();
      var dif = t2.getTime() - t1.getTime();
      this.time = dif / 1000;
      this.renderGraph();
    }
  }

  quickSort(activeIndex) {
    this.active = activeIndex
    this.time = 0;
    var t1 = new Date();
    const self = this;
    qS(0, this.randomData.length - 1);

    async function qS(left, right) {
      if (left >= right) {
        return;
      }
      var partisionPoint = self.partition(left, right);
      if (!self.checked) {
        await self.renderGraph();
      }
      qS(left, partisionPoint - 1);
      qS(partisionPoint + 1, right);
    }
    if (this.checked) {
      var t2 = new Date();
      var dif = t2.getTime() - t1.getTime();
      this.time = dif / 1000;
      this.renderGraph();
    }

  }
  mergeSort(activeIndex) {
    this.active = activeIndex
    this.time = 0;
    var t1 = new Date();
    const data = this.randomData;
    if (!this.checked) {
      this.dataForGraph = [];
      this.merge1(JSON.parse(JSON.stringify(data)), 0);
      let time = 0;
      for (let i = 0; i < this.dataForGraph.length; i++) {
        time += 200
        setTimeout(x => {
          this.randomData = this.dataForGraph[i];
          this.renderGraph()
        }, time)

      }
    } else {
      this.randomData = this.merge(data);
    }
    if (this.checked) {
      var t2 = new Date();
      var dif = t2.getTime() - t1.getTime();
      this.time = dif / 1000;
      this.renderGraph();
    }

  }

  heapSort(activeIndex) {

    this.randomData = this.heapify(this.randomData)
    var data = this.randomData.slice(0);
    var arr = this.randomData.slice(0);
    this.active = activeIndex
    this.time = 0;
    var t1 = new Date();
    while (arr.length > 0) {
      var temp = arr[arr.length - 1];
      data[arr.length - 1] = arr[0]
      arr[0] = temp;
      arr.length--
      arr = this.heapify(arr)
    }
     this.randomData = data;
     var t2 = new Date();
     var dif = t2.getTime() - t1.getTime();
     this.time = dif / 1000;
     this.renderGraph();
  }
  merge(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let right = arr.splice(0, arr.length / 2);
    let left = arr;
    return this.mergeTwoArray(this.merge(left), this.merge(right))
  }
  merge1(arr, start) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.ceil(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);;
    let leftres = this.merge1(left, start);
    let rightRes = this.merge1(right, start + mid);
    const ret = this.mergeTwoArray(leftres, rightRes);
    var k = 0;
    const ogArray = this.randomData.slice(0);
    for (var i: any = start; i < (start + arr.length); i++) {
      this.randomData[i] = ret[k]
      ogArray[i] = ret[k++];

    }
    this.dataForGraph.push(ogArray.slice(0))
    return ret;
  }
  partition(left, right) {
    left--;
    let pivot = right;
    var arr = this.randomData;
    while (left < right) {
      var i = 0;
      while (arr[++left] < arr[pivot]) {
      }
      while (right > 0 && arr[--right] > arr[pivot]) {
      }
      if (left >= right) {
        break;
      } else {
        var temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;
      }
    }
    var temp = arr[pivot];
    arr[pivot] = arr[left]
    arr[left] = temp;
    return left;
  }
  mergeTwoArray(arr1, arr2) {
    const totalLength = arr1.length + arr2.length;
    const result = [];
    let pos1 = 0;
    let pos2 = 0;
    while (result.length !== totalLength) {
      if (!arr1[pos1]) {
        result.push(arr2[pos2])
        pos2++;
      } else if (!arr2[pos2]) {
        result.push(arr1[pos1])
        pos1++;
      }
      else {
        if (arr1[pos1] > arr2[pos2]) {
          result.push(arr2[pos2])
          pos2++;
        } else {
          result.push(arr1[pos1])
          pos1++;
        }
      }






    }
    return result;

  }
  heapify(arr) {
    var n = Math.floor(arr.length / 2);
    for (var i = n; i >= 0; i--) {
      heapifyAtIndex(arr, i)
    }
    function heapifyAtIndex(arr, i) {
      var largest = i;
      var left = 2 * i + 1
      var right = 2 * i + 2
      if (arr[largest] < arr[left]) {
        largest = left;
      }
      if (arr[largest] < arr[right]) {
        largest = right;
      }

      if (i !== largest) {
        const temp = arr[largest];
        arr[largest] = arr[i]
        arr[i] = temp;
        if (2 * largest < arr.length) {
          heapifyAtIndex(arr, largest)
        }
      }
    }
    return arr;
  }



}
