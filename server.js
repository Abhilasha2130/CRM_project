const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const customerRoutes = require('./routes/customerRoutes');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
