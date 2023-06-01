import express from "express";

const app = express();

//! Setting up view engine
app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.render("index",{name:"Pallab Majumdar",age:"23"})
})

app.listen(3001, () => {
  console.log("Server started");
});
