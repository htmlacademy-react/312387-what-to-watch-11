import {Fragment, ChangeEvent, useState, FormEvent} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {commentAction} from '../../store/api-actions';
import {Review} from '../../types/review';

function AddReview(): JSX.Element {

  const params = useParams();

  const [formData, setFormData] = useState({
    rating: '',
    comment: ''
  });

  const ratingQuantity: number[] = Array.from({length: 10}, (_, i) => ++i);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSubmit = (review: Review) => {
    dispatch(commentAction([Number(params.id), review]));
    navigate(-1);
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
            placeholder="Review text"
            onChange={handleFieldChange}
            defaultValue={formData.comment}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default AddReview;
