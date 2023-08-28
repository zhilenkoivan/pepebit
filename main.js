function order()
        {
            var audio = new Audio();
            audio.src = 'assets/audio/klick.mp3';
            audio.autoplay = true;

            return true;
        }
        function order1()
        {
            var audio = new Audio();
            audio.src = 'assets/audio/klick-2.mp3';
            audio.autoplay = true;

            return true;
        }
        var audio1
        let st = 0
        function order2()
        {
          if (st == 0) {
             st = 1 
          } else {
            st = 0 
            audio1.currentTime = 0;
            audio1.play();
            return true;
          }
            if (audio1 != null) {
               audio1.stop();
            }
            audio1 = new Audio();
            audio1.src = 'assets/audio/backsound.mp3';
            audio1.autoplay = true;

            return true;
        }
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const pep1 = document.querySelector(".pepe1");
const hold1 = document.querySelectorAll(".hold1");
let x1 = -1;

pep1.addEventListener("click", ()=> {
  deleteHold1(x1);
  x1 = x1 + 1;
  if (x1 > 4) {
    x1 = -1;
  } else {
    hold1[x1].classList.add("hold-active");
  }
})
function deleteHold1(y) {
  setTimeout(()=>{
    hold1[y].classList.remove("hold-active");
  }, 10)
}
const pep2 = document.querySelector(".pepe2");
const hold2 = document.querySelectorAll(".hold2");
let x2 = -1;

pep2.addEventListener("click", ()=> {
  deleteHold2(x2);
  console.log(x2);
  x2 = x2 + 1;
  if (x2 > 4) {
    x2 = -1;
  } else {
    hold2[x2].classList.add("hold-active");
  }
})
function deleteHold2(y) {
  setTimeout(()=>{
    hold2[y].classList.remove("hold-active");
  }, 10)
}

const pep3 = document.querySelector(".pepe3");
const hold3 = document.querySelectorAll(".hold3");
let x3 = -1;

pep3.addEventListener("click", ()=> {
    deleteHold3(x3);
    console.log(x3);
  x3 = x3 + 1;
  if (x3 > 4) {
    x3 = -1;
  } else {
    hold3[x3].classList.add("hold-active");
  }
})
function deleteHold3(y) {
  setTimeout(()=>{
    hold3[y].classList.remove("hold-active");
  }, 10)
}


const pep4 = document.querySelector(".pepe4");
const hold4 = document.querySelectorAll(".hold4");
let x4 = -1;

pep4.addEventListener("click", ()=> {
    deleteHold4(x4);
    console.log(x4);
  x4 = x4 + 1;
  if (x4 > 4) {
    x4 = -1;
  } else {
    hold4[x4].classList.add("hold-active");
  }
})
function deleteHold4(y) {
  setTimeout(()=>{
    hold4[y].classList.remove("hold-active");
  }, 10)
}

const pep5 = document.querySelector(".pepe5");
const hold5 = document.querySelectorAll(".hold5");
let x5 = -1;

pep5.addEventListener("click", ()=> {
    deleteHold5(x5);
    console.log(x5);
  x5 = x5 + 1;
  if (x5 > 5) {
    x5 = -1;
  } else {
    hold5[x5].classList.add("hold-active");
  }
})
function deleteHold5(y) {
  setTimeout(()=>{
    hold5[y].classList.remove("hold-active");
  }, 10)
}


