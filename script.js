const textareaE1 = document.querySelector('.textarea');
const charactersNumberE1 = document.querySelector
    ('.stat_number--characters');
const twitterNumberE1 = document.querySelector
    ('.stat_number--twitter');
const facebookNumberE1 = document.querySelector
    ('.stat_number--facebook');
const wordsNumberE1 = document.querySelector
    ('.stat_number--words');


textareaE1.addEventListener('input', function () {
    //input validation
    if(textareaE1.value.includes('<script>')) {
        alert('Invalid input');
        textareaE1.value = textareaE1.value.replace('<script>' , '');
    }

    //determine new numbers 
    const numberOfChar = textareaE1.value.length;
    const twitterCharLeft = 280 - numberOfChar;
    const facebookCharLeft = 2000 - numberOfChar;
    let numberOfWords = textareaE1.value.split(' ').length;

    //when word is empty then set to 0 
    if (textareaE1.value.length === 0) {
        numberOfWords = 0;
    }

    //add visual indicator if limit exceed
    if (twitterCharLeft < 0) {
        twitterNumberE1.classList.add('stat_number--limit');
    } else {
        twitterNumberE1.classList.remove('stat_number--limit');
    }

    if (facebookCharLeft < 0) {
        facebookNumberE1.classList.add('stat_number--limit');
    } else {
        facebookNumberE1.classList.remove('stat_number--limit');
    }

    //set new numbers 
    charactersNumberE1.textContent = numberOfChar;
    twitterNumberE1.textContent = twitterCharLeft;
    facebookNumberE1.textContent = facebookCharLeft;
    wordsNumberE1.textContent = numberOfWords;

});


