
let calculation = localStorage.getItem('calculation') || ''
display()
function element(value){
    
    const num = document.querySelector(value).innerHTML
   
    calculation += num
    display()
    localStorage.setItem('calculation', calculation)
    
}
function display(){
    document.querySelector('.view').innerHTML = calculation
}

function clearItem(){
    localStorage.removeItem('calculation')
    calculation = ''
    display()
    
        
}
function mathResult(){
    
    calculation = eval(calculation)
    display()
}