
function getReceipt (checkInDate, roomType, wantsQueen, wantsKing, wantsSuite, numberOfStay){
    const date = new Date(checkInDate)
    const month = date.getMonth();
    console.log("month()",month)
    const isPEAK = month >=5 && month <=7;
    let rate;
    if (isPEAK) {
        if("queen" === roomType)
            roomRate = 250;
    }else {
        if("queen" === roomType)
            roomRate = 150;
    }
    if (isPEAK) {
        if("king" === roomType)
            roomRate = 250;
    }else {
        if("king" === roomType)
            roomRate = 150;
    }
    if (isPEAK) {
        if("suite" === roomType)
            roomRate = 350;
    }else {
        if("suite" === roomType)
            roomRate = 210;
    }
    return roomRate;

    let discount = 0;
    if (discount === aaa){
        discount = 0.10;
    }else
        if(discount === military){
        discount = 0.20;
    }
    const discountRoomCost = totalRoomCost * (1 - discount);
    
    const tax = discountRoomCost * 0.12;
    let totalRoomCost = roomRate * nights;
    const totalTax = tax * nights;
    const totalCost = totalRoomCost + totalTax;
    output.innerText = `
        Room Cost: $${roomRate.toFixed(2)}
        Discount Rate: ${discount}
        Tax: $${tax}
        Total Room Cost: $${totalCost.toFixed(2)}
    `;



}

document.addEventListener("DOMContentLoaded", ()=>{
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const nights = Number(document.getElementById("nights").value);
    const queen = document.getElementById("queen");
    const king = document.getElementById("king");
    const suite = document.getElementById("suite");
    const adults = document.getElementById("adults");
    const children = document.getElementById("children");
    const none = document.getElementById("none");
    const aaa = document.getElementById("aaa");
    const military = document.getElementById("military");

    const overnightForm = document.getElementById("overnightForm");
    const when = document.getElementById("when");
    const output = document.getElementById("output");


    
    overnightForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        output.innerText = getReceipt(
            when.value,
            nights.value,
            queen.checked,
            king.checked,
            suite.checked,
            adults.value,
            children.value,
            none.checked,
            aaa.checked,
            military.checked
        );
    });
});