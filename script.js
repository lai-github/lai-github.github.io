// 用一個物件陣列來放照片的名字跟來源，不僅好管理，還可以搭配 for 迴圈使用
var images = [
    { 
        name: "青蘋果",
        photoURL: "images/fruit-1.jpg"
    }, 
    { 
        name: "草莓",
        photoURL: "images/fruit-2.jpg"
    }, 
    { 
        name: "橘子",
        photoURL: "images/fruit-3.jpg"
    }, 
    { 
        name: "西瓜",
        photoURL: "images/fruit-4.jpg"
    }, 
    { 
        name: "火龍果",
        photoURL: "images/fruit-5.jpg"
    }, 
    { 
        name: "莓果",
        photoURL: "images/fruit-6.jpg"
    }, 
    { 
        name: "檸檬",
        photoURL: "images/fruit-7.jpg"
    }, 
    { 
        name: "百香果",
        photoURL: "images/fruit-8.jpg"
    }
];

// 打開大圖
function openLightBox() {
    // 說明：滑鼠按到誰，誰就是 this
    var title = this.name;
    var src = this.src;
    document.querySelector("#big-img").src = src;
    document.querySelector("#big-title").textContent = title;
    document.querySelector("#big").classList.add("fadeIn");
}

// 關閉大圖
function closeLightBox() {
    document.querySelector("#big").classList.remove("fadeIn");
}

// 綁定事件: 滑鼠點擊大圖就去做這件事 closeLightBox
document.querySelector("#big").addEventListener("click", closeLightBox);

// 由資料決定畫面: 文字不再寫死在 .html，而是透過 javascript 產生畫面
var li = "";
for(var i=1; i<=8; i++) {
    li += `<li>
                <img id="fruit-${i}" src="${images[i-1].photoURL}" name="${images[i-1].name}">
            </li>`;
}

// 透過 innerHTML 把 HTML 字串放到畫面上呈現
document.querySelector("#box").innerHTML = li;

// 綁定事件: 滑鼠點擊小圖就去做這件事 openLightBox
for(var i=1; i<=8; i++) {
    document.querySelector(`#fruit-${i}`).addEventListener("click", openLightBox);
}