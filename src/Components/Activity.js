import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Activity = () => {
  const { activities } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activity = activities.find((activity) => activity.id === id);

  if (!activity) return <h1>...loading</h1>;

  return (
      <div>
        <div id="activity_info">
          {/* <img src={book.imageUrl} className="book_page_img" alt="Book cover" /> */}
            <h4>{activity.title}</h4>
            <p>${book.price}</p>
            <p>{book.description}</p>
            <AddToCart />
            {auth.isAdmin ? (
              <Link to={`/books/${book.id}/edit`}>Edit Book Info</Link>
            ) : null}
            <br></br>
            {auth.isAdmin ? (
              <button onClick={() => destroyBook()}>Delete Book</button>
            ) : null}
          
        </div>
        <div className='arrow'>
          <Link to="/books">
            <BsArrowLeft size={30} />
            <>Back</>
          </Link>
        </div>
        <div className='book_reviews'>
          <Review id={book.id} book={book.title} />
          {auth.id ? <CreateReview id={book.id} book={book.title} /> : null}
        </div>
        <div className='book_recs'>
        <Recs book={book.id} genre={book.genre} />
        </div>
      </div>
  );
};

export default Book;
