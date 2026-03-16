// Advance Array operations using Higher -Order Functions
//1. Removing Elements from Arrays

//Method 1: Using filter() - non-destructive method

const numbers =[ 1,5,9,3,8,34,40,63];
const remove = 8;
const without8 = numbers.filter (n => n !==remove);
console.log("Array:",numbers);
console.log(`Without ${remove}, Array ${without8}`);


//Method 2: splice()- destructive method - Remove value at index : 5 

const arr=[ 1,5,9,3,8,34,40,63];
console.log(`Array before removal : ${arr}`);
arr.splice(5,1) ;

console.log(`Removing:  ${arr.splice(5,1)} from Array`);
console.log(`Array after removal : ${arr}`);


//Method 3:Remove by value

function removeByValue(arr,value){
    return arr.filter( item => item != value);
}
const fruits= [ 'cherry', 'apple','tomato','chilli','banana'];
const fruitArr =removeByValue(fruits,'chilli');
console.log("Original array:", fruits);
console.log("After removing : chilli" ,fruitArr);


//Method 4:Remove by occurrence 
function removeFirstOccurrence(arr,val){
    const index = arr.indexOf(val);
if (index > -1){
return [ ... arr.slice(0,index),... arr.slice(index+1)]
}
return  arr;
}
const fruits2= [ 'cherry','banana', 'apple','tomato','chilli','banana'];
console.log("Array before removal of first occurrence of 'banana': ", fruits2);
console.log("Array after removal:");
console.log(removeFirstOccurrence(fruits2,"banana"));
// 2.Merging Arrays
// Method 1: using concat()
// Method 2: spread operator
// Method 3: Using multiple Arrays


//3. Removing Duplicates
// Method 1:Using Set
const uniqueSet = new Set(nums);
const uniqueAcc = [...uniqueSet];
console.log(" Original Array:",nums);
console.log("Array with only Unique values:",uniqueArr);
//comparing above two lines into one line...
const unique =[ ...new Set(nums)];
console.log("Unique values:",unique);

// Method 2:Using filter()
const unq = nums.filter((num,idx)=> nums.indexOf(num)===idx);
console.log("Removed Duplicates using filter():");
console.log(unq);


// Method 3:Using reduce()
const uniqueUsingReduce = nums.uniqueUsingReduce((acc,num )=>{
    if(acc.includes(num)){
        acc.push(num);
}
return acc;

},[]);
console.log("Original Array",nums);
console.log("Array containing unique values(created using reduce():");
console.log(uniqueUsingReduce);

//4.Sorting Arrays
//Numeric sorting (arrays)
//Reverse order sorting
// String sorting
//Case-insensitive sorting


//5. Soarting Objects
//Sort by property
// Sort in ascending order(numbers)
//Sort by name