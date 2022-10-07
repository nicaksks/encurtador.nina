const mongoose = require("mongoose");

module.exports = function dbConnect() {
  mongoose.connect(process.env.DB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => {
    console.log('Banco de dados online.');
  })
  .catch((e) => {
    console.log('Ocorreu um problema na conexão do banco de dados.')
  });
};
