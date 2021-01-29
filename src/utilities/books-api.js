import sendRequest from './send-request';

const BASE_URL = '/api/books';

export function getAll() {
    return sendRequest(BASE_URL);
}

export function create(book) {
    return sendRequest(BASE_URL, 'POST', book);
}

export function update(book) {
    return sendRequest(`${BASE_URL}/${book._id}`, 'PUT', book);
}

export function deleteOne(bookID) {
    return sendRequest(`${BASE_URL}/${bookID}`, 'DELETE');
}



