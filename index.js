const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newArrayOfTutorials = tutorials.map(function (title) {
  
    let wordsOfTheTitle = title.split(" ")

  
    let capitalized = wordsOfTheTitle.map(word => word[0].toUpperCase() + word.slice(1))
    let rejoinedWord = capitalized.join(" ")
    return rejoinedWord
    

    // console.log(capitalized.join(" "))

    // let rejoinedTitle = rejoinedWordsOfTitle.join(" ")
    // return rejoinedTitle

    
  })
  return newArrayOfTutorials
}
titleCased()
    


    // let titleWords = title.split(" ");
    // let firstCharacter = titleWords.map(function(word){
    //   word[0].toUpperCase();
    // })
    // let rejoinedWord = firstCharacter.join();
    // let rejoinedTitle = rejoinedWord.join();
    // return rejoinedTitle
    // })
  
  


