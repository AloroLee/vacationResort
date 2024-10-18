
function getReceipt (checkInDate, roomType, wantsQueen, wantsKing, wantsSuite, numberOfStay){
    const date = new Date(checkInDate)
    const month = date.getMonth();
    console.log("month()",month)
    const isPEAK = month >=5 && month <=7;
    let rate;
    if (isPEAK) {
        if(roomType === wantsQueen)
            rate = 250;
    }else {
        if(roomType === wantsQueen)
            rate = 150;
    }
    if (isPEAK) {
        if(roomType === wantsKing)
            rate = 250;
    }else {
        if(roomType === wantsKing)
            rate = 150;
    }
    if (isPEAK) {
        if(roomType === wantsSuite)
            rate = 350;
    }else {
        if(roomType === wantsSuite)
            rate = 210;
    }
    return rate;

    let roomRate = (numberOfStay * roomType)

    let discount = 0;
    if (discount === aaa){
        discount = 0.10;
    }else{
        if(discount === military)
        discount = 0.20;
    }


}

document.addEventListener("DOMContentLoaded", ()=>{
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const email = document.getElementById("email");
    const nights = document.getElementById("nights");
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