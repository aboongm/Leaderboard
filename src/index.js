import './styles/style.css';
import { addScore, refresh } from '../modules/addScore.js';

refresh();
addScore();

document.getElementById('refresh').addEventListener('click', (e) => {
  refresh();
});
