const countCharacter = (phrase, character) => {
    count = 0;
    for (i = 0; i < phrase.length; i++)
      if (phrase[i] === character) {
        count = count + 1;
      }
    return count;
};
  
console.log (countCharacter('Hello Elliot', 'l'))