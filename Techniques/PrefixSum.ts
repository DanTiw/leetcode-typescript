/*
    ```
function calculatePrefixSum(arr):
    n = length of arr
    prefixSum = new array of size n

    // Calculate the prefix sum
    prefixSum[0] = arr[0]
    for i from 1 to n-1:
        prefixSum[i] = prefixSum[i-1] + arr[i]

    return prefixSum

function rangeSum(prefixSum, left, right):
    if left == 0:
        return prefixSum[right]
    else:
        return prefixSum[right] - prefixSum[left-1]

function solveProblemUsingPrefixSum(arr):
    prefixSum = calculatePrefixSum(arr)

    // Initialize result (could be a sum, count, etc.)
    result = initialize based on problem

    // Use prefix sum to solve the problem
    for i from 0 to length of arr - 1:
        for j from i to length of arr - 1:
            // Calculate sum of subarray arr[i..j]
            subarraySum = rangeSum(prefixSum, i, j)

            // Update result based on subarraySum
            result = updateResult(result, subarraySum)

    return result
```

Key points about this Prefix Sum approach:

    1. `calculatePrefixSum` function:
- Creates an array where each element is the sum of all previous elements including itself.
- This allows for O(1) time complexity when calculating the sum of any subarray.

2. `rangeSum` function:
- Calculates the sum of elements between two indices in constant time.
- Uses the property: sum(arr[left..right]) = prefixSum[right] - prefixSum[left-1] (if left > 0)

    3. `solveProblemUsingPrefixSum` function:
- This is a template for how you might use prefix sums to solve a problem.
- It calculates all possible subarray sums and updates a result based on these sums.
- The exact implementation of `updateResult` would depend on the specific problem.

4. Time Complexity:
    - Calculating the prefix sum is O(n)
- The nested loops in `solveProblemUsingPrefixSum` make it O(n^2) in this general case, but many problems can be solved in O(n) using prefix sums.

5. Space Complexity:
    - O(n) for storing the prefix sum array

Prefix Sum is particularly useful for problems involving:
    - Range sum queries
- Finding subarrays with a particular sum
- Calculating running averages
- Problems involving cumulative data

    */