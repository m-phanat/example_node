const multer = require('multer')

const excelFilter = (req, file, cb) => {
  console.log(file)
  if (file.originalname.includes('.xls') || file.mimetype.includes('excel') || file.mimetype.includes('spreadsheetml')) {
    cb(null, true)
  } else {
    cb('Please upload only excel file.', false)
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    req.body.filename = file.originalname
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage, fileFilter: excelFilter })

module.exports = upload
