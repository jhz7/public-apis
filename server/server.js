const express = require('express');
const app = express();
 
app.get('/colombian-festival-days', function (_, res) {
  const festiveDays = require('../assets/colombian-festival-days.json')
  res.json(festiveDays)
});

app.get('/increase-percentage-by-kind-of-worked-hour', function (req, res) {
  const festiveDays = require('../assets/increase-percentage-by-kind-of-worked-hour.json')
  res.json(festiveDays)
});

app.get('/colombian-start-end-nocturnal-schedule', function (req, res) {
  const festiveDays = require('../assets/start-end-nocturnal-schedule.json')
  res.json(festiveDays)
});
 
app.listen(3000, () => {
    console.log('Escuchando puerto 3000')
});