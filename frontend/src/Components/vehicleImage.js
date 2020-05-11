import React from "react";
import {API} from "../config";

const VehicleImage = ({ item }) => (
    <div className="product-img">
        <img
            src={`${API}/vehicle/picture/${item._id}`}
            alt={item.make}
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
);

export default VehicleImage;