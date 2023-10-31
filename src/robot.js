// const fs = require('fs').promises;

// function parsePosition(positionString) {
//   const [direction, x, y] = positionString.split(' ');
//   return {
//     direction,
//     x: parseInt(x),
//     y: parseInt(y),
//   };
// }

// function moveForward(position, widthSpace, heightSpace, count) {
//   switch (position.direction) {
//     case 'N':
//       position.y = (position.y + count) % heightSpace;
//       break;
//     case 'E':
//       position.x = (position.x + count) % widthSpace;
//       break;
//     case 'S':
//       position.y = (position.y - count + heightSpace) % heightSpace;
//       break;
//     case 'W':
//       position.x = (position.x - count + widthSpace) % widthSpace;
//       break;
//     default:
//   }
// }

// function rotateLeft(position, count) {
//   const directions = ['N', 'W', 'S', 'E'];
//   const currentIndex = directions.indexOf(position.direction);
//   position.direction = directions[(currentIndex + count) % 4];
// }

// function rotateRight(position, count) {
//   const directions = ['N', 'E', 'S', 'W'];
//   const currentIndex = directions.indexOf(position.direction);
//   position.direction = directions[(currentIndex + count) % 4];
// }

// function executeCommands(refferncePosition, commands, widthSpace, heightSpace) {
//   const position = parsePosition(refferncePosition);

//   const commandRegex = /([LRMB])(\d*)/g;
//   let match;
//   while ((match = commandRegex.exec(commands))) {
//     const action = match[1];
//     const count = match[2] ? parseInt(match[2]) : 1;
//     if (action === 'M') moveForward(position, widthSpace, heightSpace, count);
//     else if (action === 'L') rotateLeft(position, count);
//     else if (action === 'R') rotateRight(position, count);
//   }

//   return `${position.direction} ${position.x} ${position.y}`;
// }

// const widthSpace = 100;
// const heightSpace = 100;

// async function processInputFile(filename) {
//   try {
//     const data = await fs.readFile(filename, 'utf8');
//     let lines = data.split('\n');
//     lines = lines.filter(line => line.trim() !== '');
//     console.log('liens',lines);
//     let snNumber = 0;
//     for (let i = 0; i < lines.length; i += 2) {
//       if (i + 1 < lines.length) {
//         const refferncePosition = lines[i];
//         const command = lines[i + 1];
//         const finalPosition = executeCommands(refferncePosition, command, widthSpace, heightSpace);
//         console.log('initial Position:', refferncePosition, 'and command is =>', command, '=> Final Position:', finalPosition);
//         const output = `${snNumber++}.) initial Position: ${refferncePosition} and command is => ${command} => Final Position: ${finalPosition}\n\n`;
//         await fs.writeFile('output.txt', output, { flag: 'a' });
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// const inputFileName = 'command.txt'; // Change this to the actual file name

// processInputFile(inputFileName);



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
