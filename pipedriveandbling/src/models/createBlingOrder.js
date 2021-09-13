const jsonToXml = require('js2xmlparser').parse;

async function convertJsonToXml(pipedriveJson) {
  const order = {
    pedido: [
      {
        cliente: {
          nome: pipedriveJson.creator_user_id.name,
          email: pipedriveJson.creator_user_id.email,
        },
        items: {
          item: {
            codigo: 1,
            descricao: 'Item',
            vlr_unit: pipedriveJson.value,
          },
        },
      },
    ],
  };

  return jsonToXml('pedido', order);
}

module.exports = convertJsonToXml;