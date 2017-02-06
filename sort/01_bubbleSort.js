//冒泡排序
    function bubbleSort(array) {
        //外层循环，共要进行array.length次求最大值
        for (var i = 0; i < array.length; i++) {
            // 内层循环，比较相邻的元素，如果第一个比第二个大，就交换它们
            for (var j = 0; j < array.length-i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(array, j, j + 1);
                }
            }
        }
        return array;
    }

    function swap(array, a, b) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    console.log(bubbleSort([1,3,4,2,5]));   //[1,2,3,4,5]
    console.log(bubbleSort([6,3,5,2,2,1])); //[1,2,2,3,5,6]