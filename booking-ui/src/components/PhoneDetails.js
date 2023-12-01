import React from "react";
import { useNavigate } from "react-router-dom";

export default function PhoneDetails({ index, phone }) {
    const color = (index % 2 === 0 ? "#f4f6fc" : "#fff" );
    const navigate = useNavigate();
    const bookReturn = () => {
        console.log("Book: ", phone.id);
        navigate("/bookingform/" + phone.id);
    };

    const bookHistory = () => {
        console.log("Book: ", phone.id);
        navigate("/bookinghistory/" + phone.id);
    };

    return (
        <>
            <div className="cell" style={{backgroundColor:color}}>{phone.model}</div>
            <div className="cell" style={{backgroundColor:color}}>{phone.availability ? "Yes" : "No"}</div>
            <div className="cell" style={{backgroundColor:color}}>{phone.eventBy}/{phone.eventTime}</div>
            <div className="cell" style={{backgroundColor:color}}>
                <button onClick={bookReturn} className="btn btn-primary">{phone.availability ? "Book" : "Return"}</button>
                &nbsp;<button onClick={bookHistory} className="btn btn-success">Booking history</button>
            </div>
        </>
    );
}
