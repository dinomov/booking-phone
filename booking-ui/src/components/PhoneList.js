import PhoneDetails from "./PhoneDetails";
import { useEffect, useState } from "react";
import { loadPhones } from "../services/network";

export default function PhoneList() {
  const [phones, setPhones] = useState([]);
  const getPhones = async () => {
    const result = await loadPhones();
    if (result) {
      setPhones(result);
    }
  };
  useEffect(() => {
    getPhones();
  }, []);
  return (
    <div className="phones">
      <h2>Phones</h2>
      <hr />
      <div className="table">
        <div className="cell-hd">Model</div>
        <div className="cell-hd">Available</div>
        <div className="cell-hd">Booked By/Booked Time</div>
        <div className="cell-hd">&nbsp;</div>
        {phones.length === 0 && <div className="cell-span-all">Empty phone list!</div>}
        {phones.map((phone, index) => (
          <PhoneDetails
            key={index}
            index={index}
            phone={phone}
            reload={getPhones}
          />
        ))}
      </div>
    </div>
  );
}
