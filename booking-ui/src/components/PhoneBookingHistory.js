import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import {getBookingHistory, getPhone} from "../services/network";
import HistoryDetails from "./HistoryDetails";

export default function PhoneBookingHistory() {
    const navigate = useNavigate();
    const back = () => {
        navigate("/");
    };

    const [phone, setPhone] = useState({})

    const params = useParams();
    const phoneId = params.phoneId;

    const getPhoneById = async () => {
        const res = await getPhone(phoneId);
        if(res) {
            setPhone(res);
        }
    }

    const [histories, setHistories] = useState([]);
    const getHistories = async () => {
        const result = await getBookingHistory(phoneId);
        if (result) {
            setHistories(result);
        }
    };
    useEffect(() => {
        getPhoneById().then(r => {});
        getHistories().then(r => {});
    }, []);

    return (
        <div className="phones">
            <h2>Booking history of {phone.model}</h2>
            <hr/>
            <button onClick={back} className="btn btn-secondary">Back</button>
            <hr />
            <div className="table-3">
                <div className="cell-hd">Event</div>
                <div className="cell-hd">Event Time</div>
                <div className="cell-hd">Done By</div>
                {histories.length === 0 && <div className="cell-span-all">Empty booking history list!</div>}
                {histories.map((history, index) => (
                    <HistoryDetails
                        key={index}
                        index={index}
                        history={history}
                    />
                ))}
            </div>
        </div>
    );
}
