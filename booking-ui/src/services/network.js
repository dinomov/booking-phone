import axios from "axios";

axios.defaults.baseURL = "http://localhost:9991";


export async function bookPhone(phoneId, bookedBy) {
  try {
    const response = await axios.post(`/phones/book/${phoneId}/${bookedBy}`);
    console.log("Phone has been booked successfully:", response.data);
    return response;
  } catch (error) {
    alert("Error booking phone");
  }
}

export async function returnPhone(phoneId, returnedBy) {
  try {
    const response = await axios.post(`/phones/return/${phoneId}/${returnedBy}`);
    console.log("Phone has been returned successfully:", response.data);
    return response;
  } catch (error) {
    alert("Error returning phone");
  }
}

export async function getBookingHistory(phoneId) {
  try {
    const response = await axios.get(`/phones/history/${phoneId}`);
    return response.data;
  } catch (error) {
    alert("Error getting booking history");
  }
}

export async function loadPhones() {
  try {
    const response = await axios.get("/phones");
    return response.data;
  } catch (error) {
    alert("Error loading phones");
  }
}

export async function getPhone(phoneId) {
  try {
    const response = await axios.get(`/phones/${phoneId}`);
    return response.data;
  } catch (error) {
    alert("Error getting phone");
  }
}
