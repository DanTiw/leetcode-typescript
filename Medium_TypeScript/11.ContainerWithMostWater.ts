function maxArea(height: number[]): number {
    let right=height.length-1;
    let left=0;
    let maxArea=0;

    while(left<right){

        maxArea=Math.max(Math.min(height[left],height[right])*(right-left),maxArea);
        if(height[left]<=height[right]){
            left++;
        }else
            right--;

    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));