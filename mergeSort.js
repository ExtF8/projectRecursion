const input = [3, 2, 1, 13, 8, 5, 0, 4, 6, 7, 10, 11, 12];
const output = mergeSort(input);
console.log('Sorted: ', output);

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    // Split array in two halves
    const middle = Math.floor(array.length / 2);
    // Left half
    const left = array.slice(0, middle);
    // Right half
    const right = array.slice(middle);

    // Sorted halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge both halves
    const mergedHalves = merge(sortedLeft, sortedRight);
    return mergedHalves;
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right halves and push smaller one into result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Push remaining elements of left and/or right into result
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}
