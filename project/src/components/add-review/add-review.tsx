import {Fragment, ChangeEvent, useState, FormEvent, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Rating, ReviewValue} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {commentAction} from '../../store/api-actions';
import {getReviewDataLoadingStatus} from '../../store/film-data/selectors';
import {Review} from '../../types/review';

function AddReview(): JSX.Element {

  const params = useParams();

  const [isDisabledSubmit, setIsDisabledSubmit] = useState(true);
  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const isReviewDataLoading = useAppSelector(getReviewDataLoadingStatus);

  const ratingQuantity: number[] = Array.from({length: Rating.Awesome}, (_, i) => ++i);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formData.rating && formData.comment) {
      if (
        formData.comment.trim().length >= ReviewValue.MinValue &&
        formData.comment.trim().length <= ReviewValue.MaxValue
      ) {
        setIsDisabledSubmit(false);
        return;
      }
    }
    setIsDisabledSubmit(true);
  }, [formData]);

  const onSubmit = (review: Review) => {
    dispatch(commentAction([Number(params.id), review]));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (formData.rating && formData.comment) {
      onSubmit({
        rating: Number(formData.rating),
        comment: formData.comment,
      });
    }
  };

  function handleFieldChange({target}: ChangeEvent<HTMLInputElement|HTMLTextAreaElement> ): void {
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  }

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleFormSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {ratingQuantity.reverse().map((i) => (
              <Fragment key={`rating-${i}`}>
                <input
                  className="rating__input"
                  id={`star-${i}`}
                  type="radio"
                  name="rating"
                  value={i}
                  disabled={isReviewDataLoading}
                  onChange={handleFieldChange}
                  checked={i === Number(formData.rating)}
                />
                <label className="rating__label" htmlFor={`star-${i}`} >Rating {i}</label>
              </Fragment >
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="comment"
            minLength={ReviewValue.MinValue}
            maxLength={ReviewValue.MaxValue}
            placeholder="Review text"
            disabled={isReviewDataLoading}
            onChange={handleFieldChange}
            defaultValue={formData.comment}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isDisabledSubmit || isReviewDataLoading}
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReview;
