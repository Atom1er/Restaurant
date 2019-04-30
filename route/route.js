const Nexmo = require('nexmo');
module.exports = function (app, menu) {
    app.get('/api/menu', function(req, res){
        res.send(menu);
    });
    var confirmation_number = 100;
    app.post('/api/newOrder', function (req, res){

        const nexmo = new Nexmo({
            apiKey: 'b3ca8485',
            apiSecret: 'rrMO2lrtVDjw1dGu'
        });
        var orders = Object.entries(req.body);
        var meals = [];
        var sides = [];

        for (let i = 1; i < orders.length; i++) {
            const element = orders[i];
            var m = element[1].meal;
            meals.push(m);
            var s = element[1].side;
            sides.push(s);
        }
        // orders.forEach(element => {
           
        // });
        console.log("Req: "+orders[0]);
        var order = "New Order \n\n From:"+orders[0][1].name+"\n ("+orders[0][1].tel+")\n\n";
        for (let i = 0; i < meals.length; i++) {
            const element = meals[i];
            const elem = sides[i];
            order +=  "\n"+element+"\n"+"Side : "+elem;
        }
       
        order +=  "\n Order Number: "+confirmation_number+"\n - - - - - - -\n";
        console.log(order);
        const from = '18032050565';
        const to1 = '19733426360';
        const to2 = '18622371948';
        const text = order;

        nexmo.message.sendSms(from, to1, text);
        nexmo.message.sendSms(from, to2, text);
        res.send("Order Placed! \n Order Number: "+confirmation_number+"\n Please Saved this number for the pick up!\n\nThank You for Choosing Burkindi Restaurant!");
        confirmation_number++;
    })
}