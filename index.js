const arr = [-4, 3, -9, 0, 4, 1 ]
const arr1 = [1, 2, 3, -1, -2, -3, 0, 0]
const arr2 = [1,-3,1,0,1,-1,2,-3]

function plusMinus(arr){
  let positiveNumber = 0
  let negativeNumber = 0
  let zero = 0
  
for (let i = 0; i < arr.length; i++){
   if (arr[i] > 0){
    positiveNumber++
   }else if (arr[i] < 0){
    negativeNumber++
   }else 
   zero++
  
}
  console.log((positiveNumber / arr.length).toFixed(6))
  console.log((negativeNumber / arr.length).toFixed(6))
  console.log((zero / arr.length).toFixed(6))

}

plusMinus(arr)