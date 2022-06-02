"use strict";
function max(x,y){
    if(x>y){
    console.log(x +"is larger");
    }else{
        console.log(y+"is larger");
    }
}
max(6,7);

function max2(a,b,c){
    if(a>b && a>c){
        console.log(a+"is largest");
    }
    else if (b>a && b>c){
        console.log(b+"is largest");
     }
      else {
        console.log(c+" is largest");
    }
        
}
max2(6,7,8);
function isVowel(z){
    if(z=='a'||z=='i'||z=='o'||z=='u'||z=='e'){
    console.log(z +" is a vowel");
    }else{
        console.log(z+" is not a vowel");
    }
}
isVowel('j')
//sum
function sum(numbers){
    let sums=0;
   
    for
        (let i=0; i<numbers.length;i++)
        {
            sums+=numbers[i];
        }  
    return sums;
}
console.log(sum([1,2,3,4]));
//multiply
function multip(numbers){
    let multi=1;
    for
        (let i=0; i<numbers.length;i++)
        {
            multi*=numbers[i];
        }
    return multi;
}

console.log(multip([1,2,3,4]));
//reverse
function reverse(x){
    let reverse1="";
    for(let i=x.length-1;i>=0;i--)
    {
        reverse1+=x[i];
    }
    return reverse1;
}
console.log(reverse("juddy"));
//longest word
function findLongestWord(a){
    let longest=0;
    for(let i=0; i<a.length;i++){
        longest=a[0].length
        if(a[i].length>longest){
        
        longest=a[i];
    }  
}
return longest;
}
console.log(findLongestWord(["juddyy","danni","abi"]));
// filter longest word
function filterLongWords(a,b){
   let result=[];
for(let i=0;i<a.length;i++){
   if(a[i].length>b) 
   result.push(a[i]);
}
 return result;
}
console.log(filterLongWords(["juddyy","danni","abi"],3));
//sumof squares
function computeSumOfSquares(a){
    return a.reduce((x,y)=>x+y*y,0);
   
}

console.log(computeSumOfSquares([1,2,3]));
//odd numbers
function printOddNumbersOnly(a){
  
    for(let i=0; i<a.length;i++ )
    if (a[i]%2!=0){ 
        console.log(a[i]);
    }
    }
  
console.log(printOddNumbersOnly([1,3,2]));
//sum of even squares
function computeSumOfSquaresOfEvensOnly(a){
    return a.filter(e=> e%2==0).map(e=>e*e).reduce((x,y)=>x+y,0);
}
console.log(computeSumOfSquaresOfEvensOnly([4,3,2]));
//sum using reduce
function sumReduce(x){
  
    return x.reduce((x,y)=>x+y,0);
}
console.log(sumReduce([4,3,2]));
//multiply using reduce
function multiplyReduce(x){
  
    return x.reduce((x,y)=>x*y,1);
}
console.log(multiplyReduce([4,3,2]));
//find second biggest
function findSecondBiggest(a){
   let maxindex=0;
   let max=0;
    for(let i=0; i<a.length;i++){
        if(a[i]>max){
        max=a[i];
        maxindex=i;
        }
    }
   let secmax=0;
    for(let j=0;j<a.length;j++){
        if(a[j]>secmax && j!=maxindex)
           secmax=a[j];
    }
    return secmax;
}
console.log(findSecondBiggest([1,2,3,4]));
 // fibonacci
 function printfibo(a,b,c){
       
    for(let i =1;i<=a;i++){
           console.log(b + " ");
         let sumOfPrevTwo = b + c;
            b = c;
            c = sumOfPrevTwo;
    }
   }
console.log(printfibo([1,2,3,4]));