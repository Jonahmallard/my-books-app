const Book = require('../../models/book');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne
};

async function index(req, res) {
    const books = await Book.find({}).populate('user').exec();
    res.status(200).json(books);
}

async function create(req, res) {
    req.body.user = req.user._id
    const book = await Book.create(req.body);
    res.status(201).json(book);
}

async function show(req, res) {
    const book = await Book.findById(req.params.id)
    res.status(200).json(book);
}

async function update(req, res) {
    const updatedBook = await Book.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, req.body, {
        new: true
    });
    res.status(200).json(updatedBook);
}

async function deleteOne(req, res) {
    const deletedBook = await Book.findOneAndRemove({ _id: req.params.id, user: req.user._id });
    res.status(200).json(deletedBook);
}