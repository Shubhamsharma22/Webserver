const questions =[
    {
        question : "Which is greater than 7",
        answers : [
            {Text: "8", correct: true},
            {Text:"3", correct: false},
            {Text:"4", correct: false},
            {Text:"1", correct:false}
        ]
    },

{
        question : "Who was the father of India",
        answers : [
            {Text: "Modi", correct: false},
            {Text:"Savarkar", correct: false},
            {Text:"Gandhi", correct: true},
            {Text:"Golvalkar", correct:false}
        ]
    },

{
        question : "Who had been in jail for 16 years during Independence",
        answers : [
            {Text: "Netaji Subash Bose", correct: false},
            {Text:"Lala Lajpat Rai", correct: false},
            {Text:"Pt. Jahawar Lal Nehru", correct: true},
            {Text:"Bhagat Singh", correct:false}
        ]
    },

{
        question : "with whom Mahatma Gandhi attended the 2nd Round Table Conference",
        answers : [
            {Text: "Lord Mountbatten", correct: false},
            {Text:"Sir Richard Clive", correct: true},
            {Text:"Winston Churchill", correct: false},
            {Text:"Donald J Trump", correct:false}
        ]
    },

{
        question : "Which Regiment has got highest number of Victoria Cross in second world war",
        answers : [
            {Text: "5 small heath rifles", correct: false},
            {Text:"32 British Infantry", correct: false},
            {Text:"7 Gurkha Rifles", correct: true},
            {Text:"RSS k Lathaith", correct:false}
        ]
    }







]

let q = document.querySelector(".question")
let ans = document.querySelector(".as")
let nex = document.querySelector(".next")


let currentquestionindex = 0
let score = 0

function start(){
resetstate()
    let currentquestion = questions[currentquestionindex]
q.innerHTML= currentquestion.question

currentquestion.answers.forEach(answers=>{
    const button = document.createElement("button")
button.innerHTML= answers.Text
button.classList.add("btn1")
ans.appendChild(button)
button.addEventListener("click", (e) => selectAnswer(e,answers.correct));

})



}
function resetstate(){
    while(ans.firstChild){
        ans.removeChild(ans.firstChild)
    }
}

function selectAnswer(e,iscorrect) {
const selBtn = e.target;
for (let index = 0; index < ans.children.length; index++) {
    ans.children[index].disabled = true;
    
}



if(iscorrect==true){
nex.style.display = "block"
    score++;
selBtn.style.backgroundColor = "Green"

}

else{
    nex.style.display="block"
selBtn.style.backgroundColor="red"
}


}

nex.addEventListener("click",(selectAnswer)=>{
    
   if (currentquestionindex===questions.length-1) {
    if(nex.innerHTML=="play again"){
        restart()
        nex.innerHTML="Next"
    }
else{
    q.innerHTML="final score"+score;
    resetstate()
    nex.innerHTML="play again"
}}
else{
    currentquestionindex++

     start()
}
   }
)
function restart(){
    currentquestionindex=0
    score=0
    start()
}
start()




