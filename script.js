let h = document.getElementById("hour");
let m = document.getElementById("minute");
let s = document.getElementById("seconds");
let my_clock = setInterval(()=>{
    let  d = new Date();
    let  hour = d.getHours();
    let  minute = d.getMinutes();
    let  second = d.getSeconds();
    let  hour_rotate = hour * 30 + minute / 2;
    let  minute_rotate = minute*6;
    let  second_rotate = second*6;
    h.style.transform = `rotate(${hour_rotate}deg)`;
    m.style.transform = `rotate(${minute_rotate}deg)`;
    s.style.transform = `rotate(${second_rotate}deg)`;
},1000);
