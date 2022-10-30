import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSeats,updatePrice } from '../../actions/clientActions';
import { useNavigate } from "react-router-dom";

const PostForm = (props) => {
  const navigate = useNavigate();
  const [itemData,setItemData] = useState({
    rows:0,
    cols:0,
    price: 0
  });

  const handleInputChange = (e) => {
    setItemData({...itemData,[e.target.name]:e.target.value})
  }

  const genrateTable = () => {
    let index = 1;
    let arr = [];
    for(let i = 0;i<itemData.rows;i++){
      let tempArr = [];
      for(let j = 0;j<itemData.cols;j++){
        tempArr.push({
          id: index,
          selectedState: 0,
        })
        index++;
      }
      arr.push(tempArr);
    }
    props.createSeats(arr);
    props.updatePrice(Number(itemData.price))
    navigate('/booking')
  }
  return (
    <div>
      <div className='m-5 row g-2'>
      <h3>
        Please enter details
      </h3>
        <div className='col-6'>
          <label htmlFor='rows'>
            Enter rows
          </label>
          <input type={'number'} className='form-control' name='rows' value={itemData.rows} onChange={handleInputChange}/>
        </div>
        <div className='col-6'>
          <label htmlFor='cols'>
            Enter cols
          </label>
          <input type={'number'} className='form-control' name='cols' value={itemData.cols} onChange={handleInputChange}/>
        </div>

        <div className='col-6'>
          <label htmlFor='cols'>
            Enter Ticket price
          </label>
          <input type={'number'} className='form-control' name='price' value={itemData.price} onChange={handleInputChange}/>
        </div>

      </div>

      <button onClick={genrateTable} className="btn btn-primary mx-5">
        Click
      </button>
    </div>
  )
}

// export default PostForm

PostForm.propTypes = {
  createSeats: PropTypes.func.isRequired,
  updatePrice: PropTypes.func.isRequired
};

export default connect(null, { createSeats,updatePrice })(PostForm);