$(function(){

    const initOwlInstagram = function(){

        let owlFeedInstagram = $('.owl-instagram');
        owlFeedInstagram.owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
            items: 4,
            responsive:{
                0:{
                    items:1,
                    dots: true
                },
                600:{
                    items:4,
                    dots: true
                }
            }
        });

        let botaoOwlFeedInstagram = $(".botao-owl-feed-instagram");
        botaoOwlFeedInstagram.on('click', function(){
            if( $(this).hasClass('botao-next') ){
                owlFeedInstagram.trigger('next.owl.carousel');
            }else{
                owlFeedInstagram.trigger('prev.owl.carousel');
            }
        });
    }

    const initOwlProdutosVistos = function(){

        let owlProdutosVistos = $('.owl-produtos-vistos');
        owlProdutosVistos.owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
            items: 5,
            responsive:{
                0:{
                    items:1,
                    dots: true
                },
                600:{
                    items:4,
                    dots: true
                }
            }
        });

        let botaoOwlProdutosVistos = $(".botao-owl-produtos-vistos");
        botaoOwlProdutosVistos.on('click', function(){
            if( $(this).hasClass('botao-next') ){
                owlProdutosVistos.trigger('next.owl.carousel');
            }else{
                owlProdutosVistos.trigger('prev.owl.carousel');
            }
        });
    }

    initOwlInstagram();
    initOwlProdutosVistos();

    $('.btn-sacola').on('click', function(e){
        e.preventDefault();
        $('.box-cesta').toggle();
    });

    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
        $('.mini-menu').toggleClass('ativo');
    });

    let cores = $('.cores-detalhe-produto');
    cores.on('click', 'a', function(e){
        e.preventDefault();

        let dataCor = $(this).attr('data-cor');
        let txt = $('.cores-detalhe-produto').children('p').find('strong');
        
        $('.cores-detalhe-produto a').removeClass('ativo');
        $(this).addClass('ativo');
        txt.text(dataCor);
    });

    let thumbsProdutoDetalhe = $('.detalhe-produto .thumbs .item');
    thumbsProdutoDetalhe.on('click', 'a', function(e){
        e.preventDefault();

        $('.detalhe-produto .thumbs .item').removeClass('ativo');
        $(this).parent().addClass('ativo');
        
    });
});