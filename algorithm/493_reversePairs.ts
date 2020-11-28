const reversePairs = function (nums: number[]) {
    return reverseSubPairs(nums, 0, nums.length - 1);
};

const reverseSubPairs = function (nums: number[], left: number, right: number): number {
    if (left === right) return 0;
    const mid = Math.floor((left + right) / 2);
    const leftNum = reverseSubPairs(nums, left, mid);
    const rightNum = reverseSubPairs(nums, mid + 1, right);
    let ret = leftNum + rightNum;

    let i = left;
    let j = mid + 1;
    while (i <= mid) {
        while (j <= right && nums[i] > nums[j] * 2) {
            j++;
        }
        ret += j - (mid + 1);
        i++;
    }

    const sorted = [];
    i = left;
    j = mid + 1;
    let p = 0;
    while (i <= mid || j <= mid + 1) {
        if (i > mid) {
            sorted[p++] = nums[j++];
        } else if (j > right) {
            sorted[p++] = nums[i++];
        } else {
            if (nums[i] < nums[j]) {
                sorted[p++] = nums[i++];
            } else {
                sorted[p++] = nums[j++];
            }
        }
    }

    for (p = 0; p < sorted.length; p++) {
        nums[left + p] = sorted[p];
    }

    return ret;
};

reversePairs([1, 3, 2, 3, 1]);
