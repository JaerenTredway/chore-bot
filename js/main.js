
let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let startButton = document.getElementById('start');
let currentlyPlaying = true;

let playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
};

let isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

let isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

let randomChoreDoorGenerator = () =>
{
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  } else if (choreDoor === 2) {
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
};


doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    isClicked(doorImage1);
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    isClicked(doorImage2);
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    isClicked(doorImage3);
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
   if (currentlyPlaying === false) {
      startRound();
   }
};

startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};


 let gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  };
  currentlyPlaying = false;
};

//startRound(); Why would you do this? Appears to be unnecessary...
randomChoreDoorGenerator();
