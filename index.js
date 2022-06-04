const express = require("express");
const { json } = require("express/lib/response");
const midelware=require('./Midleware')
const app = express();
///midelware global
app.use(express.json());
const port = 6000;
//run the server
app.listen(port, (error) => {
  if (error) {
    console.log("server failed");
  } else {
    console.log(`server is running on port ${port} `);
  }
});

const users = [
  { id: 0, name: "ameur", age: 23 },
  { id: 1, name: "ines", age: 22 },
];
//with no body

app.get("/users",midelware, (req, res) => {
  res.status(200).json({ users });
});
//post ===>body
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(200).json({ users });
});
// body/params
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  const updatedUsers = users.map((elt) => {
    if (elt.id == id) {
      return updatedUser;
    } else {
      return elt;
    }
  });
  res.status(200).json({ updatedUser });
});
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((elt) => elt.id == id);
  if (foundUser) {
    const usersAfterDelete = users.filter((elt) => elt.id != id);
    res
      .status(200)
      .json({ msg: "sucessfully deleted", usersAfterDelete: usersAfterDelete });
  } else {
    res.status(400).json({ msg: "not found" });
  }
});
