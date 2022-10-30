import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { createSeats } from '../../actions/clientActions';


const Bookings = props => {
    const navigate = useNavigate();

    const [bookings,setBookings] = useState([])
    useEffect(()=>{
        setBookings(props.bookings)
    },[props])

    const handleBooking = (row,col) => {
        let tempArr = JSON.parse(JSON.stringify(bookings));
        if(tempArr[row][col].selectedState === 2){
            return;
        }
        // console.log(col)
        tempArr[row][col].selectedState = tempArr[row][col].selectedState === 1 ? 0 : 1;
        setBookings(tempArr)
    }
  return (
    <div>
        <div className='row justify-content-between'>
            <div className='col'>
               <h1>Select Seats</h1>
            </div>
            <div className='col-3'>
                <button className='btn btn-primary m-2' onClick={()=> {
                    props.createSeats(bookings);
                    navigate('/confirm')
                }}>
                    Confirm
                </button>
            </div>
        </div>
        <table className='table table-borderless'>
            <tbody>
                {bookings?.map((i,rowIndex) => (
                    <tr>
                        {i?.map((booking,colIndex) => {
                            return <td>
                                <div class={"alert "+(booking.selectedState === 0?"alert-primary":booking.selectedState===1?"alert-success":"alert-dark")} role="alert" onClick={()=>{handleBooking(rowIndex,colIndex)}}>
                                    {booking.id}
                                </div>

                            </td>
                        })}
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
  )
}

Bookings.propTypes = {
    createSeats: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
    return {
        bookings: state.bookings.items,

    }
}
export default connect(mapStateToProps, { createSeats })(Bookings);