

let computerNum=0
let goButton= document.getElementById("Go-button")
let inputValue = document.getElementById("input-value")
let resultArea = document.getElementById("result-area")
let resetButton=document.getElementById("reset-button")
let chanceArea = document.getElementById("chances-area")
let chances = 5
let gameOver = false
let history=[]



goButton.addEventListener("click", play)
resetButton.addEventListener("click",reset)
inputValue.addEventListener("focus",eraser)

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100) +1
    console.log("정답" ,computerNum)
}

pickRandomNum()

function play(){

    if(inputValue.value<1||inputValue.value>100){
        resultArea.textContent="1에서 100 사이의 값을 입력해주세요."
        return
    }
    if(history.includes(inputValue.value)){
        resultArea.textContent="이미 입력했던 숫자입니다. 다른 숫자를 입력하세요."
        return
    }
    

    let answer = inputValue.value
    chances --;
    chanceArea.textContent = `남은 기회 : ${chances} 번`

    if(answer<computerNum){
        resultArea.textContent="U p !!"
    }else if(answer==computerNum){
        resultArea.textContent="정 답 !!"
        goButton.disabled=true
    }else if(answer>computerNum){
        resultArea.textContent="D o w n !!"
    }

    history.push(inputValue.value)
  
    if(chances <1){
        gameOver = true
    }

    if(gameOver){
        goButton.disabled = true
    }
   
}


function reset(){
     inputValue.value=""
     goButton.disabled=false
     chances = 5
     gameOver=false
     pickRandomNum()
     history =[]
     resultArea.textContent="결과값이 여기 나옴"
     chanceArea.textContent="남은 기회 : 5번"
}

function eraser(){
    inputValue.value=""
}