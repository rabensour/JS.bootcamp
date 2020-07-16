// Exercice 1 // 

// 1

let p1 = document.getElementsByTagName("p")[0];
let p2 = document.getElementsByTagName("p")[1];
let p3 = document.getElementsByTagName("p")[2];
let p4 = document.getElementsByTagName("p")[3];
p1.classList.add("para_article");
p2.classList.add("para_article");
p3.classList.add("para_article");
p4.classList.add("para_article");

// 2

p4.remove();

// 3

let two = document.querySelectorAll("h2")[0];
two.addEventListener("click", function() {
    two.remove()
})

// 4

let one = document.querySelectorAll("h1")[0]
one.style.fontSize = Math.round(Math.random() * 100) + "px";

// 5

p1.addEventListener("click", function() {
p1.style.visibility = "hidden";
})

// 6

function fadeOutEffect() {
    this.style.opacity = "0";
    this.style.transition = "2s";
}
p2.addEventListener('click', fadeOutEffect);
​
// 7 (didn't manage to do it)



// Exercice 2 // 

// 1

function getBold_items() {
    let bold = document.getElementsByTagName("strong");
}

// 2

function highlight() {
    let bold = document.getElementsByTagName("strong");
    for (item of bold) {
        item.style.color = "blue";
    }
}
​
// 3

function return_normal() {
    let bold = document.getElementsByTagName("strong");
    for (item of bold) {
        item.style.color = "black";
    }
}

// 4

bold.addEventListener(onMouseOver= highlight() onMouseOut= return_normal())