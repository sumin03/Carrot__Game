//play__btn 누르면 작동하게 하기 

const playBtn = document.querySelector(".play__btn");
let imageBox = document.querySelector(".image-box");

let imageBoxWidth = imageBox.clientWidth;
let imageBoxHeight = imageBox.clientHeight;
let carrots = document.querySelectorAll(".carrot");
let bug = document.querySelectorAll(".bug");
const bg = document.querySelector("#bg");

let playing = true;



playBtn.addEventListener("click", () => {



  playing = true;

  
  bg.play();
  //타이머 재생시키기 
  const countdown = setInterval(function() {

    const min = document.querySelector(".min").textContent;
    let second = document.querySelector(".second").textContent;

    second--;

    document.querySelector(".second").textContent = second;
    if (second <= 0) {

      bg.pause();
      clearInterval(countdown);
      document.querySelector(".lose__alert").style.display = "block";
      playing = false;
    }
  }, 1000)

  bug.forEach((item) => {
    let randPosX = Math.floor((Math.random() * imageBoxWidth));
    let randPosY = Math.floor((Math.random() * imageBoxHeight));
    item.style.left = randPosX + 'px';
    item.style.top = randPosY + 'px';
  })

  carrots.forEach((item) => {
    let randPosX = Math.floor((Math.random() * imageBoxWidth));
    let randPosY = Math.floor((Math.random() * imageBoxHeight));
    item.style.left = randPosX + 'px';
    item.style.top = randPosY + 'px';
  })

  let numbering = document.querySelector(".numbering").textContent;


//당근 눌렀을 때 소리나기 + 동시에 해당 element 지우기 
imageBox.addEventListener("click", (event) => {
  if (event.target.className === "carrot" && playing === true) {
    document.querySelector("#carrot__sound").play();
    event.target.remove();
    
    numbering--; 
  
    document.querySelector(".numbering").textContent = numbering ; 
    
    if(numbering == 0){

      bg.pause();
      document.querySelector(".win__alert").style.display = "block";
      clearInterval(countdown);
      const win = document.querySelector("#win");
      win.play();
      playing = false;
    }

    
  }
  

})


imageBox.addEventListener("click", (event) => {
  if (event.target.className === "bug"  && playing === true) {
    document.querySelector("#bug__sound").play();
    event.target.remove();
  
    

    bg.pause();
    document.querySelector(".lose__alert").style.display = "block";
    clearInterval(countdown);
    const lose = document.querySelector("#alert");
    lose.play();
    playing =false; 
  }
  

})


})





//again버튼 누르고 다시 페이지 시작하기 

const winAgain = document.querySelector(".win__alert > .again"); 
console.log(winAgain);

winAgain.addEventListener("click", () => {
  
  location.reload();
  
})

const loseAgain = document.querySelector(".lose__alert > .again"); 

loseAgain.addEventListener("click", () => {
  location.reload();
})










