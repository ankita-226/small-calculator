const form = document.getElementById("form")
const result = document.getElementById("result")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
const button = document.getElementById("button")
let operator = document.getElementById("operator")
button.addEventListener("click",function(start){
    start.preventDefault()
    num1 = parseFloat(num1.value)
    num2 = parseFloat(num2.value)
    operator = operator.value
    let calRes
    switch(operator){
        case "+":
            calRes = num1+num2
            break
        case "-":
            calRes = num1-num2
            break
        case "*":
            calRes = num1*num2
            break
        case "/":
            calRes = num1/num2
            break

       default:
        calRes = "inavalid operator"
        break
    }
    result.textContent = calRes;
})
