// let body = document.querySelector('body')
// const headingMarkup = () => {
//     let h1 = document.createElement('h1')
//     h1.className = 'title'
//     h1.innerHTML = 'Number Generator'
    
// }
// headingMarkup()
// let divCon = document.querySelector('.container')
// divCon.style.display = "flex"
// divCon.style.justifyContent = 'center'
// divCon.style.gap = '3px'
// divCon.style.alignItems = 'center'
// divCon.style.flexWrap = 'wrap'
// divCon.style.width = '500px'
// divCon.style.height = 'fit-content'
// // divCon.style.backgroundColor = "#21BF73"
// divCon.style.margin = '30px auto'
// divCon.style.textAlign = 'center'

// let nums
// for (let i = 0; i <= 101; i++) {
//     nums = document.createElement('h2')
//     nums.className = 'nos'
//     // nums.style.height = '50px'
//     nums.style.width = '80px'
//     // nums.style.paddingLeft = '30px'
//     // nums.style.paddingRight = '30px'
//     nums.style.paddingTop = '10px'
//     nums.style.paddingBottom = '10px'
//     // nums.style.margin = '0 auto'
//     nums.style.color = "#fff"
//     nums.style.backgroundColor = "#FD5E53"
//     nums.textContent = i
//     nums.setAttribute('id',i)

//     if(parseInt(nums.textContent) % 2 === 0){
//         nums.style.backgroundColor = "#21BF73"
//     }else{
//         nums.style.backgroundColor = "#FDDB3A" 
//     }
//     function isPrime(n){
//         if(n<=1){
//             return false
//         }else if(n === 2){
//             return true
//         }

//         for (let i = 2; i < n; i++) {
//             if(n % i == 0){
//                 return false
//             }
//         }
//         return true
//     }
//     if(isPrime(parseInt(nums.textContent)) === true){
//         nums.style.backgroundColor = '#FD5E53'
//     }
//     divCon.appendChild(nums)
// }

let divCon = document.querySelector('.container')
divCon.style.display = "flex"
divCon.style.justifyContent = 'center'
divCon.style.gap = '3px'
divCon.style.alignItems = 'center'
divCon.style.flexWrap = 'wrap'
divCon.style.width = '500px'
divCon.style.height = 'fit-content'
// divCon.style.backgroundColor = "#21BF73"
divCon.style.margin = '30px auto'
divCon.style.textAlign = 'center'
// h1 header element DOM creation
const header = () => {
    // Create Title (h1) element with content and attributes
    let title = document.createElement('h1')
    title.className = 'title'
    title.textContent = "Number Generator"
    // divCon.appendChild(title)
    // console.log(title)
    return title
}
divCon.appendChild(header())