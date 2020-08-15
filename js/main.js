


$(document).ready(function(){

      $(".slide-one").owlCarousel({
  
            loop:true, //Зацикливаем слайдер
            items: 1,
            //Отступ от картино если выводите больше 1
            touchDrag: true,
            nav:false, //Отключил навигацию
            autoplay:true, //Автозапуск слайдера
            dots: true,
            smartSpeed:3000, //Время движения слайда
  
            autoplayTimeout:5000, //Время смены слайда

            responsive:{ //Адаптация в зависимости от разрешения экрана
  
                0:{
   
                    items:1
  
                },
    
                600:{

                    items:1
   
                },
 
                1000:{
  
                    items:1

                }
 
            }
    
        });
  
     

        $(".slide-two").owlCarousel({
    
            loop:true, //Зацикливаем слайдер
            items: 1,
            margin:0, //Отступ от картино если выводите больше 1
            touchDrag: true,
            nav:false, //Отключил навигацию

            autoplay:true, //Автозапуск слайдера

            smartSpeed:2000, //Время движения слайда
   
            autoplayTimeout:4000, //Время смены слайда
   
            responsive:{ //Адаптация в зависимости от разрешения экрана
   
                0:{
  
                    items:1
   
                },
  
                600:{
 
                    items:1

                },
   
                1000:{

                    items:1
   
                }
 
            }
 
        });
  
    });

    $(".slide-three").owlCarousel({
  
        loop:true, //Зацикливаем слайдер
         //Отступ от картино если выводите больше 1
        dots: true,
        touchDrag: true,
        nav:false, //Отключил навигацию
        autoplay:true, //Автозапуск слайдера
        lazyLoad: false,
        smartSpeed:3000, //Время движения слайда
        autoplayTimeout:5000, //Время смены слайда

        responsive:{ //Адаптация в зависимости от разрешения экрана

            0:{

                items:1,
                stagePadding: 0,

            },

            600:{

                items:1,
                stagePadding: 0,

            },

            800: {
                items:2,
                stagePadding: 0,
                
            },

            1000:{
               
                items:2,
                stagePadding: 24,
               

            },

            1200: {
                stagePadding: 24,
                items:2,
            },

            2000: {
                items: 3,
                stagePadding: 24,
                
            }

        }

    });
    