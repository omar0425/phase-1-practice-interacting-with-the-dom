let timer = document.getElementById("counter");
console.log(timer.innerText)
const subtract = document.getElementById("minus");
const add = document.getElementById("plus");
const likes = document.getElementById("heart");
const stop = document.getElementById("pause");
let count = 0;
const form = document.getElementById("comment-form");
const list = document.getElementById("list");
let commentInput = document.getElementById("comment-input")
let likesCount = {};
// - See the timer increment every second once the page has loaded.
let startTimer = setInterval(() => {
  timer.textContent = count++;
}, 1000);

//******************************************************************************* */

// - Manually increment and decrement the counter using the plus and minus buttons.
add.addEventListener("click", increment);
function increment() {
  timer.textContent = count++;
}
subtract.addEventListener("click", decrement);
function decrement() {
  timer.textContent = count--;
}
// - Pause the counter, which should:
//   - pause the counter
//   - disable all buttons except the pause button
//   - switch the label on the button from "pause" to "resume"
// - Click the "restart" button to restart the counter and re-enable the buttons.
let paused = false;
const pauseTimer = stop.addEventListener("click", pauseTimers);
function pauseTimers() {
  paused = !paused;
  if (paused) {
    clearInterval(startTimer);
    stop.innerText = "resume";
    likes.disabled = true;
    subtract.disabled = true;
    add.disabled = true;
    submit.disabled = true;
  } else {
    stop.innerText = "pause";
    likes.disabled = false;
    subtract.disabled = false;
    add.disabled = false;
    submit.disabled = false;
    startTimer = setInterval(() => {
      timer.textContent = count++;
    }, 1000);
  }
}
// ### Deliverables
// Add the following features one by one, refreshing the page to see your
// functionality working as you build.



// - Leave comments on my gameplay, such as: "Wow, what a fun game this is."
form.addEventListener("submit", function(e){
e.preventDefault()
const commentLi = document.createElement("li")
commentLi.innerText = commentInput.value
list.append(commentLi)

})
// - "Like" an individual number of the counter. I should see the count of the
//   number of "likes" associated with that number displayed.
const clickLikes = () => {
  const timerText = timer.innerText
  
  
  if(timerText in likesCount){
    likesCount[timerText] = likesCount[timerText] + 1
    let li = document.getElementById(timerText)
    li.innerText = `${timerText} has been liked ${likesCount[timerText]} times`

  }else if (!(timerText in likesCount)){
    likesCount[timerText] = (likesCount[timerText] || 0 ) + 1
    let clickLi = document.createElement("li")
    clickLi.id = timerText

    const likesList = document.getElementsByClassName("likes")
    clickLi.innerText = `${timerText} has been liked ${likesCount[timerText]} times`
    likesList[0].append(clickLi)
  }
}

likes.addEventListener('click', clickLikes)





