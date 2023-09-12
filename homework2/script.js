function findKthElement(arr1, arr2, k) {
    const mergedArray = mergeArrays(arr1, arr2);
    if (k < 1 || k > mergedArray.length) {
        return null; 
    }
    return mergedArray[k - 1]; 
}

function mergeArrays(arr1, arr2) {
    const merged = [];
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}

const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

const result = findKthElement(arr1, arr2, k);
console.log("вывод :" +result); 