module.exports = { 
  //param A : array of integers
  //return a strings
   largestNumber : function(A){
         A.sort((a, b) => {
             let op1 = "" + a + b;
             let op2 = "" + b + a;
             if(parseInt(op1) > parseInt(op2)) {
                 return -1;
             } else {
                 return 1;
             }
         });
         
         let ans = A.reduce((prevAccumulated, curr) => prevAccumulated + curr, '');
         
         let firstDigitInd = ans.length - 1;
         for(let i = 0; i < ans.length; i++) {
             if(ans[i] > '0' && ans[i] <= '9') {
                 firstDigitInd = i;
                 break;
             }
         }
         
         return ans.slice(firstDigitInd, ans.length);
   }
 };
 