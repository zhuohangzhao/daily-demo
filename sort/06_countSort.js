
// 计数排序

    function countSort(arr) {
        var len = arr.length, B = [], C = [], min = max = arr[0];
        for (var i = 0; i < len; i++) {
            min = min <= arr[i]? min : arr[i];
            max = max >= arr[i]? max : arr[i];
            C[arr[i]] = C[arr[i]] ? C[arr[i]] + 1 : 1;
        }
        for (var j = min; j < max; j++) {
            C[j + 1] = (C[j + 1] || 0) + (C[j] || 0);
        }
        for (var k = len - 1; k >=0; k--) {
            B[C[arr[k]] - 1] = arr[k];
            C[arr[k]]--;
        }
        return B;
    }

    console.log(countSort([1,3,4,2,6,5]));

