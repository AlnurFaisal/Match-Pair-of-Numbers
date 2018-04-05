export const genRandomNumbers = gameLevel => {
  let arr = [];
  const ITERATIONS = gameLevel;
  for (let i = 0; i < ITERATIONS; i++) {
    arr.push(generatePositiveNumber());
  }
  const doubleArr = doubleArray(arr);
  const shuffleArray = shuffle(doubleArr);
  const gameObj = [];
  for (let i = 0; i < shuffleArray.length; i++) {
    gameObj[i] = { value: shuffleArray[i], isMatched: false, show: false };
  }
  return gameObj;
};

export const doubleArray = arr => {
  return [...arr, ...arr];
};

export const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const generatePositiveNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};
