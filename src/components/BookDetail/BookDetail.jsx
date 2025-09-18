import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData()
    const book = data.find(book => book.bookId === id)
    const { image, bookName } = book
    
    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id)
    }
    console.log(book)

    return (
        <div className="hero bg-base-200 min-h-screen w-3/4 flex items-center">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="w-36 max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="py-6">
                    </p>
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-primary">Mark as Read</button>
                    <button className="btn btn-secondary">Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;