import ReviewCard from '../review-card/review-card';
import {Reviews } from '../../types/review';

type FilmReviewsProps = {
  reviews: Reviews;
}

function FilmReviews({reviews}: FilmReviewsProps): JSX.Element {

  const halfSize = Math.ceil(reviews.length / 2);
  const leftColumnReviews = reviews.slice(0, halfSize);
  const rightColumnReviews = reviews.slice(halfSize);

  return (
    <div className="film-card__reviews film-card__row">

      <div className="film-card__reviews-col">
        {leftColumnReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="film-card__reviews-col">
        {rightColumnReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

    </div>
  );
}

export default FilmReviews;
