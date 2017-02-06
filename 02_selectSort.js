
// 选择排序
    function selectSort(array) {
        for(var i = 0; i < array.length-1; i++){
            var min = array[i];
            for(var j = i+1; j < array.length; j++){
                if (array[j] < min) {
                    var temp = min;
                    min = array[j];
                    array[j] = temp;
                }
            }
            array[i] = min;
        }
        return array;
    }

console.log(selectSort([1,3,4,2,6,5]));
console.log(selectSort([1,2,4,8,2,5]));