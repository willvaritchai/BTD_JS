// var fName = "Varitchai";var lName="Surachaitanawat"
// alert("Hello: "+fName+" "+lName)

//console.log(typeof true); 


let greeting = prompt("Enter your Name: ");
alert("Hello " + greeting);
document.getElementById("greet").innerHTML = greeting;
//let lotto_num  = prompt("โปรดเลือกเลขของคุณที่จะซื้อ");
//alert("คุณ "+greeting+" ได้เลือกเลขลอตเตอรี่: "+lotto_num);
//console.log("เลขลอตเตอรี่ของคุณ "+greeting+" คือ: "+lotto_num);
//let random_lotto = Math.floor(Math.random() * 100)
//console.log("เลขรางวัลลอตเตอรี่ครั้งนี้คือ: "+random_lotto);

// if (lotto_num == random_lotto) {
//     console.log("ยินดีด้วยคุณได้รางวัลเลขท้ายสองหลัก");
// }else{console.log("ขอแสดงความเสียใจ...คุณโดนหวยแดรกซ์");}
function lottoFunction() {
    let lotto_num = prompt("กรอกเลขท้ายสองตัวที่คุณเลือก: ")
    alert("คุณ " + greeting + " ได้เลือกเลขลอตเตอรี่: " + lotto_num);
    alert("เลขลอตเตอรี่ของคุณ " + greeting + " คือ: " + lotto_num + "...ต่อจากนี้จะทำการสุ่มรางวัลขอให้คุณโชคดี");
    let random_lotto = Math.floor(Math.random() * 100)

    if (lotto_num == random_lotto) {
        document.getElementById("resultLotto").innerHTML = "ยินดีด้วยคุณได้รางวัลเลขท้ายสองหลัก !!!" + "<br><hr>";
    } else { document.getElementById("resultLotto").innerHTML = "ขอแสดงความเสียใจ...คุณโดนหวยแดรกซ์ !!!" + "<br><hr>"; }
    
    document.getElementById("showMyLotto").innerHTML = "เลขลอตเตอรี่สองหลักของคุณ: " + lotto_num;
    document.getElementById("showLotto").innerHTML = "เลขท้ายสองหลักที่ออกคือ : " + random_lotto;


}



