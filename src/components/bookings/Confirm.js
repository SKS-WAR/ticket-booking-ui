import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { confirmSeats } from '../../actions/clientActions';

const Confirm = props => {
    const navigate = useNavigate();

    const [bookings,setConfirm] = useState([])
    const [timer,setTimer] = useState(10);

    useEffect(()=>{
        setConfirm(props.bookings)
    },[bookings])

    useEffect(()=>{
        timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
        if(timer === 0){
            props.confirmSeats(true);
        }
    },[timer])

    const evalPrice = () => {
        let price = 0;
        bookings.map(ele => {
            ele.map(e => {
                if(e.selectedState === 1){
                    price += props.price
                }
            })
        })
        return price;
    }

    const showSelectedSeats = () =>{
        let arr = [];
        bookings.map(ele => {
            ele.map(e => {
                if(e.selectedState === 1){
                    arr.push(e.id)
                }
            })
        })
        return arr.join(",")
    }

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='card p-5'>
            <h1>Confirm Booking</h1>{console.log(bookings)}

            <h3>
                Seats : {showSelectedSeats()}
                {/* {bookings?.map((i,rowIndex) => (
                <>
                    {i?.map((booking,colIndex) => {
                        if(booking.selectedState == 1)
                        return <span className='mx-2'>
                            {booking.id}
                        </span>
                    })}
                </>
            ))} */}
            </h3>

            <h4>Price : {evalPrice()}</h4>
            
            <button className='btn btn-danger' onClick={()=> {
                props.confirmSeats(false);
                navigate('/booking')
            }} disabled={timer===0}>
                Cancel
            </button>
            <h4>Cancel in {timer} seconds</h4>
            {timer === 0 && <>
                <h4>
                    Tickets are confirmed.
                    <button className='btn btn-primary' onClick={()=>{
                        navigate('/booking');
                    }}>Book more tickets</button>
                </h4>
            </>}
        </div>
    </div>
  )
}

Confirm.propTypes = {
    confirmSeats: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        bookings: state.bookings.items,
        price: state.bookings.item
    }
}
export default connect(mapStateToProps, { confirmSeats })(Confirm);