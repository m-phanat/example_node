const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    cb(null, 'import-data.xlsx')
  }
})

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('excel') || file.mimetype.includes('spreadsheetml')) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only excel file format allowed!'))
    }
  }
})

module.exports = upload
