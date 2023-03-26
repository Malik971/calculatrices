// Tuto de Rien
// Débuter avec JavaScript

let number1 = 1;
let number2 = 2;
let userInput = 0;
let result = 0;
let expression = '';
let level = 0;
let randonRange = 0;
let score = 0;
let counter = 0;

document.getElementById('levelSetup').innerHTML=`
<div class="d-flex justify-content-between p-5">
<div class="border border-dark p-2">
<p class="text-center bg-dark text-white p-3 mb-2 font-weight-bold">Difficulté</p>
<button class="btn btn-primary" value='+' onclick="setExpression(this)">+</button>
<button class="btn btn-primary" value='-' onclick="setExpression(this)">-</button>
<button class="btn btn-primary" value='x' onclick="setExpression(this)">x</button>
<button class="btn btn-primary" value='/' onclick="setExpression(this)">/</button>
</div>
 
<div class="border border-dark p-2">
<p class="text-center bg-dark text-white p-3 mb-2 font-weight-bold">Niveau</p>
<button class="btn btn-primary" value="1" onclick="setLevel(this)">1</button>
<button class="btn btn-primary" value="2" onclick="setLevel(this)">2</button>
<button class="btn btn-primary" value="3" onclick="setLevel(this)">3</button>
<button class="btn btn-primary" value="4" onclick="setLevel(this)">4</button>
<button class="btn btn-primary" value="5" onclick="setLevel(this)">5</button>
</div>
</div>
`
;

function setExpression(ex) {
    expression = ex.value;
    switch (niveau) {
        case 1:
            randonRange = 10;
            break;
        case 2:
            randonRange = 100;
            break;
        case 3:
            randonRange = 1000;
            break;
        case 4:
            randonRange = 10000;
            break;
        case 5:
            randonRange = 100000;
            break;
    }
    startTestQuestion();
}

function setLevel(niv) {
    niveau = niv.value;
    startTestQuestion();
}



function startTestQuestion() {
    if (expression!= '' && niveau > 0) {
        calculeTest();
    }
    info()
}

function startTestQuestion2() {
    if (expression!= '' && niveau > 0) {
        calculeTest();
    }
    info()
}

function calculeTest() {
    
    number1 = Math.floor(Math.random()*randonRange)
    number2 = Math.floor(Math.random()*randonRange)
    console.log(number1 +''+number2);

}


function info() {
    document.getElementById('score').innerHTML=`
    <p class="m-0">Score : 20/20</p>
    <p class="m-0">Expression : ${expression} </p>
    <p class="m-0">Level : ${niveau}</p>
    `
}
