import {useState} from 'react';
import backgroundImage from "../assets/frame_16.svg";
import googleIcon from "../assets/google_icon.svg";
import CheckBox from "../components/CheckBox";
import FormField from "../components/FormField";
import PasswordField from "../components/PasswordField";
import PurpleText from "../components/PurpleText";

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="h-screen flex items-end justify-center relative font-poppins">
        <div
          className="bg-cover bg-center h-4/5 w-full lg:w-8/12 rounded-onboarding"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
        </div>
        <div className="h-screen w-full xl:w-1/4 lg:w-3/4 absolute text-center flex items-center justify-center">
          <div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-black-500">
                Create a account
              </h1>
              <h2 className="text-lg font-medium text-gray-500">
                Start your journey with our product
              </h2>
            </div>
            <div className="space-y-4 pt-8">
              <FormField
                title="Name*"
                placeholder="Enter Your Name"
                setValue={setName}
              />
              <FormField
                title="Email*"
                placeholder="Enter Your Email"
                setValue={setEmail}
              />
              <PasswordField
                title="Password*"
                setValue={setPassword}
              />
              <div className="w-full flex justify-between">
                <CheckBox text='Remember Me' setValue={setCheck} />
                <PurpleText text='Forgot your password?' />
              </div>
            </div>
            <div className="mt-7 space-y-5">
              <button className="bg-black text-white w-full h-12 rounded-md">
                Sign Up
              </button>
              <button className="bg-white ring-1 ring-gray-200 w-full h-12 rounded-md flex items-center justify-center">
                <img src={googleIcon} alt="G" className="mr-2" />
                Sign in with Google
              </button>
            </div>
            <div className="mt-8">
              <div className="w-full flex justify-center">
                <div>
                  <h1
                    htmlFor="rememberMe"
                    className="mr-2 text-gray-700 font-medium text-md"
                  >
                    Already have an account?
                  </h1>
                </div>
                <PurpleText text='Sign In' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;