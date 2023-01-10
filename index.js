const express = require('express')
const app = express()
const DOTENV=require("./config/default")
const DB= require("./utilities/db")
const tableRoutes = require("./routes/tableRoutes")
const invoiceRoutes = require("./routes/invoiceRoutes")
const foodRoutes = require("./routes/foodRoutes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use("/table",tableRoutes)

app.use("/invoice",invoiceRoutes)

app.use("/food",foodRoutes)

app.listen(DOTENV.PORT, () => {
  console.log(`Example app listening on port ${DOTENV.PORT}, URL:${DOTENV.URL}`)
})