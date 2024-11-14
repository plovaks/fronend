var riddle={
    question:'Висит груша нельзя скушать',
    correctAnswer:'лампочка',
    hints:['это несъедобное','это не фрукт'],
    tries:3,
    checkAnswer(answer){
        if (this.tries<1){
            console.log('Игра окончена');
            return alert('Игра окончена');
            
        }
        if (answer.toLowerCase().includes(this.correctAnswer)){
            alert('Правильный ответ!');
            console.log('Правильный ответ!');
            this.tries=0;
        }
        else {
            // alert('Неправильный ответ!');
            console.log('Неправильный ответ!');
            this.tries--;
            const hint=this.hints[this.tries===2?0:1];
            if (this.tries){
                alert('Подсказка '+hint);
            }else{
                alert('Игра окончена');
            }
        }
}
}
window.onload=function(){
    document.getElementById('riddle').innerText=riddle.question;
}
function check(){
    var input =document.getElementsByTagName('input')[0];
    var guessAnswer=input.value;

    if (guessAnswer){
        riddle.checkAnswer(guessAnswer);
    }
}