
        <script>
          $(document).ready(function(){
            const dateToday = new Date();
            const getStartDate = new Date("Mon Feb 13 2023");
            const getEndDate = new Date("Mon Feb 27 2023");
            if (dateToday >= getStartDate && dateToday <= getEndDate) {
                $('#bannerslider, #bannersliderweb, #ham-promo, #oth-slider').prepend("<li promo-value='' id='promo-hp'><b></b><span>Copy Code:</span> <span class='code-value'></span></li>");  
                $('body').addClass('hasActivePromotion');
                $('.heroCarouselOuter.blankBanner').remove();
                setTimeout(function() {            
                    $('.heroCarouselOuter.activePromo').css({"opacity":"1","color":"white"});
                }, 100);
            }
            else {
                $('body').addClass('noActivePromotion');
                $('.heroCarouselOuter.blankBanner').remove();
                setTimeout(function() {            
                    $('.heroCarouselOuter.staticNoPromo').css({"opacity":"1","color":"white"});
                }, 100);
            }
            $(document).on('click', '#promo-hp', function(){
                var value = $(this).attr('promo-value');
                navigator.clipboard.writeText(value).then(() => {
                    $('.bubble').remove();
                    $('body').append("<div select-products='no' class='bubble'>Code Copied: " + value + "<span><a href='https://www.prioritytire.com/deals/promo-deal-tires/'>check eligibility</a></span></div>");
                    setTimeout(function() {
                        $('.bubble').remove();
                    }, 3500);
                });
            });
          });
        </script>
      