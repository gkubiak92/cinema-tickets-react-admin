import React from "react";
import Rating from "@material-ui/lab/Rating";

const RatingField = ({ record = {}, source }) => {
  const rating = record[source];

  return (
    <div className="rating">
      <Rating value={rating} readOnly />
    </div>
  );
};

export default RatingField;
