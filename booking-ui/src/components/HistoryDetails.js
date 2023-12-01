import React from "react";
export default function HistoryDetails({ index, history }) {
    const color = (index % 2 === 0 ? "#f4f6fc" : "#fff" );
    return (
        <>
            <div className="cell" style={{backgroundColor:color}}>{history.event}</div>
            <div className="cell" style={{backgroundColor:color}}>{history.eventTime}</div>
            <div className="cell" style={{backgroundColor:color}}>{history.eventBy}</div>
        </>
    );
}
