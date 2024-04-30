import Link from "next/link";
import React from "react";

const HostCard = () => {
  return (
    <Link href="/HouseDetails">
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
            alt="house"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            John Doe House
            <div className="badge badge-secondary">New</div>
          </h2>
          <p>
            The magic thing about home is that it feels good to leave, and it
            feels even better to come back.
          </p>
          <div className="card-actions justify-end mt-2">
            <div className="badge badge-outline">View</div>
            <div className="badge badge-outline">Book</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HostCard;
