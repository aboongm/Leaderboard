import Score from './score.js';

const scores = [];

const apiURL =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BTEFhqTCMyUgjyeM55mV/scores/';

const refresh = () => {
  const scoreList = document.querySelector('.score-list');
  if (scores.length !== 0) {
    scoreList.innerHTML = '';
    scores.forEach((item) => {
      const score = `
      <li class="h4 p-2 m-0">${item.player}: ${item.score}</li>
      `;
      scoreList.insertAdjacentHTML('beforeend', score);
    });
  }
};

const addScore = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { player, score } = form.elements;
    const newScore = new Score(player.value, score.value);
    scores.push(newScore);
    refresh();
  });
};

export { addScore, refresh };
