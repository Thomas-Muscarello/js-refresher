function countdown(num){
    //Make the Base Case for when the answer is zero
    if (num <=0){
      console.log("All Done");
      //The return is used to end
      return;  
    }
    //If the answer isn't zero, you need to change the data
    console.log(num);
    num--

    //recall the function with the new data
    countdown(num);
}

//print 3
//countdown 2
//print 2
//countdown 1
//print 1
//countdown 0
//All Done