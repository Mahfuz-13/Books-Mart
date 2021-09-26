import React from 'react';
// Importing Forn Awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBook } from '@fortawesome/free-solid-svg-icons'
import './Book.css'
const Book = (props) => {
    const {name,image,author,language,published,price} = props.book;
    const icon = <FontAwesomeIcon icon={faBook} />
    return (
        <div className ="book-container">
            <img src={image} alt="" />
            <h6>Name : {name}</h6>
            <p>By : {author}</p>
            <p>Language : {language}</p>
            <p>First published on : {published}</p>
            <p>Price : {price}$</p>
            <button  icon="coffee" onClick ={ () =>props.handleAddToCart(props.book)} type="button" className="btn btn-dark"> {icon} Add</button>

        </div>
    );
};

export default Book;