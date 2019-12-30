//CB-005-Composite API
returnCode = {
  "returnCode": "success to logging"
};

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: '*',
};

const apiDomain = 'http://localhost:5000';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

var app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());


//CB-005-Composite API
app.post('/testlogging', function (req, res, next) {
  console.log('POST ' + apiDomain + '/testlogging');
  //req => 從logger 拋送過來的 json格式
  console.log(req.body);
  let levelLog = ['DEBUG', 'INFO', 'LOG', 'WARN', 'ERROR'];
  let logString = '';
  let level = '';

  //對json格式做資料處理
  if (req.body) {
    let component = req.body.additional[0].split(',')[0];
    let time = req.body.additional[0].split(',')[1];

    level = levelLog[req.body.level - 1];
    logString = `[${time}][${level}][${component}] ${req.body.message}`
  }

  //分類錯誤log以及一般log的存放資料
  if (level == 'ERROR') {
    fs.appendFile(`${'log' + '/' + new Date().getFullYear() + '_' + (new Date().getMonth() + 1) + '_' + new Date().getDate()}_ERROR.log`, `${logString + '\n'}`, function (err) {
      if (err)
        console.log(err);
      else
        console.log('Append operation complete.');
    });
  } else {
    fs.appendFile(`${'log' + '/' + new Date().getFullYear() + '_' + (new Date().getMonth() + 1) + '_' + new Date().getDate()}.log`, `${logString + '\n'}`, function (err) {
      if (err)
        console.log(err);
      else
        console.log('Append operation complete.'); 
    });
  }

  res.json(returnCode);
});

//開啟port
app.listen(5000); //dedault port
console.log('Node.js web server at port 5000 is running..')
