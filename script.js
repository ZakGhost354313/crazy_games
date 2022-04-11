//const _game = require('./games.json')
const game = {
  "cpa": {
    "name": "Crazy Pixel Apocalypse",
    "url": "https://www.crazygames.com/game/crazy-pixel-apocalypse,
    "html": '<iframe src="https://games.crazygames.com/en_US/crazy-pixel-apocalypse/index.html" scrolling="no" allow="autoplay; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;" allowfullscreen="" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-popups" loading="eager" importance="high" class="game"></iframe>'
  },
  "cpa3": {
    "name": "Crazy Pixel Apocalypse 3",
    "url": "https://www.crazygames.com/game/crazy-pixel-apocalypse-3,
    "html": '<iframe src="https://games.crazygames.com/en_US/crazy-pixel-apocalypse-3/index.html" scrolling="no" allow="autoplay; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write;" allowfullscreen="" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-popups" loading="eager" importance="high" class="game"></iframe>'
  }
}
function iframe(_in) {
  const page = document.getElementByid("game-div");
  page.innerHTML += _in;
}

function crazyGames(url) {
  if (url == game.cpa.name) {
    iframe(game.cpa.html);
  } else if (url == game.cpa3.name) {
    iframe(game.cpa3.html);
  } else {
    print("error " + url);
  }
}

crazyGames(game.cpa.name);
