

let inputDirFst = {x: 0, y: 0}; // x: 0, y: 0 so that snake does not move before providing input
let inputDirSnd={x: 0, y: 0};   // x: 0, y: 0 so that snake does not move before providing input
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
 
let speed = 10; // speed of the snake
let score1 = 0;
let score2 = 0;
let lastPaintTime = 0;

//for first snake

let snakeArrOne =[
    { x:16,y:16 }
];


//for second snake

let snakeArrTwo = [
    {x: 3, y: 3}
];



food = {x: 9, y: 10};


function main(ctime) {
    window.requestAnimationFrame(main);
    
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    pvpGame();
}


//checking collide for first snake 

function isCollideFst(fstSnake) {
    // If you bump into your body
    for (let i = 1; i < snakeArrOne.length; i++) {
        if(fstSnake[i].x === fstSnake[0].x && fstSnake[i].y === fstSnake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(fstSnake[0].x >= 19 || fstSnake[0].x <=0 || fstSnake[0].y >= 19 || fstSnake[0].y <=0){
        return true;
    }
        
    return false;
}


// checking collide for second snake
function isCollideSnd(sndSnake) {
    // If you bump into your body
    for (let i = 1; i < snakeArrTwo.length; i++) {
        if(sndSnake[i].x === sndSnake[0].x && sndSnake[i].y === sndSnake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(sndSnake[0].x >= 19 || sndSnake[0].x <=0 || sndSnake[0].y >= 19 || sndSnake[0].y <=0){
        return true;
    }
        
    return false;
}


function pvpGame(){

    // when snake dies

    if(isCollideFst(snakeArrOne) || isCollideSnd(snakeArrTwo) ){
      gameOverSound.play();
      inputDirFst =  {x: 0, y: 0}; 
      inputDirSnd =  {x: 0, y: 0}; 

        if(score1 < score2){
            alert("Player 2 wins. Press Enter to play again!");
        }
        else if (score2< score1){
            alert("Player 1 wins. Press Enter to play again!");
        }
        else{
            alert("DRAW");
        }
        
        snakeArrOne = [{x:13,y:16}];
        snakeArrTwo = [{x: 5, y: 5}];
        
        
        score1= 0; 
        score2= 0;
    }
    
   
    
    //food eaten for first snake
    if(snakeArrOne[0].y === food.y && snakeArrOne[0].x ===food.x){
        foodSound.play();
        score1 += 1;
        
        firstScore.innerHTML = "Score1: " + score1;
        snakeArrOne.unshift({x: snakeArrOne[0].x + inputDirFst.x, y: snakeArrOne[0].y + inputDirFst.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())} // so that food appears randomly
    }


    
    // food eaten for second snake
    if(snakeArrTwo[0].y === food.y && snakeArrTwo[0].x ===food.x){
        foodSound.play();
        score2 += 1;
     
        secondScore.innerHTML = "Score2: " + score2;
        snakeArrTwo.unshift({x: snakeArrTwo[0].x + inputDirSnd.x, y: snakeArrTwo[0].y + inputDirSnd.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())} // so that food appears randomly
    }


  
    // Display the first snake

    pvpboard.innerHTML = "";

    snakeArrOne.forEach ((e, first,)=>{
        firstElement = document.createElement('div');
        firstElement.style.gridRowStart = e.y;
        firstElement.style.gridColumnStart= e.x;

        if(first === 0){
            firstElement.classList.add('firsthead');
          
        }
        else{
            firstElement.classList.add('firstbody');
            
        }
        pvpboard.appendChild(firstElement);
    });

    
   //  Display the second snake

     snakeArrTwo.forEach((e, second)=>{
        secondElement = document.createElement('div');
        secondElement.style.gridRowStart = e.y;
        secondElement.style.gridColumnStart = e.x;

        if(second === 0){
            secondElement.classList.add('secondhead');
        }
        else{
            secondElement.classList.add('secondbody');
        }
        pvpboard.appendChild(secondElement);
    });


        // Moving the first snake
        for (let i = snakeArrOne.length - 2; i>=0; i--) { 
            snakeArrOne[i+1] = {...snakeArrOne[i]};
        }
    
        snakeArrOne[0].x += inputDirFst.x;
        snakeArrOne[0].y += inputDirFst.y;
    
        

      // Moving the second snake
      for (let i = snakeArrTwo.length - 2; i>=0; i--) { 
        snakeArrTwo[i+1] = {...snakeArrTwo[i]};
    }

    snakeArrTwo[0].x += snakeArrTwo.x;
    snakeArrTwo[0].y += snakeArrTwo.y;

    
   
    
    // Display the food

    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    pvpboard.appendChild(foodElement);


}




// Main logic starts here


window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{

    inputDirFst = {x: 0, y: 0} // move first sanke

     moveSound.play();

    switch (e.key) {
        case "ArrowUp":
            
            inputDirFst.x = 0;  
            inputDirFst.y = -1; // so it moves up 
            break;

        case "ArrowDown":
            
            inputDirFst.x = 0; // so it moves down
            inputDirFst.y = 1;
            break;

        case "ArrowLeft":
            
            inputDirFst.x = -1; // so it moves left
            inputDirFst.y = 0;
            break;

        case "ArrowRight":
            
            inputDirFst.x = 1; // so it moves right
            inputDirFst.y = 0;
            break;
        default:
            break;
    }



    inputDirSnd = {x: 0, y: 0} // move second snake
    
    // moveSound.play();
    
    switch (e.key) {
        case "w":
            
            inputDirSnd.x = 0;
            inputDirSnd.y = -1;
            break;

        case "s":
            
            inputDirSnd.x = 0;
            inputDirSnd.y = 1;
            break;

        case "a":
            
            inputDirSnd.x = -1;
            inputDirSnd.y = 0;
            break;

        case "d":
            
            inputDirSnd.x = 1;
            inputDirSnd.y = 0;
            break;
        default:
            break;
    }


    

});









