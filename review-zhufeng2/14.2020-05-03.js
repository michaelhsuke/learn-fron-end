/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2
 * @return {number} 
 */

var findMedianSortedArrays = function(nums1, nums2) {
  var mergedNums = []
  var i = 0, j = 0, k = 0
  while (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
          mergedNums[k++] = nums1[i]
          i++
      } else {
          mergedNums[k++] = nums2[j]
          j++
      }
  }

  if (i < nums1.length) {
      mergedNums = mergedNums.concat(nums1.slice(i))
  }

  if (j < nums2.length) {
      mergedNums = mergedNums.concat(nums2.slice(j))
  }

  var midIndex = Math.ceil(mergedNums.length / 2)
  if (mergedNums.length % 2) {
    return mergedNums[midIndex]
  } else {
    return  (mergedNums[midIndex - 1] + mergedNums[midIndex]) / 2
  }

};

console.log(findMedianSortedArrays([1, 2], [3, 4]))