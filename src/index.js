// import express
const express = require("express")
const mongoose = require("mongoose")

const postRouter = require("./routes/postRoutes")
const { getPosts } = require("./controllers/postControllers")

const app = express()

app.use(express.json())

app.get("/", async (req, res) => {
    const posts = await getPosts()
    res.json({
        data: "Hello World!!"
    })
})

app.get("/hello", (req, res) => {
    res.json({
        data: "Another route named hello"
    })
})

app.use("/posts", postRouter)

app.listen(3000, async () => {
    console.log("Server started")
    // mongoose.connect("mongodb://127.0.0.1:27017/blog_db").then(() => {
    //     console.log("Database connected")
    // })
    await mongoose.connect("mongodb://127.0.0.1:27017/blog_db")
    console.log("Database connected")
})