import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: string;
  username: string;
  email: string;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // if (!user) {
    //   axios("http://localhost:4000/user", {
    //     withCredentials: true,
    //   })
    //     .then((response) => response.data)
    //     .then((user) => {
    //       setUser(user);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    const fetchData = async () => {
      try {
        const response = await axios("http://localhost:4000/user", {
          withCredentials: true,
        });
        if (!response) {
          throw new Error("failed fetching data");
        }
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
