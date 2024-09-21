const express = require('express');
const app = express();
app.use(express.json());

// Sample data (this could be replaced by a database or API in real-world)
const busRoutes = [
   { location: 'Majestic', destination: 'Whitefield', buses: ['335E', '500C'] },
   { location: 'Koramangala', destination: 'Electronic City', buses: ['356C', '500K'] },
   { location: 'Indiranagar', destination: 'Hebbal', buses: ['201B', '290'] },
];

// Endpoint to handle form submission and find bus routes
app.post('/find-bus', (req, res) => {
   const { location, destination } = req.body;

   const route = busRoutes.find(route => route.location === location && route.destination === destination);

   if (route) {
      res.json({ buses: route.buses });
   } else {
      res.json({ buses: [] }); // No bus found
   }
});

// Serve the static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
   console.log('Server running on http://localhost:3000');
});
