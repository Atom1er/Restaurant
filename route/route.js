const Nexmo = require('nexmo');
module.exports = function (app, menu) {
    app.get('/api/menu', function(req, res){
        res.send(menu);
    });

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
            order +=  "\n"+element+"\n"+"Side : "+elem+"\n - - - - - - -\n";
        }
        console.log(order);
        const from = '18032050565';
        const to = '19733426360';
        const text = order;

        // nexmo.message.sendSms(from, to, text);
        res.send("Order Placed! Thank You for Choosing Burkindi Restaurant!");
    })
}