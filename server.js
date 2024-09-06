const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();  

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us', 
                category: 'technology',  
                apiKey: process.env.c559126b72764d3ab83d5ff14c82de64  
            }
        });
        res.json(response.data.articles);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ message: 'Error fetching news' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
