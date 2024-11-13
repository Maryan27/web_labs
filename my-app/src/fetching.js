import axios from "axios";

export const getFilteredTicketList = (filters) => {
  return axios.get("http://localhost:5000/catalog", { params: filters });
};

export const getTicketList = () => {
  return axios.get("http://localhost:5000/catalog"); 
};

export const getTicketTypeData = () => {
  return axios.get("http://localhost:5000/tickettypes");
};

export const getDetailedTicketInfo = (ticketId) => {
  return axios.get(`http://localhost:5000/get/${ticketId}`); 
};
