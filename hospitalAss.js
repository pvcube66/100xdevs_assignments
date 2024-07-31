const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

let patients = [
  {
    id: 1,
    name: "sambuu",
    kidney: 1,
    health: "healthy but fax addict",
  },
];

//id,name,kidney,health

app.get("/details", (req, res) => {
  const id = req.query.id;
  let status = 0;
  for (let i = 0; i < patients.length; i++) {
    if (patients[i].id == id) {
      res.send(
        `name:${patients[i].name} , kidney:${patients[i].kidney} , health: ${patients[i].health} `
      );
      status = 1;
    }
    if (status == 0) {
      res.send("user not found");
    }
  }
});

app.post("/create", (req, res) => {
  const uid = req.query.id;
  const uname = req.query.name;
  const ukidney = req.query.kidney;
  const uhealth = req.query.health;
  const temp = {
    id: uid,
    name: uname,
    kidney: ukidney,
    health: uhealth,
  };
  patients.push(temp);
  res.send(patients);
  res.send(patients);
});

app.put("/update", (req, res) => {
  const uid = req.query.id;
  const ukidney =(req.query.kidney);
  const uhealth = req.query.health;
  let status = 0;
  for (let i = 0; i < patients.length; i++) {
    if (patients[i].id == uid) {
      patients[i].kidney = ukidney; 
      patients[i].health = uhealth;
    //   console.log(patients)
      res.send(patients[i].kidney);
      status = 1;
    }
    if (status == 0) {
    //   res.send("user not found");
    res.statusCode=403
    res.statusMessage="yo kidneys nice "
    res.send();

    }
  }
});

app.delete("/delete", (req, res) => {
  const id = req.query.id;
  let status = 0;
  for (let i = 0; i < patients.length; i++) {
    if (patients[i].id == id) {
      delete patients[i];
      res.send("user deleted from database succcessfully");
      status = 1;
    }
    if (status == 0) {
      res.send("user not found");
    }
  }
});

app.listen(port);
