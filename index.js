function twoNumberSum(array, targetSum) {
    if (!array) return [];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if (array[i] + array[j] == targetSum){
                return [array[i], array[j]];
            }
        }
    }
}

const arr = [3, 5, -4, 8, 11, 1, -1, 6]
const tSum = 10
console.log(twoNumberSum(arr, tSum))