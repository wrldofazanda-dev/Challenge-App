const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
const PORT = process.env.PORT || 2500;
dotenv.config({ path: './config/config.env' });

// Use the cors middleware before your routes
app.use(cors());

// Import and use the route
const BrandRoutes = require('./routes/Brands/Companies');
app.use('/api/v1/brands', BrandRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
