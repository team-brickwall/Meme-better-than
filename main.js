
// create empty object that will hold all functions
const memeApp = {}


// create function that will get both quote and giphy data using AJAX

memeApp.getGif = (query) => {
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/random',
        method: 'GET',
        dataType: 'json',
        data: {
            key: 'jihEvId9hSK8jUUi9YsQTViLnVmDpDYS',
                format: 'json',
                q: 'cheeseburger',
            }
}).then((gif1) => {
    memeApp.displayGif(gif1.data.image_url);
})
}

memeApp.getQuote = () => {
    $.ajax({
        url: 'https://favqs.com/api/qotd',
        method: 'GET',
        dataType: 'json'
    }).then((quote) => {
        memeApp.displayQuote(quote.quote.body);

    })
}


// create functions that will display AJAX data:
// 1) display gif on page load
// 2) display quote.author on page load
// 3) "display" quote.body on page load (except on page load we will .text("") empty string)

memeApp.displayGif = (memeImage) => {
    $('.memeContainer').attr('src', memeImage);
}


memeApp.displayQuote = (displayQuote) => {
    $('h3').text(displayQuote);
};

// create function that will handle our event listeners:
// 1) jquery smoothscroll plugin for header button
// 2) on submit (ie "generate"), display user text in left box, displays quote.body in right box
// 3) on reset, clear user input, pull new AJAX data, empty two containers
memeApp.events = () => {

// smooth scroll
    $('.scroll').on('click',function(){
        $('html').animate({
            scrollTop: $('.authorTitle').offset().top}, 'slow'
        );
    });

// display text in boxes .on generate
    $('.userInput').on('submit',function(){
        $('.input').html('<h4>${.userInput.input}</h4>');
        console.log('hi there');
        $('.quoteAPI').text('<h4>displayQuote</h4>');
    });


}


//create function that launches app on page load
memeApp.init = () => {
    memeApp.getGif();
    memeApp.getQuote();
}

// create the document ready
$(function(){
    memeApp.init();
});

