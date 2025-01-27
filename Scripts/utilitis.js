function getElementValu(id) {
    const valueText = document.getElementById(id).innerText;
    const valuNumber = parseInt(valueText);
    return valuNumber;
}

const btns = document.getElementsByClassName("btn-outline");
const applyButton = document.getElementById("apply");
const nextButton = document.getElementById("next");

for (let btn of btns) {
    btn.addEventListener("click", function (event) {
        const btnText = event.target.innerText;

        if (getElementValu("badge") + 1 > 4) {
            alert("max seats selected");
            return;
        }

        if (event.target.disabled) {
            return;
        }

        const seatDetails = document.getElementById("seat-details");
        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-around");
        div.classList.add("border-b-2");

        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const price = document.createElement("p");

        p.innerText = btnText;
        p2.innerText = "Economy";
        price.innerText = "550";

        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(price);
        seatDetails.appendChild(div);

        event.target.setAttribute("disabled", true);
        event.target.style.background = "#1DD100";

        totalPriceUpdate();
        grandTotalUpdate();
        updateBadge();
        seatLeft();

        enableApplyButton();
        enableNextButton();
    });
}

function updateBadge() {
    const badgeValue = getElementValu("badge");
    document.getElementById("badge").innerText = badgeValue + 1;
}

function seatLeft() {
    const leftValue = getElementValu("seat-left");
    document.getElementById("seat-left").innerText = leftValue - 1;
}

function totalPriceUpdate() {
    const totalPriceValue = getElementValu("total-price");
    document.getElementById("total-price").innerText = totalPriceValue + 550;
}

function grandTotalUpdate(status) {
    const totalPriceValue = getElementValu("total-price");
    if (status === undefined) {
        const grandTotalValue = getElementValu("grand-total");
        document.getElementById("grand-total").innerText = totalPriceValue;
    } else {
        const copun = document.getElementById("copun").value;
        const badgeValue = getElementValu("badge");
        if (copun === "Couple 20" || badgeValue === 4) {
            const discount20 = totalPriceValue * 0.20;
            document.getElementById("grand-total").innerText = totalPriceValue - discount20;
            discountAdd();
        }
        else if (copun === "NEW15" && badgeValue === 2) {
            const discount15 = totalPriceValue * 0.15;
            document.getElementById("grand-total").innerText = totalPriceValue - discount15;
            discountAdd();
        }
    }
}

function discountAdd() {
    const totalPriceValue = getElementValu("total-price");
    const grandTotalValue = getElementValu("grand-total");
    const discount = totalPriceValue - grandTotalValue;
    document.getElementById("dis-amount").innerText = discount;
}

function enableApplyButton() {
    const badgeValue = getElementValu("badge");
    const applyButton = document.getElementById("apply-btn");
    if (badgeValue >= 2) {
        applyButton.disabled = false;
    } else {
        applyButton.disabled = true;
    }
}

function enableNextButton() {
    const badgeValue = getElementValu("badge");
    const phoneNumber = document.getElementById("tel").value;
    const nextButton = document.getElementById("next-btn")

    // Enable next button if at least 1 seat is selected and phone number is entered
    if (badgeValue >= 1 && phoneNumber !== "") {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
}

function showPage() {
    const name = document.getElementById("text").value;
    const number = document.getElementById("tel").value;
    const email = document.getElementById("email").value;

    if (name === "" || number === "" || email === "") {
        alert("Fill up form");
        return;
    }

    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function hidePage() {
    document.getElementById("page1").classList.remove("hidden");
    document.getElementById("page2").classList.add("hidden");
}

// Phone number input listener to enable the next button
document.getElementById("tel").addEventListener("input", enableNextButton);
