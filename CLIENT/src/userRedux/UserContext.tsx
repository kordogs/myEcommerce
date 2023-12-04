import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice";
import { RootState } from "./store";

export default function UserContextProvider({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("http://localhost:4000/user", {
          withCredentials: true,
        });
        if (!response) {
          throw new Error("failed fetching data");
        }
        dispatch(setUser(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return <div>{children}</div>;
}
