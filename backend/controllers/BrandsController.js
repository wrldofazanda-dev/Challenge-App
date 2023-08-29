const { companies } = require('../models'); 

exports.getBrands = async (req, res) => {
    try {
        const brands = await companies.findAll(); 
        
        return res.status(200).json({
            success: true,
            message: 'Brands Fetched Successfully!',
            data: brands
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'Error fetching brands',
            error: err.message
        });
    }
};
