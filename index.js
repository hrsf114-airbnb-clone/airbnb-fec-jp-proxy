const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 9001;

app.use(morgan('dev'));
app.use('/rooms/:id/', express.static(path.join(__dirname, 'public')));

app.get('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  console.log('getting julians bundle');
  const url = `http://ec2-3-81-67-143.compute-1.amazonaws.com//api/bookings/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => res.end());
});
app.get('/api/listing/:id', (req, res) => {
  const { id } = req.params;
  console.log('getting victorias bundle');
  const url = `http://ec2-34-215-220-186.us-west-2.compute.amazonaws.com/api/listing/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => res.end());
});
app.get('/api/photos/:id', (req, res) => {
  const { id } = req.params;
  console.log('getting evans bundle');
  const url = `http://ec2-54-215-239-201.us-west-1.compute.amazonaws.com/api/photos/${id}`;
  axios.get(url)
    .then(response => res.send(response.data))
    .catch(err => res.end());
});

app.listen(port, () => (console.log('ayo this yo proxy. we good over here on port', port)));