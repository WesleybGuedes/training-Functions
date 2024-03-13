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

// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

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

console.log(verifyPalindrome('arara'));

console.log(getHighestIndex([2, 3, 6, 7, 10, 1]));

console.log(getSmallestIndex([2, 4, 6, 7, 10, 0, -3]));

console.log(getLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
