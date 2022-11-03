const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

const port = 5000

//1. connect to database
mongoose.connect('mongodb://localhost:27017/ChoiceNovelDB')
//2. make a schema
const bookSchema = new mongoose.Schema({
    content: String,
    choices: Array
})

const book_title_schema = mongoose.Schema({
    name: String,
    summary: String
})
//3. make a model using the schema
const Book_title = mongoose.model('book_title', book_title_schema)
const Book = mongoose.model('book', bookSchema)




app.route('/api').get(
    //send the list of existing books
    function (req, res) {
    Book_title.find(function (err, book_title) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(book_title)
            res.send(book_title)

        }
    })
}).post(
    function(req,res){
        const title = req.body.title
        const summary = req.body.summary
        const new_book = {
            title: title,
            summary: summary
        }
        console.log(title,summary)
        //have not created new link page, will update react side to include new page content
        Book_title.create(new_book,function(err){
            if(err){
                console.log("create book error: ", err)
            }
        })
    }
)


//send the page of book corresponding to id
app.route('/api/:bookName/:id').get(
    function (req, res) {
        const id = req.params.id
        //if it is first page

        console.log({ id })

        Book.findById(id, function (err, page) {
            if (page) {
                res.send(page)
            }
            else (
                console.log(err)
            )

        })


    }).post( //create a new choice for current page
        function (req, res) {
            const choice = req.body.choice
            const result = req.body.result
            const current_page_id = req.params.id
            console.log(result)
            res.send('hello recieve post')
            const new_page = {
                content: result,
                choices: []
            }
            Book.create(new_page, function (err, page) { //create a new page
                if (err) {
                    console.log(err)
                }
                else { //after creating the page, add the id of new page to current page
                    const new_id = page.id
                    Book.updateOne(
                        { _id: current_page_id },
                        { $push: { choices: { choice: choice, link: new_id } } },
                        function (err) {
                            if (err) {
                                console.log(err)
                            }
                        }
                    )

                }
            })
        }
    );




app.listen(port, () => console.log(`Example app listening on port ${port}!`))