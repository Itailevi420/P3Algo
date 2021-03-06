const express = require('express');
const path = require('path');
const members = require('./members');

const app = express();

app.get('/api/members', (req, res) => res.json(members));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
