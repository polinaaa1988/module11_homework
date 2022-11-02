let arr = [1, 3, 5, 2, 9];
let even = 0;
let odd = 0;
let count0=0;

function getTypeNum(){
    for ( var i=0; i < arr.length; i++){
        if (typeof(arr[i]) == "number") if (arr[i]%2==0) if (arr[i]!== 0) if (arr[i]!= null) {
               even++;
               return even;
            }
          
          if (arr[i]%2==1) {                                        //проверка на нечетность//
            odd++;
            return odd;
          }
        
          if(arr[i]===0) {                                               //считаем кол-во 0//
            count0++;
            return count0;
          }
        }
}

getTypeNum();
console.log("Количество четных - "+even);
console.log("Количество нечетных - "+odd);
console.log("Количество нулей - "+count0);