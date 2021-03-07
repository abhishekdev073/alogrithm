function test1(arr) {
    var output = [];
    while (arr > 0) {
        output.push(arr % 2);
        arr = Math.floor(arr / 2);
    }
    var result = "";
    while (output.length > 0) {
        result += output.pop();
    }
    return result;
}
console.log('convert in binary  ', test1(50));

function isArraySorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true
}

console.log('[1,2,3,4,5,6,7,8,9] isArraySorted ', isArraySorted([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log('[1,2,3,4,51,6,7,8,9] isArraySorted ', isArraySorted([1, 2, 3, 4, 51, 6, 7, 8, 9]));


var arr = [30, -40, -20, -10, 40, 0, 10, 5];
// How many tipple sum = 0;

function sum() {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            for (var k = j + 1; k < arr.length; k++) {
                if ((arr[i] + arr[j] + arr[k]) === 0) {
                console.log(`i=${arr[i]} && j=${arr[j]} && k=${arr[k]}`)
                    count++;
                }
            }
        }
    }
    console.log('total 1count ', count);
}
sum();