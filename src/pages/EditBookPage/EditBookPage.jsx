import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

export default function EditBookPage(props){
  const location = useLocation()
  const [invalidForm, setInvalidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.book)
  const formRef = useRef();

  useEffect(() => {
      formRef.current.checkValidity() ? setInvalidForm(false) : setInvalidForm(true)
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateBook(formData);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Edit Book</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book's Title</label>
          <input
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Book's Author</label>
          <input
            className="form-control"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Book's Description</label>
          <input
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-xs"
          disabled={invalidForm}
        >
          SAVE BOOK
        </button>&nbsp;&nbsp;
        <Link to='/'>CANCEL</Link>
      </form>
    </>
  );
}




