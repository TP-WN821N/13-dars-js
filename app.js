// 1.Qiymatlari sonlardan iborat bo’lgan object berilgan. Qiymatlarini n martaga ochiruvchi dastur tuzing
let N = 3
let object = { a: 2, b: 4, c: 7 }
const obgMultiplyN = (obj, n) => {
  let new_obj = {}
  for (let key in obj) {
    new_obj[key] = obj[key] * n
  }
  return new_obj
}
// console.log(obgMultiplyN(object, N));


// 2.argument sifatida berilgan string da nechta so’zda a harfi ishtirok etganini aniqlaydigan function tuzing
let string = "salom a olam hello world Assalomu alaykum"
const wordsCountA = (str = '') => {
  let arr = str.split(" ")
  let new_arr = arr.filter(item => item.split("").includes("a"))
  return new_arr.length
}
// console.log(wordsCountA(string));


// 3.Quyidagi ko’rinishda object lardan tuzilgan array berildi. Agar read property true bo’lsa o’sha kitob o’qigan deb chiqarsin, aks holda o’qilmagan deb chiqarsin
const books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false
  },
  {
    title: "Dunyoning ishlari",
    author: "O’tkir Hoshimov",
    read: true
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf hazratlari",
    read: true
  },
]
const booksReadUnread = (arr = []) => {
  arr.forEach(item => {
    let resolv
    if (item.read) {
      resolv = `${item.author}ning ${item.title} kitobi o'qilgan`
    } else {
      resolv = `${item.author}ning ${item.title} kitobi o'qilmagan`
    }
    console.log(resolv);
  })

}
// booksReadUnread(books)


// 4.String lar arrayi berilgan. Shunday object hosil qilinki o’sha object kalitlari array elementlaridan va qiymatlari ularning uzuligindan iborat bo’lsin
let array = ['hello', 'world', 'salom', 'olam']
const arrItemsLn = (arr) => {
  let obj = {}
  arr.map(item => obj[item] = item.length)
  return obj
}
// console.log(arrItemsLn(array));


// 5.Arraydagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating
// let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const arrItemCount = (arr = []) => {
//   let oneElementArr = []
//   arr.forEach(item => {
//     if (!oneElementArr.includes(item)) {
//       oneElementArr.push(item)
//     }
//   })
//   let obj = {}
//   oneElementArr.forEach(item => {
//     obj[item] = arr.filter(filItem => filItem == item).length
//   })
//   return obj
// }
// console.log(arrItemCount(animals));


// 6.Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
let TwoArray = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];
let maxAgeMinAge = (arr = []) => {
  let minAge = arr.reduce((a, b) => {
    return a.age > b.age ? b : a
  })
  let maxAge = arr.reduce((a, b) => {
    return a.age < b.age ? b : a
  })
  return maxAge.age - minAge.age
}
// console.log(maxAgeMinAge(TwoArray));


// 7.Array truthy va falsy elementlardan tuzilgan. O’sha arraydagi truthy va falsy elementlarni alohida arraylarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
let three_arr = [false, 1, 10, "", null, "sultonqul", 1.13, 0]
const getTruthyFalsy = (arr) => {
  let truthy = arr.filter(item => item)
  let falsy = arr.filter(item => !item)
  return { truthy, falsy }
}
// console.log(getTruthyFalsy(three_arr));


// 8.Gapdagi eng uzun va eng qisqa so’zlarni aniqlab {minWord: “…”, maxWord: “….”} qiymat qaytaruvchi minManWord() nomli function yarating
let twoString = "Men dasturlash kursida o’qiyman"
const minMaxWord = (str = '') => {
  let arr = str.split(" ")
  let minWord = arr.reduce((a, b) => {
    return a.length < b.length ? a : b
  })
  let maxWord = arr.reduce((a, b) => {
    return a.length > b.length ? a : b
  })
  return { minWord, maxWord }
}
// console.log(minMaxWord(twoString));