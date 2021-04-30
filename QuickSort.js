function quickSort(arr, start, end){
    let pivotIndex;
    if(arr.length > 1){
        pivotIndex = partition(arr, start, end);

        if(start < pivotIndex -1){
            quickSort(arr, start, pivotIndex-1);
        }
        if(pivotIndex < end){
            quickSort(arr, pivotIndex,end)
        }

    }
    return arr;
}

function partition(arr, start, end){
    let middle = Math.floor((start + end)/2);
    let pivotEle = arr[middle];

    while(start <= end){
        while(arr[start] < pivotEle){
            start++;
        }
        while(arr[end] > pivotEle){
            end--;
        }

        if(start <= end){
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    return start;
}