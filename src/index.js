const app = require("express")();

app.get('/',(req,res)=>
res.json({message:'Docker is supposed to be easy'})
);

const port = process.env.PORT || 8080;
