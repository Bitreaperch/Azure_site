const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Redirections manuelles
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Démarrage
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
