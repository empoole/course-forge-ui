import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { login } from "../lib/login";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [authError, setAuthError] = useState(false);
  const { setAuthState } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const responseJSON = await login({
      email: email,
      password: password,
    });

    if (responseJSON.jwt) {
      setAuthState({ jwt: responseJSON.jwt });
      navigate("/teach/");
    } else if (responseJSON.error) {
      console.error(responseJSON.error);
    } else {
      console.error("Authentication error");
      setAuthError(true);
    }
  };

  return (
    <div className="flex justify-center h-screen m-auto">
      <div className="w-full max-w-xs">
        <form
          action="/login"
          onSubmit={handleSubmit}
          className="shadow-md rounded-md flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className={`mb-4 shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                authError ? "border-red-500" : ""
              }`}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className={`mb-4 shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline${
                authError ? "border-red-500" : ""
              }`}
            />
          </div>

          <button type="submit" className="p-2 my-2 bg-sky-600 text-white">
            Login
          </button>
        </form>
        <div className="text-center">
          <a
            className="block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
          <Link to="signup" className="block">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
