const express=require("express");
const dotenv = require("dotenv");
const router=require("./routes/books.Route")

dotenv.config();
const app = express ();
//middleware
app.use(logger);

app.use(express.json());

//route
app.get("/",(req,res) => {
    res.send("welcome to our library stockpile")
})
//get all books
app.get("/books",(req,res)=>{
    res.json(books);
});































const PORT =process.env. PORT || 5000

app.listen(PORT,() =>
     console.log(`server is running on ${PORT}`))