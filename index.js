require('dotenv').config()
var cors = require('cors')
var { I } = require('ipfsio')
var express = require('express')
var app = express()
var i = new I(process.env.NFT_STORAGE_KEY)
app.use(express.json())
app.use(express.static('public'))
app.use(cors({
  origin: process.env.WHITELIST.split(",")
}))
app.use(express.urlencoded({ extended: true }));
app.post('/add', async (req, res) => {
  let cid;
  if (req.body.url) {
    cid = await i.url(req.body.url)
  } else if (req.body.object) {
    cid = await i.object(req.body.object)
  }
  console.log("cid", cid)
  res.json({ success: cid })
})
app.listen(process.env.PORT)
