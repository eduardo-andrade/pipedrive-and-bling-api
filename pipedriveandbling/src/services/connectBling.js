const axios = require('axios');

//function to connect on API Bling to create orders 

const saveBlingOrder = async (orderXml, res) => {
  try {
    const BlingOrder = await axios.post(
      'https://bling.com.br/Api/v2/pedido/json/',{},{
        params: {
          apikey: process.env.BLING_TOKEN,
          xml: orderXml,
        },
      }
    );
    return BlingOrder;
  } catch (err) {
    return res.status(400).send({error: 'Bling wont connected'});
  }
};

module.exports = saveBlingOrder;