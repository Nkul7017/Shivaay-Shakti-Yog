import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "Custom-Header": "Your custom header value",
};

// 1
export const CreateShurvey = async () => {
  const res = await axios.get(
    "https://shivayshaktibackend.onrender.com/surveyItem",
    {
      headers: headers,
      mode: "cors",
    }
  ).then((res)=>{
    // console.log(res.data)
    return res.data;
  });
 
};