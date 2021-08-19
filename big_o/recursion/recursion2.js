function sumRange(num){
    //basecase
    if(num ===1) return 1;
    //recursion call
    return num + sumRange(num-1);
}

/*

sumRange(4)
    4 + sumRange(3) = 10
        3 + sumRange(2) = 6
            2 + sumRange(1) = 3
                1
    

*/