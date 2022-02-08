const express = require('express');
const cors = require('cors');
const config = require('./config');

const router = require('./network/routes');
const port = config.port;

const app = express();
app.use(cors());
app.use(express.json());
router(app);

app.listen(port, () => {
  console.log(`Server listening in http://localhost:${port}`);
});
