const express = require('express')
const { getBrands } = require('../../controllers/BrandsController')

const router = express.Router()

router.get('/', getBrands)

module.exports = router