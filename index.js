import express from "express";

const app = express();

app.get("/",(req,res)=>{
  res.sendStatus(200)
  res.json({
    success:true,
    data:["pallab","majumdar"]
  })
})

app.listen(3001, () => {
  console.log("Server started");
});
