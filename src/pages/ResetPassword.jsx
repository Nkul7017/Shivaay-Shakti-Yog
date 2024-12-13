import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { isPassword } from "../utils/passwordvalidation";

function ResetPassword() {
  const [data, setData] = useState({ password: "", message: "" });
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the token on component load
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/auth/get-token/${id}`);
        setToken(response.data.token);
        console.log(response.data.token)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching token:", error);
        setData({ ...data, message: "Invalid or expired link" });
        setIsLoading(false);
      }
    };
    fetchToken();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setData({ ...data, message: "Token not available. Please request a new reset link." });
      return;
    }

    setData({ ...data, message: "Processing..." });

    if (isPassword(data.password.trim())) {
      try {
        const response = await axios.post(
          // `http://localhost:3000/api/auth/reset-password/${id}`,
          `https://shivaay-shakti-backend-vm3k.onrender.com/api/auth/reset-password/${id}`,
          { password: data.password },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 200) {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error resetting password:", error);
        setData({ ...data, message: "Error resetting password. Try again later." });
      }
    } else {
      setData({ ...data, message: "Enter a valid password" });
    }
  };

  // Show a loading spinner or message while token is being fetched
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-[#FFF1C1] grid place-content-center">
      <div className="p-4 rounded-lg w-[300px] sm:w-[500px] h-[300px]">
        <h4 className="text-2xl sm:text-5xl heading">Change Password</h4>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-2xl bluish ml-1" htmlFor="password">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="font-semibold border border-gray-300 px-3 text-red-900 rounded-lg py-1"
            />
          </div>
          <button type="submit" className="button3 ml-2 mt-7 text-2xl px-3 py-1">
            <span>Update</span>
          </button>
          <p className="mt-1 font-bold text-center text-red-500">{data?.message}</p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
