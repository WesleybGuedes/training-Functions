// Requisito 1 - Crie a função verifyPalindromes
verifyPalindrome = (string) => {
  let reverseString = string.split('').reverse().join('');
  if (string === reverseString) {
    return true;
  }
  return false;
};

// Requisito 2 - Crie a função getHighestIndex
getHighestIndex = (arrayInt) => {
  let highestIndex = 0;
  for (let i = 0; i < arrayInt.length; i += 1) {
    if (arrayInt[i] > arrayInt[highestIndex]) {
      highestIndex = i;
    }
  }
  return highestIndex;
};

// Requisito 3 - Crie a função getSmallestIndex
getSmallestIndex = (arrayInt) => {
  let smallerIndex = 0;
  for (let i = 0; i < arrayInt.length; i += 1) {
    if (arrayInt[i] < arrayInt[smallerIndex]) {
      smallerIndex = i;
    }
  }
  return smallerIndex;
};

// Requisito 4 - Crie a função getLongestWord
getLongestWord = (stringArray) => {
  let longestWord = stringArray[0];
  for (let i = 0; i < stringArray.length; i += 1) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
    }
  }
  return longestWord;
};

countHighestNumberMaxOccurrences = (arrayInt) => {
  let highestNumber = arrayInt[0];
  let count = 0;

  for (let i = 0; i < arrayInt.length; i += 1) {
    if (arrayInt[i] > highestNumber) {
      highestNumber = arrayInt[i];
      count = 1; // Reset count when encountering a new highest number
    } else if (arrayInt[i] === highestNumber) {
      count += 1; // Increment count for each occurrence of the highest number
    }
  }

  return count;
};

// Não modifique as linhas abaixo
module.exports = {
  verifyPalindrome: typeof verifyPalindrome === 'function' ? verifyPalindrome : (() => { }),
  getHighestIndex: typeof getHighestIndex === 'function' ? getHighestIndex : (() => { }),
  getSmallestIndex: typeof getSmallestIndex === 'function' ? getSmallestIndex : (() => { }),
  getLongestWord: typeof getLongestWord === 'function' ? getLongestWord : (() => { }),
  countHighestNumberMaxOccurrences: typeof countHighestNumberMaxOccurrences === 'function'
    ? countHighestNumberMaxOccurrences
    : (() => { }),
};
