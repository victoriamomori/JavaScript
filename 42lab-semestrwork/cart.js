document.body.onload = function () {
    console.log('start loading')
    loadCart();
}

function loadCart() {
    console.log('loading cart');
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    console.log(cart);
    if (cart !== null && cart.games.length > 0) {
        for (let i = 0; i < cart.games.length; i++) {
            let id = cart.games[i].id;
            let name = cart.games[i].name;
            let price = cart.games[i].price;
            let image = cart.games[i].image;
            console.log(name, price, image);
            document.getElementById("games").innerHTML += ("<div id=\"" + id + "\" class='Gameblock'>\n" +
                "        <div class=\"block\">\n" +
                "            <div class=\"box\">\n" +
                "                <div class=\"box-img well\">\n" +
                "                    <img style=\"border-radius: 5px\" src=\"" + image + "\" alt=\"\">\n" +
                "                </div>\n" +
                "                <div class=\"link\">\n" +
                "                    <a href=\"#\" class=\"fa fa-plus\">\n" +
                "                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"35\" height=\"35\" fill=\"currentColor\"\n" +
                "                             class=\"delete bi bi-x\" viewBox=\"0 0 16 16\" onclick='remove(" + id + ")'>\n" +
                "                            <path fill-rule=\"evenodd\"\n" +
                "                                  d=\"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z\"/>\n" +
                "                        </svg>\n" +
                "                    </a>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "            <p class=\"gameText\" id=\"game1\">" + name + "</p>\n" +
                "            <div class=\"priced\">\n" +
                "                <div class=\"price\">\n" +
                // "                    <p class=\"discount\">-50%</p>\n" +
                "                </div>\n" +
                "                <div class=\"price\">\n" +
                "                    <span class=\"price2\" id=\"price1\">" + price + "</span>\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "    </div>");
        }

        $("#totalSum").text(cart.totalSum);
    } else {
        console.log('no games')
        $("#gamesHeader").append(" у вас ещё нет игр");
        $("#totalSum").text('0');
    }
}

function remove(id) {
    $('#' + id).remove();
    let cart = JSON.parse(window.localStorage.getItem('cart'));
    for (let i = 0; i < cart.games.length; i++) {
        if(cart.games[i].id === id) {
            cart.totalSum -= parseFloat(cart.games[i].price.split('₽')[0]);
            cart.games.splice(i,1);
        }
    }
    $("#totalSum").text(cart.totalSum);6
    if (cart.games.length === 0) {
        $("#gamesHeader").append(" у вас ещё нет игр");
    }
    window.localStorage.setItem('cart',JSON.stringify(cart));
}
