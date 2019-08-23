const express = require('express');
const app = express();
 
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
 
app.listen(3000, () => {
    console.log('Listen to 3000')
});