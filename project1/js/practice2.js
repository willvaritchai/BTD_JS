function promtAge(){
    let age = prompt("โปรดกรอกอายุของคุณ");
    if (age >= 18) {
        document.getElementById("result").innerHTML = 
        "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
    }else{alert("เสียใจด้วย อายุของคุณไม่ผ่านเกณฑ์");}
    
}