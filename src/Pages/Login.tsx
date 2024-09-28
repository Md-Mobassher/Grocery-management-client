import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { TUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DemoCredentialModal from "@/components/ui/DemoCredentialModal";
import { useState } from "react";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [passErrorMessage, setPassErrorMessage] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email or password fields are empty
    if (email === "") {
      setEmailErrorMessage("Please enter your email.");
      return;
    }

    // Check if the email format is valid
    if (!emailRegex.test(email)) {
      setEmailErrorMessage("Please enter a valid email.");
      return;
    }

    if (password === "") {
      setPassErrorMessage("Please enter your password.");
      return;
    }

    // Show toast notification for logging in
    toast("Logging in...", {
      position: "top-right",
      autoClose: 3000,
    });
    try {
      const userInfo = {
        email: email,
        password: password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      setEmail("");
      setPassword("");
      toast.success("Logged in", {
        position: "top-right",
        autoClose: 3000,
      });
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(location.state?.from?.pathname || `/${user.role}/dashboard`, {
        replace: true,
      });
    } catch (err) {
      toast.error("Failed to Logged in.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center lg:p-16 md:p-10 p-5 ">
      <Card className="w-[360px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-500">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              className="p-2 mt-2 w-full outline-none rounded-md border border-gray-300 "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {emailErrorMessage && (
            <p className="text-red-500 mb-2">{emailErrorMessage}</p>
          )}

          <div className="mt-4">
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              className="p-2 mt-2 w-full outline-none rounded-md border border-gray-300 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {passErrorMessage && (
            <p className="text-red-500">{passErrorMessage}</p>
          )}

          <div className="flex justify-between mt-7">
            <Button
              className="bg-green-500 hover:bg-green-400"
              onClick={() => setIsModalOpen(true)}
            >
              Demo Credential
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-400"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div>
            <p className="text-md text-center">
              Not registered? Please{" "}
              <NavLink className="text-green-500 font-semibold" to="/register">
                Register
              </NavLink>
            </p>
          </div>
        </CardFooter>
      </Card>
      <DemoCredentialModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Login;
