const flowerSelect = document.querySelector("#selectFlower");
const flowerQuantity = document.querySelector("#numberFlower");
const greenSelect = document.querySelector("#selectGreen");
const packagingSelect = document.querySelector("#selectPackaging");
const calculateBtn = document.querySelector("#myBouquet");
const totalPriceEl = document.querySelector("#totalPrice");

function calculateBouquet() {
    const flowerPrice = Number(flowerSelect.value);
    const quantity = Number(flowerQuantity.value);
    const greenPrice = Number(greenSelect.value) || 0;
    const packagingPrice = Number(packagingSelect.value) || 0;

    if (!flowerPrice || !quantity || quantity <= 0) {
        alert("Пожалуйста, выберите цветок и введите корректное количество!");
        return;
    }

    const total = (flowerPrice * quantity) + greenPrice + packagingPrice;
    totalPriceEl.textContent = `Итого: ${total.toFixed(2)}$`;
}

calculateBtn.addEventListener("click", calculateBouquet);

// Расчет будет происходить мгновенно при любом изменении в форме
[flowerSelect, flowerQuantity, greenSelect, packagingSelect].forEach(element => {
    element.addEventListener("change", calculateBouquet);
});
