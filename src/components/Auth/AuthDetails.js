import React, { useEffect, useState } from "react";

import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(true);
      } else {
        setAuthUser(null);
      }
    });
  }, []);
  return authUser;
  console.log(authUser);
};

export default AuthDetails;
