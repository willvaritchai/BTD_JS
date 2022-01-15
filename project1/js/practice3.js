let person = prompt("กรอกชื่อเสียงเรียงนามของคุณ");

document.getElementById("name").innerHTML= "\'"+person+"\'";

function showScore() {
    
    let inputMath = document.getElementById("inMath").value;
    document.getElementById("gMath").innerHTML= inputMath+"/100"+"" 
    let inputEng = document.getElementById("inEng").value;
    document.getElementById("gEng").innerHTML= inputEng+"/100"
    let inputSci = document.getElementById("inSci").value;
    document.getElementById("gSci").innerHTML= inputSci+"/100"

}

function butt() {
    let yourScore = prompt("กรอกคะแนนของคุณ");
     docResult = document.getElementById("grade");
    if (yourScore >= 80) {
        docResult.innerHTML = "เกรดของคุณ: A";
    }else if (yourScore >= 75) {
        docResult.innerHTML = "เกรดของคุณ: B+";
    }else if (yourScore >= 70) {
        docResult.innerHTML = "เกรดของคุณ: B";
    }else if (yourScore >= 65) {
        docResult.innerHTML = "เกรดของคุณ: C+";
    }else if (yourScore >= 60) {
        docResult.innerHTML = "เกรดของคุณ: C";
    }else if (yourScore >= 55) {
        docResult.innerHTML = "เกรดของคุณ: D+";
    }else if (yourScore >= 50) {
        docResult.innerHTML = "เกรดของคุณ: D";
    }else{
        docResult.innerHTML = "เกรดของคุณ: F";
    }
}
