var player1name= localStorage.getItem("player1name");
var player2name= localStorage.getItem("player2name");  
var player1score=0;
var player2score=0;
document.getElementById("player1Name").innerHTML=player1name + ": ";
document.getElementById("player2Name").innerHTML=player2name + ": ";
document.getElementById("player1Score").innerHTML=player1score;
document.getElementById("player2Score").innerHTML=player2score;
document.getElementById("playerQuestion").innerHTML= "turno de pergunta : " + player1name;
document.getElementById("playerAnswer").innerHTML= "turno de resposta : " + player2name;

function send() {
    var getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charAt1=word.charAt(1);
    dividirem2=Math.floor(word.length/2);
    charAt2=word.charAt(dividirem2);
    lenghtminos1=word.length-1;
    charAt3=word.charAt(lenghtminos1);
    removecharAt1=word.replace(charAt1,"#");
    removecharAt2=removecharAt1.replace(charAt2,"#");
    removecharAt3=removecharAt2.replace(charAt3,"#");
    console.log(removecharAt3);
    questionword="<h4 id='wordDisplay' > palavra: " + removecharAt3 + "</h4>";
    inputbox= "<br>Resposta: <input type='text' id='inputCheckBox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row=questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
    
}
var turnopergunta= "player1";
var turnoresposta= "player2";
function check() {
    pegarpalavra=document.getElementById("inputCheckBox").value;
    palavra=pegarpalavra.toLowerCase();
    console.log(palavra);
    console.log(pegarpalavra);
    if (word==palavra) {
        if (turnoresposta=="player1" ) {
           player1score=player1score+1;
           document.getElementById("player1Score").innerHTML=player1score;
        }
        else{
            player2score=player2score+1;
            document.getElementById("player2Score").innerHTML=player2score;
        }
    }
    if (turnopergunta=="player1") {
        turnopergunta="player2";
        document.getElementById("playerQuestion").innerHTML="turno de  pergunta"+player1name;  
    }
    if (turnoresposta=="player1") {
        turnoresposta="player2";
        document.getElementById("playerAnswer").innerHTML="turno de resposta"+player2name;  
    }
    else{
        turnoresposta="player1";
        document.getElementById("playerAnswer").innerHTML="turno de resposta"+player1name;  
    }
    document.getElementById("output").innerHTML="";
    
}














































































































































































































