// 4! === 4*3*2*1

function factorial(num){
    let total = 1;
    for(let i=num; i> 0; i--){
        total *= 1
    }
    return total
}

//Recursive way

function factorial2(num){
    //base case
    if (num ===1) return 1;
    return num * factorial(num-1)
}

