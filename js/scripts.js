$(document).ready(function(){
    var threeOrMore = [];
    var weirdSentence;
    
    $('#submitButton').click(function(event){
        event.preventDefault();
        threeOrMore = []
        var input = $('input#word-input').val();
        var wordArr = input.split(" ");
        console.log(wordArr);
        wordArr.forEach(function(word){
            if (word.length >= 3){
                threeOrMore.push(word);
            }
        });
        weirdSentence = threeOrMore.reverse().join(" ");
        $('#list').text(weirdSentence);
        console.log(threeOrMore);
        console.log(weirdSentence);
        
    });
});
