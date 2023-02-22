const billAmt=document.querySelector("#bill-amt")
const cashGiven=document.querySelector("#cash-given")
const Checkbutton=document.body.querySelector("#check-btn")
const ShowNotes=document.querySelectorAll(".no-of-notes")
const message=document.querySelector(".error-message")

const notes=[2000,500,100,20,10,5,1]

function clickHandler(){
    let cash=cashGiven.value
    
    let bill=billAmt.value
    
    if(cashGiven.value>billAmt.value){
        let returnAmt=cashGiven.value-billAmt.value
        calculateNotes(returnAmt)
        
    }
    
    else if(cash<bill){
        message.innerText="Do you want to wash plates"
    }
    else {
        message.innerText="Invalid Amount !"
    }
}

function calculateNotes(amount){
    
    for(let i=0;i<notes.length;i++){
        if(notes[i]<=amount){
            ShowNotes[i].innerText=Math.trunc(amount/notes[i])
            amount=amount%notes[i]
        }
        

    }



}

Checkbutton.addEventListener('click',clickHandler)