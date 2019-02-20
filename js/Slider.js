   
    var slideWidth = 550;  //Ширина одного слайда
    var slideTimer;        //Интервал смены кадров


$('.viewport').hover(function(){
    clearInterval(sliderTimer);
},function(){
    sliderTimer=setInterval(nextSlide,3000);
});


    /*Устанавливаем ширину списка
    *равную произведению ширины одного слайда на общее кол-во слайдов
    *чтобы он вытянулся в одну строку*/
    $('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);
    /*задаем временной интервал*/
    sliderTimer=setInterval(nextSlide,3000);
    
/*функция, сменяющая слайды каждую секунду*/
function nextSlide(){
    var currentSlide=parseInt($('.slidewrapper').data('current'));  //определяем текущий слайд
    currentSlide++;  //увеличиваем его значение
    if(currentSlide>=$('.slidewrapper').children().length) //перематываем к началу, если слайд последний
    {
        currentSlide=0;   
    }
    /*передвигаем список и сохраняем значение текущего слайда*/
    $('.slidewrapper').animate({left: -currentSlide*slideWidth},550).data('current',currentSlide);
}