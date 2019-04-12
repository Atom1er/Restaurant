$(document).ready(function () {
    var order = [];
    var plat_dibi = ["Dibi"];
    var plat_riz = ["Riz"];
    var plat = [];

    function state(state, menu) {

        if (state === 'hide') {
            menu.css('display', 'block');
            menu.attr('data-state', 'showed');
            $('#place-order-btn').css('display', 'block');
        } else if (state === 'showed') {
            menu.css('display', 'none');
            menu.attr('data-state', 'hide');
        };
    }


    $('.dibi').on('click', function () {
        var menuList = $("#dibi-side");
        var status = $('#dibi-side').attr('data-state');
        state(status, menuList);
    });

    $('.rice').on('click', function () {
        var menuList = $("#rice-side");
        var status = $('#rice-side').attr('data-state');
        state(status, menuList);
    });



    $(".side-element").on('click', function () {
        var value = $(this).siblings('input').attr('value');
        var selected = $(this).siblings('input').attr('data-selected');
        var plat_name = $(this).parent().parent().prev().prev().attr('value');

        console.log('Plat Name: ' + plat_name);

        if (selected === 'false') {
            if (plat_name === 'Dibi') {
                plat_dibi.push(value);
                console.log(plat_dibi);
            } else if (plat_name === 'Rice') {
                plat_riz.push(value);
                console.log('After Pushing: ' + plat_riz);
            }

            $(this).siblings('input').attr('data-selected', 'true');


        } else if (selected === 'true') {
            // console.log('selected: ' + selected);
            if (plat_name === 'Dibi') {
                for (var i = 0; i < plat_dibi.length; i++) {
                    if (value === plat_dibi[i]) {
                        plat_dibi.splice(i, 1);
                        console.log('After slicing DIBI: ' + plat_dibi);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            } else if (plat_name === 'Riz') {
                for (var i = 0; i < plat_riz.length; i++) {
                    if (value === plat_riz[i]) {
                        plat_riz.splice(i, 1);
                        console.log('After slicing RIZ: ' + plat_riz);
                    }
                }
                $(this).siblings('input').attr('data-selected', 'false');
            }
        }
    });



    $("#place-order-btn").on('click', function () {
        var dibi_valid = true;
        var riz_valid = true;
        if (plat_dibi.length > 1) {
            var meal0 = plat_dibi[0];
            plat_dibi.shift();
            let side0 = "- ";
            plat_dibi.forEach(element => {
                side0 += element + " - "
            });
            console.log(side0);
            var dibi_order = {
                meal: meal0,
                side: side0
            }
            dibi_valid = true;
        } else{
            dibi_valid = false;
        }
        if (plat_riz.length > 1) {
            var meal1 = plat_riz[0];
            plat_riz.shift();
            var side1 = "- ";
            plat_riz.forEach(element => {
                side1 += element + " - "
            });
            var riz_order = {
                meal: meal1,
                side: side1
            }
            riz_valid = true;
        } else{
            riz_valid = false;
        } 


        if (!dibi_valid && !riz_valid) {
            alert('Please select an accompaniments!')
        }else{
            var item = {
                order_1 : dibi_order,
                order_2 : riz_order
            }
            // console.log(order);
            orderPlace(item);
        }

    });

    function orderPlace(elem) {

        $.ajax({
            method: "POST",
            url: "/api/newOrder",
            data: elem
          })
            .done(function( msg ) {
              alert(msg);
            });
    }
});