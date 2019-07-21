var scores,roundScores,activePlayer,gamePlaying;

init();

document.querySelector(".btn-roll").addEventListener("click",function(){
  if(gamePlaying){
    var dice1=Math.floor(Math.random()*6)+1;
    var dice2=Math.floor(Math.random()*6)+1;
    var diceDom1=document.querySelector('#dice-1');
    var diceDom2=document.querySelector('#dice-2');
    diceDom1.style.display='block';
    diceDom2.style.display='block';
    diceDom1.src ='dice-'+ dice1+'.png';
      diceDom2.src ='dice-'+ dice2+'.png';

     if(dice1!==1 && dice2!==1){
      roundScores+=dice1 +dice2;
      document.querySelector('#current-'+ activePlayer).textContent=roundScores;

    }else{


       newPlayer();
     }
  }

});
document.querySelector('.btn-hold').addEventListener('click',function(){
  if(gamePlaying){
    score[activePlayer]+=roundScores;
    var input=document.querySelector(".final-score").value;
    var winningscore;
    if(input){
      winningscore=input;

    }
    else{
      winningscore=100;
    }
    document.getElementById('score-' + activePlayer).textContent=score[activePlayer];
    if(score[activePlayer]>=winningscore){
      document.querySelector('#name-' + activePlayer).textContent='Winner!!';
      document.querySelector('#dice-1').style.display='none';
        document.querySelector('#dice-2').style.display='none';
      document.querySelector('.player-' +activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-' +activePlayer+'-panel').classList.remove('active');
      gamePlaying=false;

    }else{
               newPlayer();
        }
  }
});
function newPlayer(){
  roundScores=0;
  activePlayer===0 ?activePlayer=1:activePlayer=0;
  document.getElementById('current-0').textContent='0';
  document.getElementById('current-1').textContent='0';
  document.querySelector('.player-0-panel').classList.toggle("active");
  document.querySelector('.player-1-panel').classList.toggle("active");
  document.querySelector('#dice-1').style.display='none';
  document.querySelector('#dice-2').style.display='none';
}
function init(){

var lastDice=0;
score=[0,0];
roundScores=0;
activePlayer=0;

document.querySelector('#dice-1').style.display='none';
document.querySelector('#dice-2').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player1';
document.getElementById('name-1').textContent='Player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
gamePlaying =true;
}
document.querySelector('.btn-new').addEventListener('click',init);
/*dice=0;
dice=Math.floor(Math.random()*6)+1;
console.log(dice);

var x=document.querySelector('#score-0').textContent;
console.log(x);*/
