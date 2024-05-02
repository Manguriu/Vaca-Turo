import React from "react";
import HostCard from "./HostCard";

const Host = () => {
  return (
    <div className="mt-20 padding-x padding-y max-width" id="discover">
      <div className="home__text-container justify-center items-center">
        <h1 className="text-4xl font-extrabold"> Featured Houses </h1>
        <p>Here are some of our best Houses we have </p>
      </div>
      <div className=" mt-10 flex gap-2 flex-wrap justify-center">
        <div>
          <HostCard />
        </div>
      </div>
    </div>
  );
};

export default Host;
