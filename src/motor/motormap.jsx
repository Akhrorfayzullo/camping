import React from "react";
import { campcar } from "../mockdata";
import { Link } from "react-router-dom";
export const Motormap = () => {
  return (
    <div style={{ border: "1px solid red" }}>
      {campcar.maindata.map((item, index) => (
        <div key={item.id}>
          <Link to={`/motor/${item.id}`}>{item.id}</Link>
          <h2>
            {item.id}
            {item.car.name} ,, Car Number {index + 1}
          </h2>
          <p>
            <strong>Cost:</strong> {item.car.cost}
            <br />
            <strong>Type:</strong> {item.car.type}
            <br />
            <strong>License:</strong> {item.car.license}
            <br />
            <strong>People:</strong> {item.car.people}
            <br />
            <strong>Date:</strong> {item.car.date}
            <br />
            <strong>Company:</strong> {item.car.company}
            <br />
            <strong>Location:</strong> {item.car.location}
            <br />
          </p>
          {/* Add more details as needed */}
          <hr />
        </div>
      ))}
    </div>
  );
};
