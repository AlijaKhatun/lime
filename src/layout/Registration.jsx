import React, { useState } from 'react'
import { auth } from '../../firebaseConfig';
import {
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import Input from '../component/Input'
import PasswordInput from '../component/PasswordInput';
import Or from '../component/Or'
import GoogleLink from '../component/GoogleLink'
// import img
import { MdErrorOutline } from 'react-icons/md';
const Registration = () => {
  //print input handle hook
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // error input handle hook
  const [fnameError, setFnameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  //email and password rejex for test
  const emailRejex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordREjex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const handleToCreate = async e => {
    e.preventDefault();
    if (!fname) {
      setFnameError('enter your first name');
    }
    //email logic
    if (!email) {
      setEmailError('enter your email');
    } else {
      if (!emailRejex.test(email)) {
        setEmailError('please, enter valid email');
      } else {
        setEmailError('');
      }
    }
    //password logic
    if (!password) {
      setPasswordError('enter your password');
    } else {
      if (!passwordREjex.test(password)) {
        setPasswordError(
          'enter strong password . must be includes uppercase and lowercase letters, number',
        );
      } else {
        setPasswordError('');
      }
    }

    if (!confirmPassword) {
      setConfirmPasswordError('enter your confirm password');
    } else {
      if (password !== confirmPassword) {
        setConfirmPasswordError('please enter same password');
      } else {
        setConfirmPasswordError('');
      }
    }

    // firebase sign up 
    if (emailRejex.test(email) && passwordREjex.test(password) && confirmPassword && fname) {
      try {
        const userCredencial = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredencial)
        
      } catch (error) {
        console.log(error)
          const errorCode = error.code;
          if (errorCode.includes("auth/too-many-requests")) {
            setEmailError("try another email")
          } else if (errorCode.includes("auth/email-already-in-use")) {
            setEmailError("try another email")
          }
        };
      }



  
  };
  const printFname = e => {
    setFname(e.target.value);
    setFnameError('');
  };
  const printEmail = e => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const printPassword = e => {
    setPassword(e.target.value);
    setPasswordError('');
  };
  const printConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <div className="max-w-1/3 w-full bg-white py-5 px-10">
        <h1 className="text-center text-green-950 text-bold text-2xl md:3xl">
          REGISTRATION FORM
        </h1>
        <form onSubmit={handleToCreate}>
          <Input
            label="Full Name:"
            type="text"
            placeholder="Enter Your full name"
            required={true}
            flexStyle="md:flex-row md:items-center md:justify-between"
            onChange={printFname}
          />
          {fnameError && (
            <div className="flex items-center justify-end gap-1">
              <MdErrorOutline className="text-red-600" />
              <p className="text-red-600 text-sm">{fnameError}</p>
            </div>
          )}

          <Input
            label="Email:"
            type="email"
            placeholder="Enter Your Email"
            required={true}
            flexStyle="md:flex-row md:items-center md:justify-between"
            onChange={printEmail}
          />
          {fnameError && (
            <div className="flex items-center justify-end gap-1">
              <MdErrorOutline className="text-red-600" />
              <p className="text-red-600 text-sm">{emailError}</p>
            </div>
          )}
          <PasswordInput
            labelText="Password:"
            flexStyle="md:flex-row md:items-center md:justify-between"
            onChange={printPassword}
          />
          {fnameError && (
            <div className="flex items-center justify-end gap-1">
              <MdErrorOutline className="text-red-600" />
              <p className="text-red-600 text-sm">{passwordError}</p>
            </div>
          )}
          <PasswordInput
            labelText="Confirm Password:"
            flexStyle="md:flex-row md:items-center md:justify-between"
            onChange={printConfirmPassword}
          />
          {fnameError && (
            <div className="flex items-center justify-end gap-1">
              <MdErrorOutline className="text-red-600" />
              <p className="text-red-600 text-sm">{confirmPasswordError}</p>
            </div>
          )}
          <Or />

          <GoogleLink />
          <button
            type="submit"
            className="my-5 py-3 w-1/2 mx-auto block text-center bg-green-950 text-white rounded-lg cursor-pointer"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default Registration