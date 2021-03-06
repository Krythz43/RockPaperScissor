var pScore=0, cScore=0;
resultText="";
var buttondisplay=0;


function enterpressalert(e, body){
    var code = (e.keyCode ? e.keyCode : e.which);
      if(code == 13) 
      {
        window.location="game.html";
      }
    }
    

/*/////////////////////////////////////////////////////////////////

FUNCTIONS RELATED TO HOME PAGE

/////////////////////////////////////////////////////////////////*/

function animater()
{
    timeout=setInterval(paper, 1000);
}

function rock()
{
    document.getElementById("gameName").display="block";
    document.getElementById("gameName").innerHTML="ROCK!";
    clearInterval(timeout);
    timeout=setInterval(paper, 1000);
}

function paper()
{
    document.getElementById("gameName").display="block";
    document.getElementById("gameName").innerHTML="PAPER!";
    clearInterval(timeout);
    timeout=setInterval(scissor, 1000);
    buttondisplay++;
    if(buttondisplay>1)
    {
        document.getElementById("buttonNav").style.display="block";
    }    
}

function scissor()
{
    document.getElementById("gameName").display="block";
    document.getElementById("gameName").innerHTML="SCISSOR!";
    clearInterval(timeout);
    document.getElementById("nextPage").innerHTML="press <kbd>ENTER</kbd> to continue";
    timeout=setInterval(rock, 1000);
}


/*/////////////////////////////////////////////////////////////////

FUNCTIONS RELATED TO GAME PAGE

/////////////////////////////////////////////////////////////////*/


function setText(state)
{
    var selector=Math.floor(Math.random()*3);
    var store=[];
    if(state==1) //winning text
    {
        store=[
            "Party time!",
            "Thats how you roll!",
            "Crumble them all!"
        ]

        resultText=store[selector];
        document.getElementById("decision").style.background="lawngreen";
    }
    else if(state==0)  //lossing text
    {
        store=[
            "Its okay, hit them harder now!",
            "Relax dude, take a deep breath",
            "Chill now, you got this.."
        ]

        resultText=store[selector];
        document.getElementById("decision").style.background="rgb(212, 113, 113)";

    }
    else
    {
        store=[
            "I hate draws..",
            "That was close",
            "Nothing to worry now"
        ]

        resultText=store[selector];
        document.getElementById("decision").style.background="lightgrey";

    }
}

function move(playerOption)
{
    var picPlayer, picComp;
    if(playerOption==0)
    picPlayer="rock";
    else if(playerOption==1)
    picPlayer="paper";
    else
    picPlayer="scissors";

    var compOption=Math.floor(Math.random()*3);

    if(compOption==0)
    picComp="rock";
    else if(compOption==1)
    picComp="paper";
    else
    picComp="scissors";

    if(compOption==1)
    {
        if(playerOption==1)
        {
            setText(2);
        }
        else if(playerOption==2)
        {
            pScore++;
            setText(1);
        }
        else
        {
            cScore++;
            setText(0);
        }
    }
    else if(compOption==2)
    {
        if(playerOption==1)
        {
            cScore++;
            setText(0);
        }
        else if(playerOption==2)
        {
            setText(2);
        }
        else
        {
            pScore++;
            setText(1);
        }
    }
    else
    {
        if(playerOption==1)
        {
            pScore++;
            setText(1);
        }
        else if(playerOption==2)
        {
            cScore++;
            setText(0);
        }
        else
        {
            setText(2);
        }
    }

    document.getElementById("result").innerHTML=
    "<img src=\"images\/"+picPlayer +
    ".png\" style=\"width:150px;\">"+
    "was played against <img src=\"images\/"+
    picComp+".png\" style=\"width:150px;\"><br>"+ resultText;

    console.log(picPlayer+ "vs" + picComp);

    document.getElementById("score").innerHTML=pScore+" - "+cScore;

    if(pScore>9)
    {
        $(".container").fadeOut(3000,gameResult(1));
    }
    else if(cScore>9)
    {
        $(".container").fadeOut(3000,gameResult(0));
    }
}

function gameResult(result) {
    $("#resultEnd").fadeIn(2000);
    if(result)
    {
        $("#winloss").html("<blockquote>\“Winning isn’t everything, it’s the only thing.\”<br>-random guy</blockquote>")
        $("#continue").prepend("Play again!<br>");
    }
    else
    {
        $("#winloss").html("<blockquote>\“When you lose, you learn..\”<br>-random guy</blockquote>")
        $("#continue").prepend("Show the computer that you can beat it!<br>");
    }
}