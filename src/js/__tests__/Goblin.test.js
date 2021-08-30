/* eslint-disable linebreak-style */
import Goblin from '../Goblin';

jest.useFakeTimers();

test('change cell', () => {
  const html = document.createElement('div');
  html.innerHTML = `<section class="goblin">
    <div class="row">
      <div class="col">
        <img src="img/goblin.png" class="head">
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>`;
  const Game = new Goblin(html.querySelector('.goblin'));
  expect(Game.cells[0].contains(Game.goblinHead)).toBeTruthy();
  Game.change();
  jest.runTimersToTime(1500);
  expect(Game.cells[0].contains(Game.goblinHead)).toBeFalsy();
});
