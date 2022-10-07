const express = require('express');
const dbConnect = require('./src/sql/dbConnect');
const url = require('./src/schemas/url');
const path = require('path');
require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const s = await url.find();
  res.render("index", { s: s });
})

app.post('/shortUrls', async (req, res) => {
  await url.create({ full: req.body.fullUrl });
  res.redirect('/');
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await url.findOne({ short: req.params.shortUrl });
  if(shortUrl == null) return res.sendStatus(404);

  shortUrl.save();

  res.redirect(shortUrl.full);
})

app.listen(port, () => {
  console.log(`Encurtador de URL da Nina está online! \nPorta do servidor: ${port} \n`)
  dbConnect();
})
