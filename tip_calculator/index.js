const bil = document.getElementById("bil") //This is the bill input
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twentyFive = document.getElementById("twenty_five")
const fifty = document.getElementById("fifty")
const custom = document.getElementById("custom")
const pple = document.getElementById("pple")
const tipAmount = document.querySelector(".tipAmountSc")
const totalSc = document.querySelector(".totalsc")
const reset = document.querySelector(".reset")
const select = document.getElementById("select")
const cancel = document.getElementById("cancel")
const newPercentage = document.querySelector(".new_percentage")
const customPercentage = document.querySelector(".custom_percentage")
const zero = document.querySelector(".zero")

function zeroP(){
    zero.classList.toggle("active")
    zero.textContent = "Can't be zero"
    pple.classList.toggle("active")
} 

function calculate(percent){
    tips = parseFloat(bil.value)  * percent
    console.log(tips)
    let tips_person 
    let totalAmount
    if ( pple.value > 0){
        tips_person = tips * parseFloat(pple.value) 
        tipAmount.textContent = tips_person
        totalAmount = tips_person + parseFloat(bil.value)
        totalSc.textContent = totalAmount
        
    }
    else{
        zeroP()
    }
    

}


console.log(custom)
custom.addEventListener("click", ()=>{
    newPercentage.classList.add("show")
})
select.addEventListener("click", ()=>{
    newPercentage.classList.remove("show")
})
cancel.addEventListener("click", ()=>{
    newPercentage.classList.remove("show")
})

five.addEventListener("click", ()=>{
    if(bil.value > 1){
        calculate(0.05)
    }
    else{
        alert("Please enter bill")
    }

})
ten.addEventListener("click", ()=>{
    if(bil.value > 1){
        calculate(0.1)
    }
    else{
        alert("Please enter bill")
    }

})
fifteen.addEventListener("click", ()=>{
    if(bil.value > 1){
        calculate(0.15)
    }
    else{
        alert("Please enter bill")
    }

})
twentyFive.addEventListener("click", ()=>{
    if(bil.value > 1){
        calculate(0.25)
    }
    else{
        alert("Please enter bill")
    }

})
fifty.addEventListener("click", ()=>{
    if(bil.value > 1){
        calculate(0.5)
    }
    else{
        alert("Please enter bill")
    }

})
select.addEventListener("click", ()=>{
    if(bil.value > 1){
        calculate(parseFloat(customPercentage.value)/100)
    }
    else{
        alert("Please enter bill")
    }

})
reset.addEventListener("click", ()=>{
    bil.value = ""
    pple.value = ""
    tips = ""
    let tips_person 
    tips_person = "" 
    tipAmount.textContent = 0.00
    totalSc.textContent = 0.00
})



