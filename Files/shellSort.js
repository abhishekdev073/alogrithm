function shellSort(input) {

    var N = input.length;

    var h = 1;
    while (h < Math.floor(N / 3)) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < N; i++) {
            for (j = i; j >= h && input[j] < input[j - h]; j = j - h) {
                input = exchange(j, j - h, input)
            }
        }
        console.log(`After ${h} sort input is = ${input}`);

        h = Math.floor(h / 3)
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

console.log('SHELLSORTEXAMPLE shellSort ', shellSort('SHELLSORTEXAMPLE'));
console.log('SORTEXAMPLE shellSort ', shellSort('SORTEXAMPLE'));
console.log('3025141 shellSort ', shellSort('3025141'));
console.log('30251447847876234523452342341 shellSort ', shellSort('30251447847876234523452342341'));