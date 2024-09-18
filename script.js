//your JS code here. If required.
function secondHighest(arr) {
    // If array is empty or has less than 2 elements, return -Infinity
    if (arr.length < 2) return -Infinity;

    // Create a set to remove duplicates
    let uniqueArr = [...new Set(arr)];

    // If all elements were the same, return -Infinity
    if (uniqueArr.length < 2) return -Infinity;

    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);

    // Return the second highest element
    return uniqueArr[1];
}
