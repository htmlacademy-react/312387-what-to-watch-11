import {Film} from '../../types/film';
import ReviewCard from '../review-card/review-card';
import {reviews} from '../../mocks/reviews';

type FilmReviewsProps = {
  film: Film;
}

function FilmReviews({film}: FilmReviewsProps): JSX.Element {

  // todo: изменить условия фильтра когда будут данные film.id === review.filmId
  const filmReviews = reviews.filter(() => film.id);

  const halfSize = Math.ceil(reviews.length / 2);
  const leftColumnReviews = filmReviews.slice(0, halfSize);
  const rightColumnReviews = filmReviews.slice(halfSize);

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
