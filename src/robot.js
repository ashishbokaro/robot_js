function parsePosition(positionString) {
  const [direction, x, y] = positionString.split(' ');
  return {
    direction,
    x: parseInt(x),
    y: parseInt(y),
  };
}

function moveForward(position, widthSpace, heightSpace, count) {
  switch (position.direction) {
    case 'N':
      position.y = (position.y + count) % heightSpace;
      break;
    case 'E':
      position.x = (position.x + count) % widthSpace;
      break;
    case 'S':
      position.y = (position.y - count + heightSpace) % heightSpace;
      break;
    case 'W':
      position.x = (position.x - count + widthSpace) % widthSpace;
      break;
    default:
  }
}

function rotateLeft(position, count) {
  const directions = ['N', 'W', 'S', 'E'];
  const currentIndex = directions.indexOf(position.direction);
  position.direction = directions[(currentIndex + count) % 4];
}

function rotateRight(position, count) {
  const directions = ['N', 'E', 'S', 'W'];
  const currentIndex = directions.indexOf(position.direction);
  position.direction = directions[(currentIndex + count) % 4];
}

function executeCommands(refferncePosition, commands, widthSpace, heightSpace) {
  const position = parsePosition(refferncePosition);

  const commandRegex = /([LRMB])(\d*)/g;
  let match;
  while ((match = commandRegex.exec(commands))) {
    const action = match[1];
    const count = match[2] ? parseInt(match[2]) : 1;
    if (action === 'M') moveForward(position, widthSpace, heightSpace, count);
    else if (action === 'L') rotateLeft(position, count);
    else if (action === 'R') rotateRight(position, count);
  }

  return `${position.direction} ${position.x} ${position.y}`;
}

module.exports = executeCommands;
