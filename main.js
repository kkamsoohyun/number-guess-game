let guessNum = document.getElementById("guess-number")
let showText = document.getElementById("show-text")
let goButton = document.getElementById("go-button")
let Reset = document.getElementById("reset")
let Remain =document.getElementById("remain")
let showImg = document.getElementById("show-img")
let chances = 5
let history =[]


goButton.addEventListener("click",answer)
Reset.addEventListener("click", reset)
guessNum.addEventListener("focus", function (){guessNum.value=""})

function randomNum(){ //1~100 랜덤으로 정답 생성
    computerNum = Math.floor(Math.random()*100) +1
    console.log("정답",computerNum)
}

randomNum()


function answer(){
    let userNum = guessNum.value

    if(userNum<1||userNum>100){
        showText.textContent="1에서 100 사이의 숫자만 입력해주세요."
        return
    }

    
    if(history.includes(userNum)){
        showText.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력하세요 !"
        return
    }

    chances--
    Remain.textContent=`기회 : ${chances}번`
    
    if(userNum< computerNum){
        showImg.src="https://media3.giphy.com/media/3o7TKHVU0xsgGDCyPu/giphy.gif?cid=ecf05e47hcwbhq9zmagfl04jdhd00wpzaujve66e9gpz58rj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        showText.textContent="U P !!"

    }else if(userNum==computerNum){
        showImg.src="https://media4.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif?cid=ecf05e4786k8yc4nzbtqb9ehcl90u42pzdc9x2c27xivrpag&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        showText.textContent="정 답 !!"
        goButton.disabled=true

    }else{
        showImg.src="https://media1.giphy.com/media/mhxZiXPbpF8QmtJe7Q/giphy.gif?cid=ecf05e47a5zdikwt0r643ofhd7wz0lymduydi0madbddt1cu&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        showText.textContent="D o w n !!"
    }

    history.push(userNum)

    if(chances<1){
        goButton.disabled = true
    }

    

}

function reset(){ //리셋 버튼 누를 시 정답 교체, 횟수 리셋, 초기화 리셋... etc
    randomNum()
    guessNum.value=""
    goButton.disabled=false
    chances =5
    history=[]
    Remain.textContent="기회 : 5번"
    showImg.src="https://media3.giphy.com/media/Ie2Hs3A0uJRtK/giphy.gif?cid=ecf05e47h4zc9c0bz7t3qsbr8ibfzit8w8sjbcaq0daslqsb&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    showText.textContent="과연 맞출 수 있을까?"
}
