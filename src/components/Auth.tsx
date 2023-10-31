import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useAuthState
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  // const [user] = useAuthState(auth);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  // const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
  // const [signInWithGoogle] = useSignInWithGoogle(auth);

  return (
    <div className="auth-container">
      <div className="sign-up">
        <h2>Sign up</h2>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        {/* <button onClick={() => createUserWithEmailAndPassword(email, password)}>Sign up</button>
        <button onClick={() => signInWithGoogle()}>Signin with google</button> */}
      </div>
      <div className="log-in">
        <h2>Sign in</h2>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        {/* <button onClick={() => signInWithEmailAndPassword(email, password)}>Sign in</button> */}
      </div>
    </div>
  );
};

export default Auth;
