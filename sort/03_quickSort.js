
//快速排序

    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        var pivotIndex = Math.floor(arr.length / 2),
            pivot = arr.splice(pivotIndex, 1)[0],   // pivot 是数组的一个值
            left = [],
            right = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        //递归
        return quickSort(left).concat([pivot], quickSort(right));
    }

    console.log(quickSort([1,3,4,2,6,5]));