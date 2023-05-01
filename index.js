// Your code here

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }

function moveDodgerRight (){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
}

document.addEventListener("keydown", (e) => {
   switch (e.key) {
    case "ArrowLeft":
        moveDodgerLeft();
        break;
    case "ArrowRight":
        moveDodgerRight();
        break;
    default:
        break;
   }
      }
  );


  