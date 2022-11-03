// let result = document.getElementById("can");

// console.log(result);

// let result1 = document.querySelectorAll(".error")
// console.log(result1[0]);

// let result2 = document.querySelectorAll("p");
// console.log((result2[1]));

// const result3 = document.querySelector(".error p").innerHTML = "<h2>İçerik Değişti </h>"
// console.log(result3);

// const pdegeri = document.querySelectorAll("p");

// pdegeri.forEach( a =>{
//     console.log(a.innerText);
//     a.innerText += " Yeni Alan"
// })
// const icerik = document.querySelector(".icerik");
//     console.log(icerik.innerHTML);

// icerik.innerHTML += "<h2> VUE Js, REact JS </h2>";


// const students = ["ali" , "veli", "kırkdokuz", "elli"];

// students.forEach(student => {
//     icerik.innerHTML += `<p> ${student} </p>`
// })

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://yandex.com.tr/");
// link.textContent = "Boz Training";

// const pdegeri = document.querySelector("p");

// console.log(pdegeri.getAttribute("class"));
// pdegeri.setAttribute("class", "icerikYeni");
// pdegeri.textContent ="Naber";

// const result1 = document.querySelector("p");
// console.log(result1.classList);
// result1.classList.remove("can","error");
// console.log(result1);

// result1.classList.add("mert");
// console.log(result1);

// const pDegeri = document.querySelectorAll("p");

// pDegeri.forEach(name => {
//     if(name.textContent.includes("error")){
//         name.classList.add("error");
//     }
//      if(name.textContent.includes("success")){
//         name.classList.add("success");
//      }
//     });

// const section = document.querySelector("section");

// console.log(section.children);


// console.log(Array.from(section.children));


// Array.from(section.children).forEach(child =>{
//     child.classList.add("section-element")
// })

// const baslik = document.querySelector("h2");
// console.log(baslik.parentElement);
// console.log(baslik.parentElement.parentElement);

function sayHi(username){
    console.log(`Hello! ${username}`);
}

sayHi("Mark");


const sayHi = (username) => {
    console.log(`Hello! ${username}`);
}
sayHi("Mark");