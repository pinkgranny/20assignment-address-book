import express from "express"
// import bodyParser from "body-parser"

const app = express()
// app.use(bodyParser.urlencoded({ extended: true }))
// app. use(bodyParser.json())

app.get("/", (req, res) =>
  res.send("Hello World!")
)

const db = require("./contacts.json")

app.get("/contacts", (req, res) => {
  res.json({db})
  console.log(db)
})

app.get("/contacts/:id", (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id);
  const oneContact = db.contacts.find(item => item.id === id)
  console.log(oneContact)
  if (oneContact){
    res.send(oneContact)
      // }
      // else if {
      //   (("/contacts" !== "/contacts"), (req, res)) => {
      //     res.json({db})}
  } else {
    res.status(404)
    res.send("404 not found")}

})


// app.post("/contacts", (req, res) => {
//   const contacts = require("./contacts.json")
// })

app.listen(8081, () =>
  console.log("Example app listening on port 8081!")
)
