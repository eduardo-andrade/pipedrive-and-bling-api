const axios = require('axios');

//function to connect in API of Pipedrive and get the oportunities with status "won"

const getWonSales = async () => {
  try {
    const wonSales = await axios.get('https://companydomain.pipedrive.com/api/v1/deals/', {
      params: {
        api_token: process.env.PIPEDRIVE_TOKEN,
        status: 'won',
      },
      
    });
    return wonSales.data.data;
  } catch (err) {
    return res.status(400).send({error: 'Pipedrive wont connected'});
  }
};

module.exports = getWonSales;