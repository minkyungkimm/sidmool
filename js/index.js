$(document).ready(function(){
    const ww = $(window).width();
    media();
    function media(){
        if(ww >= 759){
            $('#menu_wrap').click(function(){
                $('.sub_menu').slideToggle();
            });
            
            // 배너갤러리
            let click_num=0;
            let auto;
            const imgBox = $('.img_box');

            $('.circle').hover(function(){
                clearInterval(auto);
            },function(){
                time();
            }).click(function(){
                click_num=$(this).index();
                imgMove();
            });

            function imgMove(){
                $('.img_box').stop().fadeOut(500);
                $('.img_box').eq(click_num).stop().fadeIn(500);
                $('.circle').removeClass('on');
                $('.circle').eq(click_num).addClass('on');
            }
            function time(){
                auto=setInterval(function(){
                    click_num++;
                    if(click_num>imgBox.length-1){
                        click_num=0;
                    }
                    $('.circle').eq(click_num).trigger('click');
                },2000);
            }
            time();
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                slidesPerGroup: 1,
                loop: true,
                navigation: {
                nextEl: ".e_but_next",
                prevEl: ".e_but_prev",
                },
            });

            var swiper = new Swiper(".mySwiper2", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
                navigation: {
                nextEl: ".next_but",
                },
            });


            // //자동갤러리
            let e_auto;
            function e_time(){
                e_auto=setInterval(function(){
                    $('#e_next').trigger('click');
                },2000);
            }
            e_time();
            $('.but').hover(function(){
                clearInterval(e_auto);
            },function(){
                e_time();
            });

            $(window).scroll(function(){
                $('#but_top').click(function(){
                    $('html,body').stop().animate({
                        scrollTop:0
                    },300);
                });
            });

            $('#for_m').click(function(){
                $(this).toggleClass('on');
                if($('.menu-bar-box').hasClass('active')){
                    $('.menu-bar-box').removeClass('active');
                }else{
                    $('.menu-bar-box').addClass('active');
                }
            });
        }else{
            let click_num=0;
            let auto;
            const imgBox = $('.img_box');

            $('.circle').hover(function(){
                clearInterval(auto);
            },function(){
                time();
            }).click(function(){
                click_num=$(this).index();
                imgMove();
            });

            function imgMove(){
                $('.img_box').stop().fadeOut(500);
                $('.img_box').eq(click_num).stop().fadeIn(500);
                $('.circle').removeClass('on');
                $('.circle').eq(click_num).addClass('on');
            }
            function time(){
                auto=setInterval(function(){
                    click_num++;
                    if(click_num>imgBox.length-1){
                        click_num=0;
                    }
                    $('.circle').eq(click_num).trigger('click');
                },2000);
            }
            time();
            $(window).scroll(function(){
                $('#but_top').click(function(){
                    $('html,body').stop().animate({
                        scrollTop:0
                    },300);
                });
            });
            $('#for_m').click(function(){
                $(this).toggleClass('on');
                if($('.menu-bar-box').hasClass('active')){
                    $('.menu-bar-box').removeClass('active');
                }else{
                    $('.menu-bar-box').addClass('active');
                }
            });
        }
}




});//ends