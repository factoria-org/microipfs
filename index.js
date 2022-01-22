require('dotenv').config()
var cors = require('cors')
var { I } = require('ipfsio')
var express = require('express')
var app = express()
var i = new I(process.env.NFT_STORAGE_KEY)
const allowed = process.env.ALLOWED.split(",")
app.use(express.json())
app.use(express.static('public'))
if (allowed && allowed.length > 0) {
  app.use(cors({ origin: allowed }))
} else {
  app.use(cors())
}
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
