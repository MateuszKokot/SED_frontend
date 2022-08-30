import React from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

function App() {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        user
          .getIdToken()
          .then((idToken) => {
            // Send token to your backend via HTTPS
            console.log(idToken);
            const requestOptions = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                idToken: idToken,
              },
              body: JSON.stringify({ title: "React POST Request Example" }),
            };
            // ...

            fetch("http://localhost:8000/api/login", requestOptions)
              .then((response) => response.text())
              .then((data) => console.log(data))
              .catch((e) => console.log(e));
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });
  };

  return (
    <div>
      <h1>No dalej kliknij mnie</h1>
      <button onClick={signIn}>Login</button>
    </div>
  );
}

export default App;