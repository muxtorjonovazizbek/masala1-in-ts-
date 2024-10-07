// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




// =================== MASALA IN TS ========================

// 35.Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
// Input: n = 3,  const obj = {a: 2, b: 3, c: 4}
// Output: const res = {a: 6, b: 9, c: 12}


let obj = {a: 2, b: 3, c: 4}

type Obj = {
  a: number,
  b: number,
  c: number
}

function incNum(n:Obj, m:number) {
  let result = {}
    
  let keys = Object.keys(n)
  let nums = Object.values(n)

  nums.forEach((item, ind) => {
    
    let increasedNums = item * m
    result[keys[ind]] = increasedNums

  })
  console.log(result);
}
incNum(obj, 3)

// =================== ------- ========================



// 36.argument sifatida berilgan string da nechta son qatnashganligini aniqlaydigan function tuzing

function findNumsInString(a: number | string) {
  
  let arr = a.split("")
  let count = 0

  arr.forEach(item => {
    if (!isNaN(item)) {
      count++
    }
  });
  console.log(count > 1 ? `${count} numbers in this string` : `${count} number in this string`);

}
findNumsInString("salom12")

// =================== ------- ========================



// 37.18. Ixtiyoriy arrow function yarating va uning parametriga bir nechta sonlar berilsin. 
// va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang: 
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]

let arr = [1,22,3]

function makeNewArr(n:number[]) {

  let addedNum  = n.reduce((a,b)=> a + b, 0)
  let newArr = addedNum.toString().split("").map(Number)
  console.log(newArr);

}
makeNewArr(arr)

// =================== ------- ========================



// 38.argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing

function findA(a:string, b:string) {
 
  let arr = a.toLowerCase().split("")

  let total = 0
  for (let item of arr) {
    if (item.includes(b)) {
        total++
    }
  }
  return `${total} ta ${b} qatnashgan`
}
console.log(findA("Hello", "l"));

// Read before use!
// Bu masala ozingiz text ni kiritasiz va osha textni ichida 
// qaysi harf nechtaligini bilmoqchi bolse uni ham argumnetdan bersangiz boladi

// =================== ------- ========================



// 39.2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son 
// berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping
// input: 8 , k = 3

const num = 8

function findK(num:number) {
  let count = 0
 while (num % 2 === 0) {
    num = num / 2
    count++
 }
 console.log(count);
 
}
findK(num)

// =================== ------- ========================



// 40.array ichidagi o’rtadagi sonni topadigan function tuzing 
// Input: arr = [1,2,3,4,5] middleNumber = 3
// Input arr = [1,2,3,4] middleNumber = 2.5 o’rtadagi 2 ta sonning o’rta arifmetigi

function findAverage(arr:number[]) {
  console.log(arr);


  let totalNums = 0
  arr.forEach(item => {
    totalNums += item
  })
  console.log(totalNums / arr.length);
  
  
}
findAverage([1,2,3,4,5])

// =================== ------- ========================


// 50.function argumentiga berilgan arrayning ichidagi takrorlanmagan element yoki element larni chiqaring
// misol uchun: 4, 9 soni 1 marta ishtirok etgan qolgan sonlar 
// 1 martadan ko’p qatnashgani uchun javob 4, 9 bo’lgan namunada

  function getUniqueNums(nums:number[]) {
    const uniqueNumbers =  nums.filter(val=> nums.indexOf(val) == nums.lastIndexOf(val))
    console.log(uniqueNumbers);
    
  }
  getUniqueNums([4,1,2,1,2,9])

  // =================== ------- ========================



// 51.Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54


const arr1 = [
{name: 'John', age: 13},
{name: 'Mark', age: 56},
{name: 'Rachel', age: 45},
{name: 'Nate', age: 67},
{name: 'Jeniffer', age: 65}
]

interface Data {
  name: string,
  age: number,
}

function sortArr(data:Data[]) {
  const soretedArr = data.sort((a,b)=> a.age-b.age)
  const youngest = soretedArr[0]  
  const oldest = soretedArr[data.length-1]
  const difference = Math.abs(youngest.age - oldest.age)

  console.log(`The youngest is ${youngest.age} years old`);
  console.log(`The oldest is ${oldest.age} years old`);
  console.log(`The difference between them is ${difference} years`); 
}
sortArr(arr1)

  // =================== ------- ========================



// 52.Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)

let products = [
  {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
  {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
  {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
  {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
  ];

  type Products = {
    id: number,
    name: string,
    price: number,
    rating: number,
    discount: number
  }

  function removeData(b:Products[]) {
   
    let result = b.filter((item)=> item.id !== 4)
    console.log(result);
     
  }
  removeData(products)