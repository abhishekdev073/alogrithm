function shuffleSort(input) {
    for (var i = 0; i < input.length; i++) {
        if(i > 0){
            var a = Math.floor(Math.random() * i + 1);
            console.log(` Random for ${i} = ${a}`);
            input = exchange(a, i, input)
        }
       
    }
    return input;
}

function exchange(a, b, input) {
    var arrray = input.split('');
    const temp = arrray[a];
    arrray[a] = arrray[b];
    arrray[b] = temp;
    return arrray.join('')
}

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
}


console.log('shufflesort dasfadfadfadfgafdfdfasdsdfdadfasfSDASDFASDFADFDFASSDdfasdfadtrutyjyojyhktyderrgfsftuhjgjutghjyurtyjyjrttrgrtyuigjopkhgftr ', shuffleSort('dasfadfadfadfgafdfdfasdsdfdadfasfSDASDFASDFADFDFASSDdfasdfadtrutyjyojyhktyderrgfsftuhjgjutghjyurtyjyjrttrgrtyuigjopkhgftr'));
console.log('shufflesort selectionSort ', shuffleSort('SORTEXAMPLE'));