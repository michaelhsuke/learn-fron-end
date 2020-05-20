// function readLineSync() {
//   return {
//     [Symbol.iterator]() {
//       return {
//         next() {
//           return { done: false }
//         },
//         return() {
//           console.log('return called')
//         }
//       }
//     }
//   }
// }

// for (var line of readLineSync()) {
//   console.log(line);
//   // break;
// }

function readLinesSync() {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: false, value: 'hello' };
        },
        return() {
          // file.close();
          // return { done: true };
          console.log('returned====')
          return { done: true }
        }
      };
    },
  };
}

for (var line of readLinesSync()) {
  console.log(line)
  break;
}