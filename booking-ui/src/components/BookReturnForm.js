import React, {useEffect, useState} from "react";
import {bookPhone, getPhone, returnPhone} from "../services/network";
import {useNavigate, useParams} from "react-router-dom";

function BookReturnForm() {
  const navigate = useNavigate();
  const [eventBy, setEventBy] = useState("");
  const [phone, setPhone] = useState({})

  const params = useParams();
  const phoneId = params.phoneId;

  const getPhoneById = async () => {
    const res = await getPhone(phoneId);
    if(res) {
      setPhone(res);
    }
  }

  useEffect(()=> {
    getPhoneById();
  }, []);

  const back = () => {
    navigate("/");
  }
  const bookPhoneFunc = async () => {
    const response = await bookPhone(phoneId, eventBy);
    if (response.status == 200) {
      navigate("/");
    } else {
      alert(response.statusText);
    }
  };

  const returnPhoneFunc = async () => {
    const response = await returnPhone(phoneId, eventBy);
    if (response.status == 200) {
      navigate("/");
    } else {
      alert(response.statusText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!eventBy) {
      alert("Event by is mandatory");
      return;
    }

    if(phone.availability) {
      bookPhoneFunc();
    } else {
      returnPhoneFunc();
    }

  };
  const handleChange = (e) => {
    setEventBy( e.target.value);
  };

  return (
      <div className="user-form">
      <form onSubmit={handleSubmit}>
        <h3>{phone.availability ? 'Booking phone: ' : 'Returning phone: '}<br/>{phone.model}</h3>
        <div className="form-group">
          <label>Model</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={phone.model}
            readOnly="true"/>
        </div>
        <div className="form-group">
          <label>Event by</label>
          <input
            className="form-control"
            type="text"
            name="eventBy"
            value={eventBy}
            required
            onChange={handleChange}/>
        </div>
        <div className="d-grid mb-2">
          <button onClick={back} className="btn btn-secondary">cancel</button>
          <input type="submit" value="save" className="btn-lg-su btn btn-success btn-lg"/>
        </div>
      </form>
      </div>
  );
}

export default BookReturnForm;
