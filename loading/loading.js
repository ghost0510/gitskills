var w = 0;
var timer2;
var timer;
timer = setInterval((function(){
    $('.bar').css('width',w + '%');
    w += 1;
    if(w > 100){
        $('.loadingPage').addClass('complete');
        setTimeout((function(){
            $('.monsterText').html('<h1>We are<br>SQUARE<br>MONSTER!<br></h1><h3>Ahhhh We will eat you</h3>')

        }),3000);
    clearInterval(timer);
    }
}),30);

    

