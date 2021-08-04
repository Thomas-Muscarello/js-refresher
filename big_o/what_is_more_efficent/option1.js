function addUpTo(n){
    let total = 0;
    for (let i=1; i<= n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t1 - t2)/1000} seconds`)