
// 插入排序
    
    function insertSort(arr) {
        for(var i = 1; i< arr.length; i++){
            var key = arr[i];
            var j = i - 1;
            while ( j >= 0 && arr[j] > key){
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;   // 先找到位置，再赋值原来的值
        }
        return arr;
    }

    console.log(insertSort([1,3,4,2,6,5]));

