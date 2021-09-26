import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Main.css'

const Main = () => {
    const [books,setBooks] = useState([]);

    const [cart,setCart] = useState([]);
    // Fecting the data using useEffect
    useEffect(()=>{
        fetch('./books.JSON')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    const handleAddToCart =(book)=>{
        const newCart = [...cart ,book];
        setCart (newCart);
    }

    return (
        <div className ="main-container">
            <div className="books-container">
                {
                    books.map(book=><Book  key ={book.id} 
                        handleAddToCart={handleAddToCart} 
                        book = {book}>
                        </Book>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;