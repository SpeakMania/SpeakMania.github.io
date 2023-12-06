/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/
let point_X = 0; //Variable de point des X
let point_O = 0; //Variable de point des O
let board; //Tableau des carreaux possible
let turn = 'X'; //Set le Tour des personnes
let win; //Set le Gagnant au fin de tour
let ActiveByRestart; //S'active seulement si click sur restart
let EnRedemmarage = false; //S'active quand en restart
let restarting = false; //securit. de restart pour le slide
var isDragging = false; //S'active quand un drag le text
var offsetX, offsetY; //position de offset de la sourie quand drag


let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");
let square4 = document.getElementById("square4");
let square5 = document.getElementById("square5");
let square6 = document.getElementById("square6");
let square7 = document.getElementById("square7");
let square8 = document.getElementById("square8");
let square9 = document.getElementById("square9");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");
let line3 = document.getElementById("line3");
let line4 = document.getElementById("line4");
let line5 = document.getElementById("line5");
let line6 = document.getElementById("line6");
let line7 = document.getElementById("line7");
let line8 = document.getElementById("line8");
let pointO = document.getElementById("pointO")
let pointX = document.getElementById("pointX")
var drag = document.getElementById("name");
let bin_move = document.getElementById("bin");
var body = document.body;




let line_square = document.getElementById("line_square"); //le conteneur pour les lignes
let OpenOrNot = false


board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];



/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);
document.getElementById('reset-button').addEventListener('click', click);

let open_button = document.getElementById("open")
open_button.addEventListener('click', openClick);





/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });

        return winner ? winner : board.includes('') ? null : 'T';
      
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });

    if(board[idx] == "" && win == null && EnRedemmarage == false) //s'active seulement si le carreaux et vide et que personne a gagné
    {
        board[idx] = turn;
        turn = turn === 'X' ? 'O' : 'X';
        win = getWinner();
        active_by_restart = false;

        render(); 
        rendertext(); 
    }
};
function click() //animation de redemarrage quand actif
{
    line1.classList.remove('ver_line_set_in')
    line1.classList.add('ver_line_anim_out')
    setTimeout(ver_Line_Resume1_OUT, 1000);

    function ver_Line_Resume1_OUT()
    {
        line1.classList.remove('ver_line_anim_out')
        line1.style.display = "none";
        line_square.style.display = "none";
    }

    line2.classList.remove('ver_line_set_in')
    line2.classList.add('ver_line_anim_out')
    setTimeout(ver_Line_Resume2_OUT, 1000);

    function ver_Line_Resume2_OUT()
    {
        line2.classList.remove('ver_line_anim_out')
        line2.style.display = "none";
        line_square.style.display = "none";
    }

    line3.classList.remove('ver_line_set_in')
    line3.classList.add('ver_line_anim_out')
    setTimeout(ver_Line_Resume3_OUT, 1000);

    function ver_Line_Resume3_OUT()
    {
        line3.classList.remove('ver_line_anim_out')
        line3.style.display = "none";
        line_square.style.display = "none";
    }

    line4.classList.remove('hor_line_set_in')
    line4.classList.add('hor_line_anim_out')
    setTimeout(ver_Line_Resume4_OUT, 1000);

    function ver_Line_Resume4_OUT()
    {
        line4.classList.remove('hor_line_anim_out')
        line4.style.display = "none";
        line_square.style.display = "none";
    }

    line5.classList.remove('hor_line_set_in')
    line5.classList.add('hor_line_anim_out')
    setTimeout(ver_Line_Resume5_OUT, 1000);

    function ver_Line_Resume5_OUT()
    {
        line5.classList.remove('hor_line_anim_out')
        line5.style.display = "none";
        line_square.style.display = "none";
    }

    line6.classList.remove('hor_line_set_in')
    line6.classList.add('hor_line_anim_out')
    setTimeout(ver_Line_Resume6_OUT, 1000);

    function ver_Line_Resume6_OUT()
    {
        line6.classList.remove('hor_line_anim_out')
        line6.style.display = "none";
        line_square.style.display = "none";
    }

    line7.classList.remove('hor_line_set_in')
    line7.classList.add('hor_line_anim_out')
    setTimeout(ver_Line_Resume7_OUT, 1000);

    function ver_Line_Resume7_OUT()
    {
        line7.classList.remove('hor_line_anim_out')
        line7.style.display = "none";
        line_square.style.display = "none";
    }

    line8.classList.remove('hor_line_set_in')
    line8.classList.add('hor_line_anim_out')
    setTimeout(ver_Line_Resume8_OUT, 1000);

    function ver_Line_Resume8_OUT()
    {
        line8.classList.remove('hor_line_anim_out')
        line8.style.display = "none";
        line_square.style.display = "none";

    }


    EnRedemmarage = true;
    messages.textContent = "Redemarrage";
    square1.classList.remove('square_anim');m //suppression des classe d'animation
    square2.classList.remove('square_anim');
    square3.classList.remove('square_anim');
    square4.classList.remove('square_anim');
    square5.classList.remove('square_anim');
    square6.classList.remove('square_anim');
    square7.classList.remove('square_anim');
    square8.classList.remove('square_anim');
    square9.classList.remove('square_anim');


    setTimeout(resumeProgram1, 700); //temps entre les animations de blocks
    setTimeout(resumeProgram2, 800);
    setTimeout(resumeProgram3, 900);
    setTimeout(resumeProgram4, 400);
    setTimeout(resumeProgram5, 600);
    setTimeout(resumeProgram6, 500);
    setTimeout(resumeProgram9, 200);
    setTimeout(resumeProgram8, 300);
    setTimeout(resumeProgram7, 100);
}

