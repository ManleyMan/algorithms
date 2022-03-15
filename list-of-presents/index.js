function howManyGifts(maxBudget, gifts){
    let sortGift = gifts.sort(function(a,b){return a-b}); 
    let numOfGifts = []
    for(let i=0; i < sortGift.length; i++){
     if(maxBudget >= sortGift[i]){
       numOfGifts.push(sortGift[i])
       maxBudget -= sortGift[i]
     }
    }
    return numOfGifts.length
  }

  // sample tests

 

  
        console.log(howManyGifts(20, [13, 2, 4, 6, 1]), 4);
   


  
        console.log(howManyGifts(0, [1]), 0);
  

