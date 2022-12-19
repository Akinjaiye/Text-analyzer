
function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}















// USER INTERFACE LOGIC //
let offensiveWords = ["zoinks", "muppeteer", "biffaroni","loopdaloop"]
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    const boldedPassage = boldPassage(word, passage)
    const topThreeli = top3(passage)   
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#message").text(passage)
    $("#bolded-passage").html(boldedPassage)
    $("#topthree").html(topThreeli)
  });
});