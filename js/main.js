
let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let startButton = document.body.querySelector('#start');


playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver();
  }
};

isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
};

randomChoreDoorGenerator = () =>
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

if (!isClicked(doorImange1)) {
  doorImage1.onclick = () => {
    doorImage1.src = openDoor1;
    isClicked(door);
    playDoor();
  }
};
if (!isClicked(doorImange1)) {
  doorImage2.onclick = () => {
    doorImage2.src = openDoor2;
    isClicked(door);
    playDoor();
  }
};
if (!isClicked(doorImange1)) {
  doorImage3.onclick = () => {
    doorImage3.src = openDoor3;
    isClicked(door);
    playDoor();
  }
};

gameOver = () => {

};

randomChoreDoorGenerator();
