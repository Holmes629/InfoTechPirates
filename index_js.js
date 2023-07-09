// For displaying random quotes
var quotes= ['"The Harder you work the better you get"', 
'"Dont wish for it work for it"',
'"The way i see it, if you want the rainbow, you gotta put up with the rain"',
'"Everything has beauty, but not everyone sees it"',
'"Life is much better when you are living in the present moment"',
'"If you cant find a way , create one!"',
'"Family and friendships are the two of the greatest facilitators of happiness"',
'"Every saint has a past, and every sinner has a future"',
'"Smile, life is too short to be unhappy"',
'"If you cant explain it simple, you dont understand it well enough"',
'"A flower blossoms for its own joy"',
'"Dream without fear, love without limits"',
'"A dream is what makes people love life even when it is painful"'
];
var quodiv= document.getElementById('ran_quotes_id');
console.log('started');
window.addEventListener('load', function(){
  console.log('loaded');
  quodiv.innerHTML= '<p>'+quotes[Math.floor(Math.random()*quotes.length)]+ '</p>';
})