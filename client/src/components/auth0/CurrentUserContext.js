import { useState, createContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [account, setAccount] = useState(null);

  // Allows the logged in user to be accessible in all code under the value 'account'

  useEffect(() => {
    if (user) {
      fetch(`${process.env.REACT_APP_BASE_URL}/add-users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 400 || data.status === 500) {
            throw new Error("Not good. Error.");
          }
          setAccount(data.account);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setAccount(null);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ account }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
