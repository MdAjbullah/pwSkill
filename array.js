const arr=[1,2,3,4,5,6,7,8,9,10];
const arr2=[11,12,13,14,15,16,17,18,19,20];
const addArray=[...arr,...arr2];
console.log(addArray);

const arr3=arr.concat(arr2);
console.log(arr3);

const arr4=[arr,arr2];//... is called rest operatore and rest operator
 console.log(arr4);//there is a problem in this code becouse we cant use the value easly in this code

 