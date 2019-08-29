const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
 
app.get('/holiday-days', function (req, res) {

  const countryCode = req.query.code
  const festiveDays = require('../assets/colombian-holiday-days.json')
  res.json(festiveDays)
});

app.get('/increase-by-kind-of-worked-hour', function (_, res) {
  const festiveDays = require('../assets/increase-by-kind-of-worked-hour.json')
  res.json(festiveDays)
});

app.get('/colombian-nocturnal-schedule', function (_, res) {
  const festiveDays = require('../assets/start-and-end-nocturnal-schedule.json')
  res.json(festiveDays)
});
 
app.listen( port, () => {
    console.log( `Listen to ${port}`)
});