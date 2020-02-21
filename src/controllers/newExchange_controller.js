const exchanges_model = require('../model/exchanges_model')

module.exports = {
    async init(req, res){
        let {name} = req.body
        let {apiKey} = req.body
        let {secretKey} = req.body

        let exchangeCreation = await exchanges_model.create({
            name:name,
            apiKey: apiKey,
            secretKey: secretKey
        })

        if(exchangeCreation.dataValues) return res.json({body: "exchange_created"})

        return res.json({body: "error_at_creation"})
    }
}