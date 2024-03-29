export function detectCollision(player, object) {
  const playerTop = player.position.y;
  const playerBottom = player.position.y + player.height;
  const playerLeft = player.position.x;
  const playerRight = player.position.x + player.width;

  const objectTop = object.position.y;
  const objectBottom = object.position.y + object.height;
  const objectLeft = object.position.x;
  const objectRight = object.position.x + object.width;

  const colisionGap = object.colisionGap;
  //   if (
  //     playerLeft >= objectLeft &&
  //     playerLeft <= objectRight &&
  //     playerTop >= objectTop &&
  //     playerTop <= objectDown
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  if (
    playerBottom <= objectTop + colisionGap &&
    playerBottom + player.velocity.y >= objectTop + colisionGap &&
    playerRight - 70 >= objectLeft &&
    playerLeft + 70 <= objectRight
  ) {
    return true;
  } else {
    return false;
  }
}
