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

// let li
// for (let i = 0; i <= 101; i++) {
//     li = document.createElement('h2')
//     li.className = 'nos'
//     // li.style.height = '50px'
//     li.style.width = '80px'
//     // li.style.paddingLeft = '30px'
//     // li.style.paddingRight = '30px'
//     li.style.paddingTop = '10px'
//     li.style.paddingBottom = '10px'
//     // li.style.margin = '0 auto'
//     li.style.color = "#fff"
//     li.style.backgroundColor = "#FD5E53"
//     li.textContent = i
//     li.setAttribute('id',i)

//     if(parseInt(li.textContent) % 2 === 0){
//         li.style.backgroundColor = "#21BF73"
//     }else{
//         li.style.backgroundColor = "#FDDB3A" 
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
//     if(isPrime(parseInt(li.textContent)) === true){
//         li.style.backgroundColor = '#FD5E53'
//     }
//     divCon.appendChild(li)
// }
const div = () => {
    let divCon = document.querySelector('.container')
    divCon.style.display = "flex"
    divCon.style.flexDirection = 'column'
    divCon.style.justifyContent = 'center'
    divCon.style.gap = '3px'
    divCon.style.alignItems = 'center'
    divCon.style.flexWrap = 'wrap'
    divCon.style.width = '500px'
    divCon.style.height = 'fit-content'
    // divCon.style.backgroundColor = "#21BF73"
    divCon.style.margin = '30px auto'
    divCon.style.textAlign = 'center'
    return divCon
}

// h1 header element DOM creation
const header = () => {
    // Create Title (h1) element with content and attributes
    let title = document.createElement('h1')
    title.className = 'title'
    title.textContent = "Number Generator"

    div().appendChild(title)
}


const subHeader = () => {
    let subTitle = document.createElement('h3');
    let author = document.createElement('p')
    subTitle.className = 'subtitle'
    subTitle.textContent = '30DaysOfJavaScript'
    subTitle.innerHTML = `<a href="#">${subTitle.textContent}</a>`
    subTitle.style.fontWeight = '300'
    subTitle.style.fontSize = '22px'

    author.className = 'author'
    author.textContent = 'Author: Kenneth Z Yashim'
    author.innerHTML = `<a href="#">${author.textContent}</a>`
    author.style.fontSize = '16px'
    
    div().appendChild(subTitle)
    div().appendChild(author)
}

const numberGenerator = () => {
    let ul = document.createElement('ul')
    ul.className = 'numContainer'
    ul.style.width = '500px'
    ul.style.height = 'fit-content'
    ul.style.display = 'flex'
    ul.style.flexWrap = 'wrap'
    ul.style.gap = '3px'
    ul.style.margin = '20px auto'
    // ul.style.backgroundColor = '#121212'
    let li
    for(let i = 0; i <= 101; i++) {
        li = document.createElement('li')
        li.className = 'nos'
        li.style.listStyle = 'none'
        li.style.width = '80px'
        li.style.paddingTop = '10px'
        li.style.paddingBottom = '10px'
        li.style.color = "#fff"
        li.style.backgroundColor = "#FD5E53"
        li.textContent = i
        li.setAttribute('id',i)

        if(parseInt(li.textContent) % 2 === 0){
            li.style.backgroundColor = "#21BF73"
        }else{
            li.style.backgroundColor = "#FDDB3A" 
        }
        function isPrime(n){
            if(n<=1){
                return false
            }else if(n === 2){
                return true
            }

            for (let i = 2; i < n; i++) {
                if(n % i == 0){
                    return false
                }
            }
            return true
        }
        if(isPrime(parseInt(li.textContent)) === true){
            li.style.backgroundColor = '#FD5E53'
        }
        
        ul.appendChild(li)
    }
    div().appendChild(ul)
}

header()
subHeader()
numberGenerator()