function resumeProgram1()
{
    square1.classList.add('toggle');
}
function resumeProgram2()
{
    square2.classList.add('toggle');
}
function resumeProgram3()
{
    square3.classList.add('toggle');
    setTimeout(resumeProgram10, 2000);
    setTimeout(resumeProgram11, 700);
}
function resumeProgram4()
{
    square4.classList.add('toggle');
}
function resumeProgram5()
{
    square5.classList.add('toggle');
}
function resumeProgram6()
{
    square6.classList.add('toggle');
}
function resumeProgram7()
{
    square7.classList.add('toggle');
}
function resumeProgram8()
{
    square8.classList.add('toggle');
}
function resumeProgram9()
{
    square9.classList.add('toggle');
}
function resumeProgram10() //suppression des classe d'animation et ajout des classes de mouvement set
{
    square1.classList.remove('toggle');
    square2.classList.remove('toggle');
    square3.classList.remove('toggle');
    square4.classList.remove('toggle');
    square5.classList.remove('toggle');
    square6.classList.remove('toggle');
    square7.classList.remove('toggle');
    square8.classList.remove('toggle');
    square9.classList.remove('toggle');

    square1.classList.add('square_anim');
    square2.classList.add('square_anim');
    square3.classList.add('square_anim');
    square4.classList.add('square_anim');
    square5.classList.add('square_anim');
    square6.classList.add('square_anim');
    square7.classList.add('square_anim');
    square8.classList.add('square_anim');
    square9.classList.add('square_anim');
    rendertext()
}

function resumeProgram11()
{
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];
        render();
        EnRedemmarage = false;
        waitingForRestart = true;


}


function init() {


    active_by_restart = true;
    win = null;
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    
    squares[index].textContent = mark;
    });
    if(win == "O" || win == "X" && active_by_restart == false) //donne un point au gagnant de la partie
    {
    square1.classList.remove('square_anim');
    square2.classList.remove('square_anim');
    square3.classList.remove('square_anim');
    square4.classList.remove('square_anim');
    square5.classList.remove('square_anim');
    square6.classList.remove('square_anim');
    square7.classList.remove('square_anim');
    square8.classList.remove('square_anim');
    square9.classList.remove('square_anim');
    if(win == "O")
    {
    point_O++;
    }

    if(win == "X")
    {
    point_X++;
    }

    }
    console.log("Les O ont " + point_O + " point");
    console.log("Les X ont " + point_X + " point");
    localStorage.setItem("Les X ont gagné", point_X ,"fois");
    localStorage.setItem("Les O ont gagné", point_O ,"fois");
    pointO.innerText = "Point O : " + point_O
    pointX.innerText = "Point X : " + point_X


    if(board[0] == board[1] && board[1] == board[2]) //animation des lignes
    {
        if(!board[0] == '')
        {
            line_square.style.display = "block";


            line1.style.display = "block";
            line1.classList.add('ver_line_anim_in')
            setTimeout(ver_Line_Resume1, 1000);



        }
    }
    if(board[3] == board[4] && board[4] == board[5])
    {
        if(!board[3] == '')
        {
            line_square.style.display = "block";



            line2.style.display = "block";
            line2.classList.add('ver_line_anim_in')
            setTimeout(ver_Line_Resume2, 1000);


        }
    }
    if(board[6] == board[7] && board[7] == board[8])
    {
        if(!board[6] == '')
        {
            line_square.style.display = "block";



            line3.style.display = "block";
            line3.classList.add('ver_line_anim_in')
            setTimeout(ver_Line_Resume3, 1000);


        }
    }

    if(board[0] == board[3] && board[3] == board[6])
    {
        if(!board[0] == '')
        {
            line_square.style.display = "block";



            line4.style.display = "block";
            line4.classList.add('hor_line_anim_in')
            setTimeout(hor_Line_Resume4, 1000);


        }
    }
    if(board[1] == board[4] && board[4] == board[7])
    {
        if(!board[1] == '')
        {
            line_square.style.display = "block";



            line5.style.display = "block";
            line5.classList.add('hor_line_anim_in')
            setTimeout(hor_Line_Resume5, 1000);




        }
    }
    if(board[2] == board[5] && board[5] == board[8])
    {
        if(!board[2] == '')
        {

            line_square.style.display = "block";



            line6.style.display = "block";
            line6.classList.add('hor_line_anim_in')
            setTimeout(hor_Line_Resume6, 1000);


        }
    }

    if(board[0] == board[4] && board[4] == board[8])
    {
        if(!board[0] == '')
        {
            line_square.style.display = "block";


            line7.style.display = "block";
            line7.classList.add('hor_line_anim_in')
            setTimeout(hor_Line_Resume7, 1000);


        }
    }
    if(board[2] == board[4] && board[4] == board[6])
    {
        if(!board[2] == '')
        {
            line_square.style.display = "block";


            line8.style.display = "block";
            line8.classList.add('hor_line_anim_in')
            setTimeout(hor_Line_Resume8, 1000);


        }
    }




    }
