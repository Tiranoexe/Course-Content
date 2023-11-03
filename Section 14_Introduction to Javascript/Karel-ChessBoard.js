function main(){
    lineFromLeft();
    upFromLeft();
    lineFromRight();
    upFromRight();
    lineFromLeft();
    upFromLeft();
    lineFromRight();
    upFromRight();
    lineFromLeft();
 }
 
 function lineFromLeft(){
    putBeeper();
    repeat(2);{
       move();
       move();
       putBeeper();
    }  
 }
 
 function upFromLeft() {
    turnLeft();
    move();
    turnLeft();
 }
 
 function lineFromRight(){
    move();
    putBeeper();
    repeat(2)
    move();
    putBeeper();
    move();
 }
 
 function upFromRight(){
  turnRight();
  move();
  turnRight();
 }