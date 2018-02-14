const getMeme = $.ajax({
    url: 'https://api.giphy.com/v1/gifs/random',
    method: 'GET',
    dataType: 'json',
    data: {
    key: 'jihEvId9hSK8jUUi9YsQTViLnVmDpDYS',
        format: 'json',
        q: "cheesburgers"
    }
});

const getQuote = $.ajax({
    url: 'https://favqs.com/api/qotd',
    method: 'GET',
    dataType: 'json'
});

$.when(getQuote)
    .then((quote) => {
    displayQuote(quote.quote.body);
});

const displayQuote = (displayQuote) => {
    $('h1').text(displayQuote);
}

$.when(getMeme)
    .then((meme1) => {
    displayMeme(meme1.data.image_url);
})

const displayMeme = (memeImage) => {
    $('.memeContainer').attr('src', memeImage);
}