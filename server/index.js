const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use('/:id', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('PROXY SERVER listening on port: ', PORT);
});
