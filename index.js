console.log("This is index.js file");
let clock = document.querySelector("#clock")
setInterval(() => {
    let currentDate = new Date();
    clock.innerHTML=currentDate.toLocaleTimeString();
}, 1000);