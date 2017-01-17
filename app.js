 findSum(1,2,3);
findSum(1,2,3,4,5,6,7,8,9,10);

function findSum()
{
    var i,sum=0;
    for(i=0;i<arguments.length;i++)
    {
     sum+=arguments[i];
     
     }
     console.log("Sum of the numbers is:"+sum);
     return sum;
 }
