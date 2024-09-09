
 let usernum=document.getElementById("guess_input");
 let reset = document.getElementById("reset");
 let answer = document.getElementById("com_num1");
 let qMark = document.getElementById("com_num2");
 let numCount = document.getElementById("count");
 let checkbtn=document.getElementById("check");
 let playAgainBtn = document.getElementById("play_again");
 let emoji1 = document.getElementById("emoji1");
 let emoji2 = document.getElementById("emoji2");
 let emoji3 = document.getElementById("emoji3");
 let emoji4 = document.getElementById("emoji4");
 let high = document.getElementById("high");
 let low = document.getElementById("low");
 let input = document.getElementById("inp1");
 let msg = document.getElementById("pls_enter");
 let scoreElm = document.getElementById("score");
 let screenColor = document.getElementById("main_screen");
 let prevScore = document.getElementById("prev_score");
 let commentPara1 = document.getElementsByClassName("comment_p1");
 let commentPara2 = document.getElementById("comment_p2");
//  let space=" ";
qMark.textContent="?";
let getPrevScore=[];

//  Random number
let secretNum= Math.ceil(Math.random()*10);
console.log(secretNum);
let score=10;
let highScore=0;
emoji1.textContent="😊";
// getPrevScore.push(score);
//         console.log(getPrevScore);
//         console.log(prevScore);
// // input value seeding
checkbtn.addEventListener('click',() => {
    let numb=Number(usernum.value);
    console.log(typeof(numb));
    
    
    if(numb){
        
        if(numb !=secretNum){
            if(score>1){
                score--;
                scoreElm.textContent=score;
                scoreElm.textContent=score;
                numCount.textContent=score+" ";
                msg.textContent=numb>secretNum? "I think it's Too High 😮":"I think it's Too Low 🫤"
                emoji1.textContent=numb>secretNum? "😮":"🫤";
                
                
            }
            else
            {   
                msg.textContent="Game Over";
                emoji1.textContent="😒";
                scoreElm.textContent=0;
                screenColor.style.backgroundImage="url('RED.png')";
            }
        }else{
            msg.textContent="Correct !";
            emoji1.textContent="🎉😁👌";
            msg.style.color="white";
            answer.textContent=secretNum;
            qMark.style.display="none";
            screenColor.style.backgroundImage="url('GREEN.png')";
            commentPara2.textContent= numb=secretNum? "Wow ! You Guessed Correct 😎" : ""
            

            
        }
     
        // prevScore.textContent=score;

       
    }else{
        // console.log(getPrevScore);
        

        msg.textContent="Please enter a number";
        emoji1.textContent="🤨";
        scoreElm.textContent=score;
    }
        
});
// prevScore.textContent=score;
// for (let i=0;i<10;i++){
//     // getPrevScore.push(score[]);
//     // prevScore.textContent=getPrevScore;
//     // console.log(getPrevScore);
    
//     // console.log(prevScore);
//     getPrevScore.push(score);
//     getPrevScore[i]=prevScore.textContent;
//     prevScore.textContent=getPrevScore[i];
    

    

// }
 
// play again functionality comes from here.....
playAgainBtn.addEventListener('click',() => {
    emoji1.textContent="😊";
    score=10;
    secretNum= Math.ceil(Math.random()*10);
    console.log(secretNum);
    msg.textContent="";
    scoreElm.textContent=score;
    numCount.textContent=score+" ";
    screenColor.style.backgroundImage="url('BLUE.png')";
    usernum.value="";
    answer.style.fontFamily="Nabla,system-ui";
    qMark.style.display="none";
    answer.textContent="?";
    commentPara2.textContent= "";


});
// reset functionality comes from here.............
reset.addEventListener('click',() => {
    emoji1.textContent="😊";
    score=10;
    secretNum= Math.ceil(Math.random()*10);
    console.log(secretNum);
    msg.textContent="";
    scoreElm.textContent=score;
    numCount.textContent=score+" ";
    screenColor.style.backgroundImage="url('BLUE.png')";
    usernum.value="";
    answer.style.fontFamily="Nabla,system-ui";
    answer.textContent="?";
    prevScore.textContent="";
    commentPara2.textContent= "";
    qMark.style.display="none";



});


