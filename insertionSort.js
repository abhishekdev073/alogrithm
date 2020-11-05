function insertionSort(input) {
    for (var i = 0; i < input.length; i++) {
        for (var j = i; j > 0; j--) {
            if (input[j] < input[j - 1]) {
                input = exchange(j, j - 1, input)
                console.log('ABC ', input);
            } else {
                break;
            }
        }

    }
    return input;

    function exchange(a, b, input) {
        var arrray = input.split('');
        const temp = arrray[a];
        arrray[a] = arrray[b];
        arrray[b] = temp;
        return arrray.join('')
    }
}


console.log('SORTEXAMPLE selectionSort ', insertionSort('SORTEXAMPLE'));