const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const likesList = document.querySelector('.likes');
const commentsList = document.getElementById('list');

let count = 0;
let isPaused = false;
const likes = {};

let timer = setInterval(incrementCounter, 1000);

function incrementCounter() {
  if (!isPaused) {
    count++;
    counter.textContent = count;
  }
}

plusBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});

heartBtn.addEventListener('click', () => {
  const currentNum = count;

  if (likes[currentNum]) {
    likes[currentNum]++;
    const existingLi = document.getElementById(`like-${currentNum}`);
    existingLi.textContent = `${currentNum} has been liked ${likes[currentNum]} time(s)`;
  } else {
    likes[currentNum] = 1;
    const newLi = document.createElement('li');
    newLi.id = `like-${currentNum}`;
    newLi.textContent = `${currentNum} has been liked 1 time`;
    likesList.appendChild(newLi);
  }
});

pauseBtn.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseBtn.textContent = isPaused ? 'resume' : 'pause';

  plusBtn.disabled = isPaused;
  minusBtn.disabled = isPaused;
  heartBtn.disabled = isPaused;
});

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = e.target.comment.value;
  const p = document.createElement('p');
  p.textContent = input;
  commentsList.appendChild(p);
  e.target.reset();
});
