var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var i = 0;
var step = 9;


function stepFilter(arr, i, step){
    var length = arr.length;
    var first = arr[0]
    console.log(arr)
    while (step < length - 1){
        arr.splice(i, step);
        console.log(arr)
        i++;
        length = arr.length
    }
    arr.unshift(first)
    return arr
}


console.log(stepFilter(arr, i, step))