function ver_Line_Resume1() //fonction continue du timer
{
    line1.classList.add('ver_line_set_in')
    line1.classList.remove('ver_line_anim_in')

}
function ver_Line_Resume2()
{
    line2.classList.add('ver_line_set_in')
    line2.classList.remove('ver_line_anim_in')
}
function ver_Line_Resume3()
{
    line3.classList.add('ver_line_set_in')
    line3.classList.remove('ver_line_anim_in')
}

function hor_Line_Resume4()
{
    line4.classList.add('hor_line_set_in')
    line4.classList.remove('hor_line_anim_in')
}
function hor_Line_Resume5()
{
    line5.classList.add('hor_line_set_in')
    line5.classList.remove('hor_line_anim_in')
}
function hor_Line_Resume6()
{
    line6.classList.add('hor_line_set_in')
    line6.classList.remove('hor_line_anim_in')
}
function hor_Line_Resume7()
{
    line7.classList.add('hor_line_set_in')
    line7.classList.remove('hor_line_anim_in')
}
function hor_Line_Resume8()
{
    line8.classList.add('hor_line_set_in')
    line8.classList.remove('hor_line_anim_in')
}

function rendertext() //render le texte de tour ou de gagnant
{
    messages.textContent = win === 'T' ? `Egalite` : win ? `${win} A GAGNE` : `C'est le tour de ${turn}`;    

}
init();

function openClick() //animation de la bar d'information
{
    if(OpenOrNot == true && restarting == false)
    {
        open_button.classList.add('slideIn');
        restarting = true

        setTimeout(Remove1, 500);
        OpenOrNot = false
    }

    else
    {
        open_button.classList.add('slideOut');
        restarting = true

        setTimeout(Remove2, 500);
        OpenOrNot = true

    }

}
var y = 0; //postion x du text drag
var x = 0; //postion y du text drag
deleted = true; //détection de suppression de la page
function Remove1()
{
    open_button.classList.remove('slideIn');

    open_button.classList.add('slideInActive');
    open_button.classList.remove('slideOutActive');
    restarting = false;

}

function Remove2()
{
    open_button.classList.remove('slideOut');

    open_button.classList.remove('slideInActive');
    open_button.classList.add('slideOutActive');
    restarting = false;
}


drag.addEventListener("mousedown", function (e) { //s'active quand on click sur le texte
    isDragging = true;
    offsetX = e.clientX - drag.getBoundingClientRect().left;
    offsetY = e.clientY - drag.getBoundingClientRect().top;

    drag.style.cursor = "grabbing";

});

document.addEventListener("mousemove", function (e) { //fonction de mouvement de drag
    if (isDragging) {
        x = e.clientX - offsetX;
      y = e.clientY - offsetY;
  
      drag.style.left = x + "px";
      drag.style.top = y + "px";
      if(x > 700)
       {
        if(y < 350 && y > 300)
        {
            bin();
        }
       }
       else
       {
        bin_remove();
       }
    }
  });

  document.addEventListener("mouseup", function () { //s'active quand on lache le texte

    isDragging = false;
    drag.style.cursor = "grab";

    if(x > 700)
    {
     if(y < 350 && y > 300)
     {
        var userconfirm = confirm("Do you want to delete TicTacToe??")
        if(userconfirm)
        {
            if(true)
            {
            deleted = false
            body.innerHTML = "";
            }

        }
     }
    }

    
  });



function bin() //mouvement de la poubelle
{
    bin_move.style.transform = 'translate(1540px, 340px) rotate(-20deg)'

}
function bin_remove()
{
    bin_move.style.transform = 'translate(1550px, 340px) rotate(0deg)'
}

