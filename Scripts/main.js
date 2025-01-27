function getElementValu(id){
    const valueText = document.getElementById(id).innerText
    const valuNumber = parseInt(valueText);
    return valuNumber;
}
const btns = document.getElementsByClassName("btn-outline");
for(btn of btns){
    btn.addEventListener("click", function(event){
        const btnText = event.target.innerText;


        const seatDetails = document.getElementById("seat-details")
        const div = document.createElement("div")
        div.classList.add("flex")
        div.classList.add("justify-around")
        div.classList.add("border-b-2")
        const p = document.createElement("p");
        const price = document.createElement("p");
        p.innerText = btnText;
        price.innerText = "550"
        div.appendChild(p);
        div.appendChild(price);
        seatDetails.appendChild(div);

        const totalPriceValue = getElementValu("total-price");
        document.getElementById("total-price").innerText = totalPriceValue + 550;



        updateBadge();
        seatLeft();
    });
}
function updateBadge(){
    const badgeValue = getElementValu("badge");
    // const sum = badgeValue +1
    document.getElementById("badge").innerText = badgeValue+1;
}
function seatLeft(){
    const leftValue = getElementValu("seat-left");
    document.getElementById("seat-left").innerText = leftValue-1;
}

function totalPriceUpdate(){

}