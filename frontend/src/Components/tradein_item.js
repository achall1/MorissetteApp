import React from 'react';
import PropTypes from 'prop-types'

//This component should be a single trade-in form item
const Tradein_item = ({
  tradeinForm: {
    Customer,
    Model,
    Make,
    VIN,
    Year,
    BodyType,
    AskingPrice
  }
}) => {
  return (
    <div>
        <h2 id="header">Trade-In Form</h2>
        <table id= "Trade-in form">
            <tr>
                <td>{Customer}</td>
                <td>{Model}</td>
                <td>{Make}</td>
                <td>{VIN}</td>
                <td>{Year}</td>
                <td>{BodyType}</td>
                <td>{AskingPrice}</td>
            </tr>
        </table>
    </div>
  );
};

Tradein_item.propTypes = {
  tradeinForm: PropTypes.object.isRequired
};

export default Tradein_item;