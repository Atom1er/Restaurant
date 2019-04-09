$(document).ready(function(){
    $.ajax({
        method: 'GET',
        url: '/api/menu'
    }).then( function(data, status){
        //HTML checkboxe tag Beginning
        var checkboxe = '<div class="form-check">';
        checkboxe += '<input class="form-check-input" type="checkbox" value="" id="';
        //Middle
        var checkboxeMiddle = '"><label class="form-check-label" for="defaultCheck1">'
        //End
        var checkboxEnd = '</label></div>';
        //full tag = checkboxe + "id" + checkboxeMiddle + PlaceHolder + checkboxeEnd
        // console.log(data);
        console.log(data);
        var menu_div= $('<div  id="menu-div">');
        var ul = $('<ul>  id="menu-div-list"');
        var li = $("<li>");
        for(var i = 0; i < data.length; i++){
            const element = data[i][0];
            var h3 = $("<h3>");
            h3.append(element);
            
            li.append(h3);

            var plat = data[i];
            var plat_ul = $("<ul>");
            for (let j = 1; j < plat.length; j++) {
                var plat_side = $("<li>");
                plat_side.append(plat[j]);
                plat_ul.append(plat_side);
            }

            li.append(plat_ul);
            
            ul.append(li);
        }
        var place_order = $('<button id="place-order-btn" type="button" class="btn" >Place Order</button>');
        menu_div.append(ul, place_order);
        $('#menu-list').append(menu_div);
    });


});