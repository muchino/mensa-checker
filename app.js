const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();
const PORT = process.env.PORT || 8092; // IMPORTANT: use EB port

function formatDate(d) {
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}.${mm}.${yyyy}`;
}

async function fetchMenu(date) {
    const url = 'https://www.stw-thueringen.de/xhr/loadspeiseplan.html';
    const resourcesId = '46';
    const targetDate = date || formatDate(new Date());

    const resp = await axios.post(
        url,
        new URLSearchParams({ resources_id: resourcesId, date: targetDate }).toString(),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );

    const $ = cheerio.load(resp.data);
    const meals = [];
    $('.mealText').each((i, el) => meals.push($(el).text().trim()));

    return { resourcesId, date: targetDate, meals };
}

app.get('/', (req, res) => res.send("Mensa Checker API is running"));

app.get('/menu', async (req, res) => {
    try {
        const result = await fetchMenu(req.query.date);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
