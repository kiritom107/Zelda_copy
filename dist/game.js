(() => {
  // code/main.js
  kaboom();
  loadSprite("bean", "/sprites/bean.png");
  loadSprite("ghosty", "/sprites/ghosty.png");
  var player = add([
    sprite("bean"),
    pos(120, 80),
    rotate(0),
    origin("center")
  ]);
  player.onUpdate(() => {
    player.angle += 120 * dt();
  });
  for (let i = 0; i < 3; i++) {
    const x = rand(0, width());
    const y = rand(0, height());
    add([
      sprite("ghosty"),
      pos(x, y)
    ]);
  }
})();
//# sourceMappingURL=game.js.map
