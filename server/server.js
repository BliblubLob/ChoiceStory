const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 5000

//1. connect to database
mongoose.connect('mongodb://localhost:27017/ChoiceNovelDB')
//2. make a schema
const bookSchema = new mongoose.Schema({
    content: String
})

const book_title_schema = mongoose.Schema({
    name: String,
    summary: String
})
//3. make a model using the schema
const Book_title = mongoose.model('book_title', book_title_schema)
const Book = mongoose.model('book', bookSchema)
//4. create new object using the model



//send the list of existing books
app.get('/api', function (req, res) {
    Book_title.find(function (err, book_title) {
        if (err) {
            console.log(err)
        }
        else {
            counter += 1
            console.log(book_title)
            res.send(book_title)

        }
    })
})


//send the first page of the specific book asked
app.route('/api/:bookName/:id').get(
    function (req, res) {
        const id = req.params.id
        //if it is first page
        if ( id == 0) {
            const bookName = req.params.bookName
            //get entry point (_id of page) from book title db
            Book_title.findOne({ name: bookName }, function (err, book) {
                //if the book exists, then look for the page in other db
                if (book) {
                    const entry = book.toObject().entry
                    Book.findById(entry, function (err, page) {
                        if (err) {
                            console.log(err)
                        }
                        else {
                            //send page object
                            console.log(page)
                            res.send(page)
                        }
                    })

                }

            })
        }
        else{
            console.log({id})
            
            Book.findById(id,function(err,page){
                if(page){
                    res.send(page)
                }
                else(
                    console.log(err)
                )

            })
        }


    }
);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))