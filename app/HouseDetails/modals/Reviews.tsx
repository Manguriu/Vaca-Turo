import React, { useState, useEffect } from "react";

interface FormErrors {
  name?: string;
  comment?: string;
}

interface Review {
  id: number;
  rating: number;
  name: string;
  comment: string;
  date: string;
  time: string;
}

const ReviewItem = ({ review }: { review: Review }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <div className="flex justify-between items-center mb-2 font-Josefin">
      <div className="font-Josefin text-[18px]">
        <strong className="font-Josefin">{review.name}</strong> - {review.date}{" "}
        {review.time}
      </div>
      <div className="text-green-500 font-Josefin text-[18px] ">
        Rating: {review.rating}
      </div>
    </div>
    <p className="font-Josefin text-[18px]">{review.comment}</p>
  </div>
);

export default function Reviews() {
  const [rating, setRating] = useState(3);
  const [selectedDate, setSelectedDate] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submittedReviews, setSubmittedReviews] = useState<Review[]>([]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setSelectedDate(currentDate);
    const currentTimeInterval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }, 1000);
    return () => clearInterval(currentTimeInterval);
  }, []);

  const handleRatingChange = (e: any) => {
    const selectedRating = parseInt(e.target.value, 10);
    setRating(selectedRating);
  };

  const handleCommentChange = (e: any) => {
    const commentValue = e.target.value;
    setComment(commentValue);
    setFormErrors((prevErrors) => ({ ...prevErrors, comment: "" }));
  };

  const handleNameChange = (e: any) => {
    const nameValue = e.target.value;
    setName(nameValue);
    setFormErrors((prevErrors) => ({ ...prevErrors, name: "" }));
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is required",
      }));
      return;
    }
    if (!comment.trim()) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        comment: "Comment is required",
      }));
      return;
    }
    const newReview: Review = {
      id: Date.now(),
      rating,
      name,
      comment,
      date: selectedDate,
      time: currentTime,
    };
    setSubmittedReviews((prevReviews) => [...prevReviews, newReview]);
    console.log("Review Submitted:", newReview);
    setRating(3);
    setComment("");
    setName("");
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4 font-Poetsen">
        Leave a review
      </h2>
      <div className="mb-6 border bg-white shadow-md rounded  p-6">
        <div className="flex items-center mb-4">
          <span className="mr-4 font-Josefin">Your Rating:</span>
          <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              value="1"
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              value="2"
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              value="3"
              onChange={handleRatingChange}
              checked={rating === 3}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              value="4"
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-500"
              value="5"
              onChange={handleRatingChange}
            />
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-Josefin">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              className="font-Josefin w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              value={name}
              onChange={handleNameChange}
            />
            {formErrors.name && (
              <p className="text-red-500 mt-1">{formErrors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block mb-1 font-Josefin">
              Add a Comment:
            </label>
            <textarea
              id="comment"
              className="font-Josefin w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              value={comment}
              onChange={handleCommentChange}
            />
            {formErrors.comment && (
              <p className="text-red-500 mt-1">{formErrors.comment}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn bg-[#3559E0] font-Josefin text-[15px] text-white"
          >
            Post Review
          </button>
        </form>
      </div>

      {/* remove in production */}
      <div>
        <h3 className="text-xl font-semibold mb-4 font-Josefin">
          Submitted Reviews:
        </h3>
        {submittedReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
