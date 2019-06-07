// Rover Object Goes Here
var rover = {
  direcao: "n",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft() {
  switch (rover.direcao) {
    case "l":
      rover.direcao = "n";
      console.log("O rover mudou para a direcao: " + rover.direcao);
      break;
    case "n":
      rover.direcao = "o";
      console.log("O rover mudou para a direcao: " + rover.direcao);
      break;
    case "o":
      rover.direcao = "s";
      console.log("O rover mudou para a direcao: " + rover.direcao);
      break;
    case "s":
      rover.direcao = "l";
      console.log("O rover mudou para a direcao: " + rover.direcao);
      break;
    default: console.log("Direcao inexistente")
  }
}

function turnRight() {
  switch (rover.direcao) {
    case "l":
      rover.direcao = "s"
      console.log("O rover mudou para a direcao: " + rover.direcao);
      break;
    case "s":
      rover.direcao = "o";
      console.log("o rover mudou para a direcao: " + rover.direcao);
      break;
    case "o":
      rover.direcao = "n";
      console.log("o rover mudou para a direcao: " + rover.direcao);
      break;
    case "n":
      rover.direcao = "l";
      console.log(" o rover mudou para a direcaoo: " + rover.direcao);
      break;
    default: console.log("Direcao inexistente")
  }
}

function moveForward() {

  if (rover.direcao === "l" && rover.x >= 0 && rover.x < 9) {
    rover.x += 1;
    console.log('x: ' + rover.x + ', y: ' + rover.y);

    rover.travelLog.push(['x: ' + rover.x, 'y: ' + rover.y])

  }

  if (rover.direcao === "s" && rover.y >= 0 && rover.y < 9) {
    rover.y += 1;
    console.log('x: ' + rover.x + ', y: ' + rover.y)

    rover.travelLog.push(['x: ' + rover.x, 'y: ' + rover.y])
  }

  if (rover.direcao === "o" && rover.x > 0 && rover.x <= 9) {
    rover.x -= 1;
    console.log('x: ' + rover.x + ', y: ' + rover.y)

    rover.travelLog.push(['x: ' + rover.x, 'y: ' + rover.y])
  }

  if (rover.direcao === "n" && rover.y > 0 && rover.y <= 9) {
    rover.y -= 1;
    console.log('x: ' + rover.x + ', y: ' + rover.y)

    rover.travelLog.push(['x: ' + rover.x, 'y: ' + rover.y])
  }
}

function commands(string) {
  for (let i = 0; i <= string.length - 1; i += 1) {
    switch (string[i]) {
      case "f":
        moveForward();
        console.log("moveForward foi chamado")
        break;
      case "r":
        turnRight();
        console.log("turnRight foi chamado")
        break;
      case "l":
        turnLeft();
        console.log("turnLeft foi chamado")
        break;
      default: console.log("comando errado")
    }
  }
}
