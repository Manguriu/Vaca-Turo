/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/display-name */

"use client";

import React, { useState } from "react";

const CarInputForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    oImg1: "",
    oImg2: "",
    oImg3: "",
    rating: "",
    overview: "",
    features: {
      type: "",
      doors: "",
      passengers: "",
      luggage: "",
      drive: "",
    },
    location: {
      location: "",
    },
    comments: {
      name: "",
      updateTime: "",
      rating: "",
      photo: "",
      dateLocation: "",
      comment: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Car Name"
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
      />
      <input
        type="text"
        name="oImg1"
        value={formData.oImg1}
        onChange={handleChange}
        placeholder="Image URL 1"
      />
      <input
        type="text"
        name="oImg2"
        value={formData.oImg2}
        onChange={handleChange}
        placeholder="Image URL 2"
      />
      <input
        type="text"
        name="oImg3"
        value={formData.oImg3}
        onChange={handleChange}
        placeholder="Image URL 3"
      />
      <input
        type="text"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating"
      />
      {/* <textarea
        name="overview"
        value={formData.overview}
        onChange={handleChange}
        placeholder="Overview"
      /> */}
      <input
        type="text"
        name="features.type"
        value={formData.features.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <input
        type="text"
        name="features.doors"
        value={formData.features.doors}
        onChange={handleChange}
        placeholder="Doors"
      />
      <input
        type="text"
        name="features.passengers"
        value={formData.features.passengers}
        onChange={handleChange}
        placeholder="Passengers"
      />
      <input
        type="text"
        name="features.luggage"
        value={formData.features.luggage}
        onChange={handleChange}
        placeholder="Luggage"
      />
      <input
        type="text"
        name="features.drive"
        value={formData.features.drive}
        onChange={handleChange}
        placeholder="Drive"
      />
      <input
        type="text"
        name="location.location"
        value={formData.location.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="comments.name"
        value={formData.comments.name}
        onChange={handleChange}
        placeholder="Commenter Name"
      />
      <input
        type="text"
        name="comments.updateTime"
        value={formData.comments.updateTime}
        onChange={handleChange}
        placeholder="Update Time"
      />
      <input
        type="text"
        name="comments.rating"
        value={formData.comments.rating}
        onChange={handleChange}
        placeholder="Comment Rating"
      />
      <input
        type="text"
        name="comments.photo"
        value={formData.comments.photo}
        onChange={handleChange}
        placeholder="Commenter Photo URL"
      />
      <input
        type="text"
        name="comments.dateLocation"
        value={formData.comments.dateLocation}
        onChange={handleChange}
        placeholder="Date and Location"
      />
      {/* <textarea
        name="comments.comment"
        value={formData.comments.comment}
        onChange={handleChange}
        placeholder="Comment"
      /> */}
      <button type="submit">Submit</button>
    </form>
  );
};

CarInputForm.displayName = "CarInputForm";

export default CarInputForm;
