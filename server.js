const express = require('express');
const app = express();

app.get('/busfinder', (req, res) => {
    const { from, to } = req.query;
    if (from === 'Indiranagar' && to === 'Hebbal') {
        res.json({ busNumbers: [201, 202, 333] });
    } else {
        res.status(404).json({ error: 'No bus found' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
