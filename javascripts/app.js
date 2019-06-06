// Rover Object Goes Here
var rover = {
  direcao: "n",
  x: 0,
  y: 0,
}

function turnLeft(robo) {

  if (robo.direcao == "l") {
    return robo.direcao = "n";
  }
  if (robo.direcao == "n") {
    return robo.direcao = "o";
  }
  if (robo.direcao == "o") {
    return robo.direcao = "s";
  }
  if (robo.direcao == "s") {
    return robo.direcao = "l";
  }

  // switch (robo.direcao) {
  //   case "l":
  //     robo.direcao = "n";
  //     break;
  //   case "n":
  //     robo.direcao = "o";
  //     break;
  // }
}

function turnRight(robo) {
  if (robo.direcao == "l") {
    return robo.direcao = "s";
  }
  if (robo.direcao == "s") {
    return robo.direcao = "o";
  }
  if (robo.direcao == "o") {
    return robo.direcao = "n";
  }
  if (robo.direcao == "n") {
    return robo.direcao = "l";
  }
}

function moveForward(robo) {
  if (robo.direcao == "l") {
    robo.x++;
  }
  if (robo.direcao == "s") {
    robo.y++;
  }
  if (robo.direcao == "o") {
    robo.x--;
  }
  if (robo.direcao == "n") {
    robo.y--;
  }
  return console.log('x: ' + robo.x + ', y: ' + robo.y)
}
