function largestSubarraySum(arr) {
  let globalLargest = 0;
  let localLargest = arr[0];
  const subArray = arr.slice(1, arr.length - 1);

  subArray.forEach(n => {
    localLargest += n;
    if (localLargest > globalLargest) { globalLargest = localLargest };
  });

  return globalLargest
}