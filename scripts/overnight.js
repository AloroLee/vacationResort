
function getReceipt (checkInDate, roomType, wantsAAA, wantsMilitary, nights){
    const date = new Date(checkInDate)
    const month = date.getMonth();
    const isPEAK = month >=5 && month <=7;
    let roomRate = 0;
    if (isPEAK) {
        if("queen" === roomType) roomRate = 250;
        if("king" === roomType) roomRate = 250;
        if("suite" === roomType) roomRate = 350;
    } else {
        if("queen" === roomType) roomRate = 150;
        if("king" === roomType) roomRate = 150;
        if("suite" === roomType) roomRate = 210;
    }

    let totalRoomCost = roomRate * nights;

    let discount = 0;
    if (wantsAAA){
        discount = 0.10;
    }else
        if(wantsMilitary){
        discount = 0.20;
    }
    let discountRoomCost = totalRoomCost * (1 - discount);
    
    let tax = discountRoomCost * 0.12;
    let totalTax = tax * nights;
    let totalCost = totalRoomCost + totalTax;
    
    return `
        Room Cost: $${roomRate.toFixed(2)}
        Discount Rate: ${discount}
        Tax: $${tax.toFixed(2)}
        Total Room Cost: $${totalCost.toFixed(2)}
    `;
}

document.addEventListener("DOMContentLoaded", ()=>{
    const queen = document.getElementById("queen");
    const king = document.getElementById("king");
    const suite = document.getElementById("suite");
    const aaa = document.getElementById("aaa");
    const military = document.getElementById("military");

    const overnightForm = document.getElementById("overnightForm");
    const when = document.getElementById("when");
    const output = document.getElementById("receiptOutput");


    
    overnightForm.addEventListener("submit", (event)=>{
        event.preventDefault();

        const nights = Number(document.getElementById("nights").value);


        let roomType = "queen";  // default room type
        if (queen.checked) roomType = "queen";
        else if (king.checked) roomType = "king";
        else if (suite.checked) roomType = "suite";

        output.innerText = getReceipt(
            when.value,
            roomType,
            aaa.checked,
            military.checked,
            nights

        );
    });
});
