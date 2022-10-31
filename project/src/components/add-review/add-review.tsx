import {Fragment, ChangeEvent, useState} from 'react';

function AddReview(): JSX.Element {

  const [formData, setFormData] = useState({
    rating: '8',
    reviewText: ''
  });

  const ratingQuantity: number[] = Array.from({length: 10}, (_, i) => ++i);

  function handleFieldChange({target}: ChangeEvent<HTMLInputElement|HTMLTextAreaElement> ): void {
    const {name, value} = target;
    setFormData({...formData, [name]: value});
  }

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
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
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleFieldChange}
            defaultValue={formData.reviewText}
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
