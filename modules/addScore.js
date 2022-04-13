import Score from './score.js';

const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/BTEFhqTCMyUgjyeM55mV/scores/';

const fetchAPI = async () => {
  const response = await fetch(apiURL);
  const result = await response.json();
  return result;
};

const postAPI = async (newScore) => {
  const score = fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return score.json;
};

const refresh = async () => {
  const scoreList = document.querySelector('.score-list');
  const scores = await fetchAPI().then((result) => result);

  if (scores.length !== 0) {
    scoreList.innerHTML = '';
    scores.result.forEach((item) => {
      const score = `
      <li class="h4 p-2 m-0">${item.user}: ${item.score}</li>
      `;
      scoreList.insertAdjacentHTML('beforeend', score);
    });
  }
};

const addScore = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { user, score } = form.elements;
    const newScore = new Score(user.value, score.value);
    await postAPI(newScore);
    user.value = '';
    score.value = '';
  });
};

export { addScore, refresh };
