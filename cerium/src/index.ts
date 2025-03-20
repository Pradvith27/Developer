import axios from "axios";

const baseUrl = "https://a90b05cb-e593-4a77-a500-82b909c678f2.mock.pstmn.io/";
async function fetchData() {
  try {
    const response = await axios.get(`${baseUrl}/cities`);
  
    const statusCode = response.status;
    const data = response.data;
  
    console.log("Status: ", statusCode);
    console.log("Data: ", data);
  } catch (e) {
    console.log("Error", e);
  }
}

fetchData();

// //JSON Stringification and Parsing

// const data ={
//   name: "John",
//   age: 30,
//   city: "New York"
// }

// const jsonString = JSON.stringify(data);
// console.log(jsonString);

// const parsedData = JSON.parse(jsonString);
// console.log(parsedData);