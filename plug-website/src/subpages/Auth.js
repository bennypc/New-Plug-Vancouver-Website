import React, { useEffect, useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  ChakraProvider,
  CloseButton,
} from '@chakra-ui/react';

import supabase from '../supabase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  function onClose(e) {
    console.log(showAlert);
    setShowAlert(false);
  }
  async function handleLogin(e) {
    e.preventDefault();

    let { user, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (!!error) {
      console.log(error.message);
      setShowAlert(true);
    } else {
      console.log('good login');
      window.location.href = '/dashboard/home';
    }
  }

  return (
    <div className="bg-black h-full">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 mx-4">
          <div>
            <img
              className="mx-auto h-[160px] w-auto"
              src={require('../images/logos/PlugWhite.png')}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-300">
              Or{' '}
              <a
                href="/signup"
                className="font-medium text-[#cb6ce6] hover:text-indigo-500"
              >
                Create your account
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm h">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-[50px] relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="h-[50px] relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#cb6ce6] focus:outline-none focus:ring-[#cb6ce6] sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#cb6ce6] focus:ring-[#cb6ce6]"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-400"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#cb6ce6] hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#b638d8] py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex min-h-full items-center justify-center">
        {showAlert && (
          <Alert
            status="error"
            width="350px"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            borderRadius="lg"
          >
            <AlertIcon />
            <Box>
              <AlertDescription>
                Incorrect email or password, please try again.
              </AlertDescription>
            </Box>
            <CloseButton
              alignSelf="flex-start"
              position="relative"
              right={-1}
              top={-1}
              onClick={onClose}
            />
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Auth;
