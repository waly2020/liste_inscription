let btnToggle = document.querySelector(".toggle");
const forms = document.querySelectorAll(".contener_forms > form");
const inputs = document.querySelectorAll(".input");
const sendBtn = document.querySelector(".submit");
let liste = document.getElementById("liste");

let c = 0;
let canSend = false;

btnToggle.addEventListener("click", () => {
    c += 1;
    if (c > 1) {
        c = 0;
    }
    for (let i = 0; i < forms.length; i++) {
        forms[i].classList.remove("active");
    }
    forms[c].classList.add("active");
    btnToggle.classList.toggle("active");
})

inputs.forEach(input => {
    input.addEventListener("input", () => {
        canSendDatas();
    })
})

function canSendDatas() {
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        if (input.value == "") {
            sendBtn.classList.remove("active");
            canSend = false;
            break;
        } else {
            canSend = true;
            sendBtn.classList.add("active");
        }
    }
}