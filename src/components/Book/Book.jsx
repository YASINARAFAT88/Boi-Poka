import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {bookName, author, image, tags, category, bookId} = book
    return (
        <Link to={`books/${bookId}`}>
        <div className="card bg-base-100 w-96  shadow-sm">
  <figure>
    <img
      src={image} className='h-[166px]' />
  </figure>
  <div className="card-body">
    <div className='flex justify-center gap-2'>
        {
            tags.map(tag => <button className="btn btn-xs">{tag}</button>)
        }
    </div>
    <h2 className="card-title ">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p className=''>By: {author}</p>
    <div className='border-t-2 border-dashed mb-3'></div>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
      <div>
        <div className="rating">
  <div className="mask mask-star" aria-label="1 star"></div>
  <div className="mask mask-star" aria-label="2 star"></div>
  <div className="mask mask-star" aria-label="3 star" aria-current="true"></div>
  <div className="mask mask-star" aria-label="4 star"></div>
  <div className="mask mask-star" aria-label="5 star"></div>
</div>
      </div>
    </div>
  </div>
        </div>
        </Link>
    );
};

export default Book;