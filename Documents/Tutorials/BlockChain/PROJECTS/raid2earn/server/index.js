const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});