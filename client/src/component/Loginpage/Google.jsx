import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [userProfile, setUserProfile] = useState(null);

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user) {
          const user = result.user;
          setUserProfile({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          });
          localStorage.setItem("isSignedIn", "true");
          localStorage.setItem("loggedUser", JSON.stringify(user));
          setTimeout(() => {
            navigate("/videos");
          }, 100);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="google-container" onClick={handleGoogleLogin}>
      <p className="google-text">Continue With </p>
      <button>login with google</button>
    </div>
  );
};

export default Google;
