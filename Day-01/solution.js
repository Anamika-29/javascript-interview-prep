// Write code to log each element in console, one by one, using a loop.

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
logElements(arr);