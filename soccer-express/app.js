require('dotenv').config();
var cors = require('cors')
const express = require('express'); // import // 'express' : key, key는 패키지의 이름. 패키지는 package.json에 있음.
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
var corsOptions = {
  origin : 'http://localhost:3000',
  optionsSuccessStatus: 200
}
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e))
app.listen(port,() => {
  console.log({"현재 시간 : " : new Date().toLocaleString()})
})
// 여기까지는 Context

app.get('/', (req, res) => {
  res.json({"현재 시간 : " : new Date().toLocaleString()})
})

app.get('/api/now', cors(corsOptions), (req, res) => {
  res.json({"now" : new Date().toLocaleString()})
})

