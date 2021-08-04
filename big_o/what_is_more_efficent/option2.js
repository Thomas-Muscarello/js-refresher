function addUpTo(n){
    return n*(n+1)/2;
}

console.log(addUpTo(3))

let t1 = performance.now();
addUpTo(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t1 - t2)/1000} seconds`)