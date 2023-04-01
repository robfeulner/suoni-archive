import { useState, createContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth0();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // TODO: POST info to server
    if (user) {
      fetch("/add-users", {
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
