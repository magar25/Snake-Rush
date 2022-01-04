// Game Constants & Variables

let inputDir = {x: 0, y: 0};  // x: 0, y: 0 so that snake does not move before providing input

const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');

let speed = 10; // for speed of the snake
let score = 0;
let lastPaintTime = 0;

let snakeArr = [
    {x: 13, y: 15}
];  

food = {x: 6, y: 7};

// Game Functions

function main(ctime) {
    
    window.requestAnimationFrame(main); //for fps
    // console.log(ctime)

    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    game();
}


// to check for  gameover

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){ //checking if the head has collided into the body
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){ // checking if the head has collided into the wall
        return true;
    }
        
    return false;
}



function game(){
    // Part 1: Updating the snake array & Food


    //for game over
    if(isCollide(snakeArr)){
         gameOverSound.play();
         inputDir =  {x: 0, y: 0}; // so the we cannot move snake
         if(hiscore<score){
            
            window.open('https://localhost/Snake%20Rush/database/storescore.php?score='+score,'_blank'); 
            // opens new window to store new score if the score is greater then highscore

         }
         alert("Game Over. Press any key to play again!");
         score = 0;   
         snakeArr = [{x: 13, y: 15}];
         

    }

    // If you have eaten the food, increment the score and regenerate the food

    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){ //checking if the x and y coordinates of the snake is equal to the food's
        foodSound.play(); // plays this sound if snake eats the food
        score +=1; // increase the score after eating food
        
        if(score>hiscoreval){ // checking high score
            hiscoreval = score; //updating high score
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval)); //storing high score
            hiscoreBox.innerHTML = "HiScore: " + hiscoreval; // displaying high score
        }
        scoreBox.innerHTML = "Score: " + score; //update score in css
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y}); //adds body to the head of the snake
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())} // so that food appears randomly between a and b
    }




    // Moving the snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]}; // ...snakeArr[i] is the new object which contains snakeArr[i]
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{ // e means event
        snakeElement = document.createElement('div'); //putting the head and body of the snakes into div 
        snakeElement.style.gridRowStart = e.y; // head of snake on y coordinate or row
        snakeElement.style.gridColumnStart = e.x; // head of snake on x coordinate or column

        if(index === 0){
            snakeElement.classList.add('head'); // adding snake's head into css if index is empty
        }
        else{
            snakeElement.classList.add('snake'); // adding snake's body into css if the index in not empty
        }
        board.appendChild(snakeElement); // adding the snake inside the board 
    });

    // Display the food
    foodElement = document.createElement('div'); // putting food into div 
    foodElement.style.gridRowStart = food.y; // food on y coordinate or row
    foodElement.style.gridColumnStart = food.x; // food on x coordinate or column
    foodElement.classList.add('food'); // adding food into css
    board.appendChild(foodElement); // adding the food inside the board


}
 // for high Score

let hiscore = localStorage.getItem("hiscore"); // seting high Score 
if(hiscore === null){ // checkgin if the score is empty or not
    hiscoreval = 0;  // setting high Score to 0 if null
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))  //storing the value in highScore
}
else{
    hiscoreval = JSON.parse(hiscore); // getting the value of previous high Score
    hiscoreBox.innerHTML = "HiScore: " + hiscore; // desplaying the previous high Score
}


// Main logic starts here


window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{ // e means event
    inputDir = {x: 0, y: 0} // Start the game
    moveSound.play(); // plays sound when button is pressed
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;  
            inputDir.y = -1; // so it moves up 
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0; // so it moves down
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1; // so it moves left
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1; // so it moves right
            inputDir.y = 0;
            break;
        default:
            break;
    }

});