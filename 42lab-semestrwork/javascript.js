$(function(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        let language = localStorage.getItem("lastLanguage");
        if (language === "eng"){
            $data_tooltip1 = $(this).attr("data-tooltip1");
            $("#tooltip").html($data_tooltip1)
                .css({
                    "top" : eventObject.pageY + 5,
                    "left" : eventObject.pageX + 5
                })
                .show();
        }
        if (language === "rus"){
            $data_tooltip2 = $(this).attr("data-tooltip2");
            $("#tooltip").html($data_tooltip2)
                .css({
                    "top" : eventObject.pageY + 5,
                    "left" : eventObject.pageX + 5
                })
                .show();
        }
    }).mouseout(function () {
        $("#tooltip").hide()
            .html("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
});

function addToCart(nameId, priceId, image){
    let name = $('#'+nameId).text();
    let price = $("#"+priceId).text();
    let cart;

    if(window.localStorage.getItem('cart') !==null) {
        cart = JSON.parse(window.localStorage.getItem('cart'));
    } else {
        cart = {
            games: [],
            totalSum: 0
        }
    }
    let cartElem = {
        id: cart.games.length,
        name: name,
        price: price,
        image: image
    };
    cart.games.push(cartElem);
    cart.totalSum += parseFloat(price.split('₽')[0]);

    window.localStorage.setItem('cart',JSON.stringify(cart));
    alert("Игра была добавлена в корзину");
}

function clearCart(){
    window.localStorage.clear();
}
