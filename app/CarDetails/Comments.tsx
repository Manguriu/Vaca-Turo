import React from 'react';

interface Review {
  id: number;
  rating: number;
  name: string;
  comment: string;
  date: string;
  time: string;
  image: string; // Add image property to the Review interface
}

const ReviewItem = ({ review }: { review: Review }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4 font-Josefin">
    {review.image && <img src={review.image} alt="Review" className="mt-1 h-8 mb-2 rounded-lg" />}
    <div className="flex justify-between items-center mb-2 font-Josefin">
      <div className='font-Josefin'>
        <strong className='font-Josefin text-[18px] max-md:text-[14px]' >{review.name}</strong> - {review.date} {review.time}
      </div>
      <div className="text-green-500 font-Josefin lg:text-[18px] max-md:text-[15px]">Rating: {review.rating}</div>
    </div>
    <p className='font-Josefin text-[18px] max-md:text-[15px]'>{review.comment}</p> 
  </div>
);

const dummyReviews: Review[] = [
  {
    id: 1,
    rating: 5,
    name: 'King vac',
    comment: 'Great experience, loved the Cars!',
    date: '2024-05-16',
    time: '10:30 AM',
    image: '/person.png', 
  },
  {
    id: 2,
    rating: 4,
    name: 'Margret maggie',
    comment: 'Nice Car, good Service.',
    date: '2024-05-15',
    time: '3:45 PM',
    image: '/person.png', 
  },
  
];

export default function Comments() {
  return (
    <div className="max-w-md mx-auto mt-8">
      {dummyReviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
}
