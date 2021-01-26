import React, { useState, useRef, useEffect } from 'react';

export default function AddBookPage(props){
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    author: 'Unknown',
    description: ''
  })
  
  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true);
  }, [formData]);
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddBook(formData);
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <>
      <h1>Add Book</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book's Title (required)</label>
          <input
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Book's Author (required)</label>
          <input
            className="form-control"
            name="author"
            value={ formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Book's Description</label>
          <input
            className="form-control"
            name="description"
            value={ formData.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn"
          disabled={invalidForm}
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
}