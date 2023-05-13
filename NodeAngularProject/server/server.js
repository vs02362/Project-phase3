const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];

app.use(bodyParser.json());
app.use(express.static("C:/shikha/Training/Training_Material/SimpliLearn/phase3/Mean_Trainer_May/MyMayDocssessionWise/Sun_22_may_2022/NodeAngApp1_Prod/UsersListApp/UsersList/dist/UsersList/"));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user added");
});

app.get('/', (req,res) => { 
  res.sendFile("C:/shikha/Training/Training_Material/SimpliLearn/phase3/Mean_Trainer_May/MyMayDocssessionWise/Sun_22_may_2022/NodeAngApp1_Prod/UsersListApp/UsersList/dist/UsersList/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
