
//归并排序

    function mergeSort(array, p, r) {
        if (p < r){
            var q = Math.floor((p + r) / 2);
            mergeSort(array, p, q);
            mergeSort(array, q + 1, r);
            merge(array, p, q, r);
        }
    }

    function merge(array, p, q, r) {
        var n1 = q - p + 1, n2 = r -q , left = [], right = [], m = n = 0;
        for (var i = 0; i< n1; i++) {
            left[i] = array[ p + i];
        }
        for (var j = 0; j < n2; j++) {
            right[j] = array[q + 1 + j];
        }
        left[n1] = right[n2] = Number.MAX_VALUE;
        for (var k = p; k <= r; k++) {
            if ( left[m] <= right[m]) {
                array[k] = left[m];
                m++;
            } else {
                array[k] = right[n];
                n++;
            }
        }
    }


