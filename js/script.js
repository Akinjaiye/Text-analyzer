


















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