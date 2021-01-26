const BASE_URL = '/api/books';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(book) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json());
}

export function update(book) {
    return fetch(`${BASE_URL}/${book._id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(book)
    })
    .then(res => res.json());
}

export function deleteOne(bookID) {
    return fetch(`${BASE_URL}/${bookID}`,{
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        }
    });
}



