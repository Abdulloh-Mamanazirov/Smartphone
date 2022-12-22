let screen = document.querySelector(".phone");
let lockScreen = document.getElementById("lockScreen");
let mainScreen = document.getElementById("mainScreen");
let callScreen = document.getElementById("callScreen");
let photosScreen = document.getElementById("photosScreen");

let powerBtn = document.querySelector(".powerBtn");
let volumeUp = document.querySelector(".volumeUp");
let volumeDown = document.querySelector(".volumeDown");
let mute = document.querySelector(".fa-volume-off");

let clock1 = document.querySelectorAll("h2")[0];
let clock2 = document.querySelectorAll("h2")[1];
let clock3 = document.querySelectorAll("h2")[2];
let battery = document.querySelector(".batarya");

let homeBtn = document.querySelector(".home");
let recentsBtn = document.querySelector(".recents");
let backBtn = document.querySelector(".back");

let lockCamera = document.querySelector("#cam");
let unlocker = document.querySelector("#unlocker");
let lockflash = document.querySelector("#flashlight");
let day = document.querySelector('#day')
let month = document.querySelector('#month')
let date = document.querySelector('#date')

let camera = document.querySelector("#camera");
let phone = document.querySelector("#call");
let sms = document.querySelector("#sms");
let music = document.querySelector("#music");
let weather = document.querySelector("#weather");
let twitter = document.querySelector("#twitter");
let telegram = document.querySelector("#telegram");
let photos = document.querySelector("#photos");
let notes = document.querySelector("#notes");
let meet = document.querySelector("#meet");
let instagram = document.querySelector("#instagram");
let google = document.querySelector("#google");

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    const { level, charging } = battery;
    const status = charging ? "⚡" : "";
    const percent = `${Math.round(level * 100)}%`;
    if (level < 30) {
      document.querySelector(".batarya").classList.remove("fa-battery");
      document.querySelector(".batarya").classList.add("fa-battery-quarter");
      document.querySelector(".batarya").style.color = "gold";
    } else if (level < 50) {
      document.querySelector(".batarya").classList.remove("fa-battery");
      document.querySelector(".batarya").classList.add("fa-battery-half");
    } else if (level < 80) {
      document.querySelector(".batarya").classList.remove("fa-battery");
      document
        .querySelector(".batarya")
        .classList.add("fa-battery-three-quarter");
    }
    document.querySelector("#battery").innerHTML += `${status}${percent}`;
  });
}


setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  if (h < 10) {
    clock1.innerHTML = `0${h}:${m}`;
    clock2.innerHTML = `0${h}:${m}`;
    clock3.innerHTML = `0${h}:${m}`;
  } 
  if (m < 10) {
    clock1.innerHTML = `${h}:0${m}`;
    clock2.innerHTML = `${h}:0${m}`;
    clock3.innerHTML = `${h}:0${m}`;
  } else {
    clock1.innerHTML = `${h}:${m}`;
    clock2.innerHTML = `${h}:${m}`;
    clock3.innerHTML = `${h}:${m}`;
  }
}, 1000);


/***************** btns **********************/
let off = true
powerBtn.addEventListener('click', function(){
  if(off){
    document.querySelector('.black').style.display = 'none'
    off = false
  }else{
    document.querySelector('.black').style.display = 'block'
    off = true
  }
})

document.querySelector(".volum").style.display = 'none';
volumeUp.addEventListener('click', function(){
  document.querySelector(".volum").style.display = 'flex';
  document.querySelector('#range').value++
  setTimeout(() => {
    document.querySelector(".volum").style.display = 'none';
  }, 8000);
})
volumeDown.addEventListener('click', function(){
  document.querySelector(".volum").style.display = "flex";
  document.querySelector('#range').value--
  setTimeout(() => {
    document.querySelector(".volum").style.display = "none";
  }, 8000);
})
mute.addEventListener('click' , ()=>{
    document.querySelector("#range").value = 0;
})


homeBtn.addEventListener("click", () => {
  if (off) {
    // mainScreen.style.display = 'flex'
    callScreen.style.display = "none";
    photosScreen.style.display = "none";
    musicScreen.style.display = "none";
    smsScreen.style.display = "none";
    document.querySelector(".black").style.display = "none";
    off = false;
  } else {
    mainScreen.style.display = "flex";
    callScreen.style.display = "none";
    photosScreen.style.display = "none";
    musicScreen.style.display = "none";
    smsScreen.style.display = "none";
    document.querySelector(".black").style.display = "none";
    off = true;
  }
});

