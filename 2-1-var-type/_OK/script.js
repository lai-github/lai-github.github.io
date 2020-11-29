//Number 數字型別
var price = 8000;
var newStudentPrice = price - 200;
var oldStudentPrice = price * 0.9;

//String 字串型別
var phone = "(02) 2370-1122"; 
var address = "台北市中正區公園路 30-1 號 5 樓";

//Boolean 布林型別
var gift = price > 7000;

document.querySelector("#price").textContent = price;
document.querySelector("#newStudentPrice").textContent = newStudentPrice;
document.querySelector("#oldStudentPrice").textContent = oldStudentPrice;

document.querySelector("#phone").textContent = phone;
document.querySelector("#address").textContent = address;

if(gift) {
    document.querySelector("#gift").classList.remove("hide");
}

console.log("price 的型別是: " + typeof price); // number
console.log("phone 的型別是: " + typeof phone); // string
console.log("gift 的型別是: " + typeof gift); // boolean