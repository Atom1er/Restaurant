const Nexmo = require('nexmo');
module.exports = function (app, menu) {
    app.get('/api/menu', function(req, res){
        res.send(menu);
    });
    app.get('/api/newOrder', function (req, res){

        const nexmo = new Nexmo({
            apiKey: 'b3ca8485',
            apiSecret: 'rrMO2lrtVDjw1dGu'
        })

        const from = '18032050565'
        const to = '19733426360'
        const text = 'Test From actual website'

        nexmo.message.sendSms(from, to, text)
    })
}