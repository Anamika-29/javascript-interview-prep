// Question 1 => Write code to log each element in console, one by one, using a loop.

const arr  = [1,2,3,[4,5,[6,7],8],9,10];
function logElements(arr){
    for(let i = 0;i<arr.length;i++){
        // if(arr[i] instanceof Array){
        if(arr[i].constructor === Array){
            logElements(arr[i])
        }
        else{
        console.log(arr[i])
        }
    }
}
// logElements(arr);

function logElementsByStack(arr){
  let stack = [];
  for(let i = arr.length-1;i>=0;i--){
      stack.push(arr[i])
  }
  while(stack.length>0){
      let current = stack.pop();
      if(current instanceof Array){
          for(let i = current.length-1;i>=0;i--){
      stack.push(current[i])
  }
      }
      else{
          console.log(current,"Number")
      }
  }
}
// logElementsByStack(arr)

// Question 2 => Find the second largest number in the array.



const arr2 = [1,2,3,4,5,11,7,13,0];
function secondLargest(arr){
let largest = -Infinity;
let secondLargest = -Infinity;
for(let i = 0; i< arr2.length;i++){
    if(arr2[i]>largest){
        secondLargest = largest;
        largest = arr2[i];
        
    } else
    if(arr2[i]!==largest && arr2[i]>secondLargest){
        secondLargest = arr2[i]
    }
    
}
console.log("Largest",largest)

console.log("Second Largest",secondLargest)
}
secondLargest(arr2)

// Question 3 => Sorting based on field in object array.

const arr3 = [
    {name:"John",age:30},
    {name:"Alice",age:25},
    {name:"Bob",age:35},
    {name:"Eve",age:32}
]

function sortByField(arr, field) {
    return arr.sort((a, b) => {
        if (typeof a[field] === "string") {
            return a[field].localeCompare(b[field]);
        }
        return a[field] - b[field];
    });
}

console.log(sortByField(arr3,"age"));
console.log(sortByField(arr3,"name"));