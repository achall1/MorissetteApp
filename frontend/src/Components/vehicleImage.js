import React from "react";

const VehicleImage = ({ item }) => (
    <div className="product-img">
        <img
            src={`http://localhost:8000/api/vehicle/picture/${item._id}`}
            alt={item.make}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default VehicleImage;