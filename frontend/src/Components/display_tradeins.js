import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import Tradein_item from './tradein_item'
import { getAllTradeins } from '../../../backend/controllers/tradein';


//This component will display all available trade-in form items

const Display_tradeins = ({ getAllTradeins, tradeinForm: {display_tradeins, loading}} ) =>{
    useEffect(() => {
        getAllTradeins();
    
    }, [getAllTradeins]);

    return (
        <Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
                <h1 className='large text-primary'>Trade-in Forms</h1>
                <div className='tradeinForm'>
                    {display_tradeins.length > 0 ? (
                        display_tradeins.map(tradeinForm => (
                        <Tradein_item key={tradeinForm._id} tradeinForm={tradeinForm} />
                        ))
                    ) : (
                    <h4>No trade-ins found...</h4>
                    )}
                </div>
            </Fragment>
          )}
        </Fragment>
      );
    };
    
    Display_tradeins.propTypes = {
        getAllTradeins: PropTypes.func.isRequired,
        tradeinForm: PropTypes.object.isRequired
    };
    
    const mapStateToProps = state => ({
        profile: state.tradeinForm
    });
    
    export default connect(
      mapStateToProps,
      { getAllTradeins }
    )(Display_tradeins);
