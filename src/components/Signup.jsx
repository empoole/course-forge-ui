import { useState } from "react";
import { signup } from "../lib/signup";
import { login } from "../lib/login";

const Signup = () => {
  const [email, setEmail] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailsMatch = email === confirmEmail;
    const passwordsMatch = password === confirmPassword;

    if (!emailsMatch || !passwordsMatch) {
      if (!emailsMatch) console.error("Email Mismatch");
      if (!passwordsMatch) console.error("Password Mismatch");
    } else {
      const responseJSON = await signup({
        email: email,
        confirmEmail: confirmEmail,
        password: password,
        confirmPassword: confirmPassword,
      });

      if (responseJSON) {
        await login({ email: email, password: password });
      }
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="shadow-md rounded-md p-8 flex flex-col"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border rounded-md mb-4 p-2"
        />
        <input
          type="email"
          name="confirm-email"
          id="confirm-email"
          value={confirmEmail || ""}
          onChange={(e) => setConfirmEmail(e.target.value)}
          placeholder="Confirm Email"
          className="border rounded-md mb-4 p-2"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border rounded-md mb-4 p-2"
        />
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          value={confirmPassword || ""}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="border rounded-md mb-4 p-2"
        />
        <button type="submit" className="p-2 my-2 bg-sky-600 text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