backBtn.addEventListener("click", () => {
  if (off && lockScreen) {
    callScreen.style.display = "none";
    mainScreen.style.display = 'flex'
    photosScreen.style.display = "none";
    musicScreen.style.display = "none";
    // document.querySelector(".black").style.display = "none";
    off = false;
  } else {
    callScreen.style.display = "none";
    photosScreen.style.display = "none";
    musicScreen.style.display = "none";
    mainScreen.style.display = "flex";
    // document.querySelector(".black").style.display = "none";
    off = true;
  }
});


// Screens display none ****************************************

mainScreen.style.display = "none";
// lockScreen.style.display = "none"; /** always  */
callScreen.style.display = "none";
photosScreen.style.display = "none";
musicScreen.style.display = "none";
smsScreen.style.display = "none";
// document.querySelector(".black").style.display = "none"; /** always */

/* * * * * * * Lock Screen * * * * * */

unlocker.addEventListener("click", function () {
  lockScreen.style.display = "none";
  mainScreen.style.display = "flex";
});

switch (new Date().getDay()) {
  case 0:
    day.innerHTML= "Sunday ";
    break;
  case 1:
    day.innerHTML= "Monday ";
    break;
  case 2:
    day.innerHTML= "Tuesday ";
    break;
  case 3:
    day.innerHTML= "Wednesday ";
    break;
  case 4:
    day.innerHTML= "Thursday ";
    break;
  case 5:
    day.innerHTML= "Friday ";
    break;
  case 6:
    day.innerHTML= "Saturday ";
}

switch (new Date().getMonth()) {
  case 0:
    month.innerHTML = "January ";
    break;
  case 1:
    month.innerHTML = "February ";
    break;
  case 2:
    month.innerHTML = "March ";
    break;
  case 3:
    month.innerHTML = "April ";
    break;
  case 4:
    month.innerHTML = "May ";
    break;
  case 5:
    month.innerHTML = "June ";
    break;
  case 6:
    month.innerHTML = "July ";
    break;
  case 7:
    month.innerHTML = "August ";
    break;
  case 8:
    month.innerHTML = "September ";
    break;
  case 9:
    month.innerHTML = "October ";
    break;
  case 10:
    month.innerHTML = "November ";
    break;
  case 11:
    month.innerHTML = "December ";
    break;
}

date.innerHTML = new Date().getDate()

lockflash.addEventListener('click',()=>{
  if (off) {
      screen.style.boxShadow = "0 0 100px #ffff2f";
      off = false;
    } else {
      screen.style.boxShadow = 'unset'
      off = true;
    }
})

/* * * * * * Phone app * * * * * */

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')
let num0 = document.getElementById('num0')
let star = document.getElementById('num*')
let hashtag = document.getElementById('num#')
let callBtn = document.getElementById('callBtn')
let eraseBtn = document.getElementById('eraseBtn')

let number = document.getElementById('typedNumber')

num1.addEventListener('click', ()=>{
  number.textContent += 1
})
num2.addEventListener('click', ()=>{
  number.textContent += 2
})
num3.addEventListener('click', ()=>{
  number.textContent += 3
})
num4.addEventListener('click', ()=>{
  number.textContent += 4
})
num5.addEventListener('click', ()=>{
  number.textContent += 5
})
num6.addEventListener('click', ()=>{
  number.textContent += 6
})
num7.addEventListener('click', ()=>{
  number.textContent += 7
})
num8.addEventListener('click', ()=>{
  number.textContent += 8
})
num9.addEventListener('click', ()=>{
  number.textContent += 9
})
num0.addEventListener('click', ()=>{
  number.textContent += 0
})
star.addEventListener('click', ()=>{
  number.textContent += '*'
})
hashtag.addEventListener('click', ()=>{
  number.textContent += '#'
})
callBtn.addEventListener('click', function(){

})
eraseBtn.addEventListener('click', ()=>{
  number.textContent = ''
})

phone.addEventListener('click', ()=>{
  callScreen.style.display = "flex";
  mainScreen.style.display = "none";
})

/********* Photos app *********** */

photos.addEventListener("click", () => {
  photosScreen.style.display = "flex";
  mainScreen.style.display = "none";
});

/********* Music app *********** */

music.addEventListener("click", () => {
  musicScreen.style.display = "flex";
  mainScreen.style.display = "none";
});