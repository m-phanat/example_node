const router = require('express').Router()
const XLSX = require('xlsx')
const helper = require('../helper/helper')
const upload = require('../helper/upload')

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/upload', upload.single('file'), async (req, res) => {
  let pathname = req.body.filename
  var wb = XLSX.readFile(pathname)
  let name_ws = wb.SheetNames[0]
  var worksheet = wb.Sheets[name_ws]
  var json = XLSX.utils.sheet_to_json(worksheet)

  json.forEach(async (it) => {
    console.log(it)
  })

  helper.delete_file(pathname)
  res.json({
    status: 'success',
    data: json
  })
})

module.exports = router
