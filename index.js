const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from DevBox Runner Demo!' });
});

// adding a comment here 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 
