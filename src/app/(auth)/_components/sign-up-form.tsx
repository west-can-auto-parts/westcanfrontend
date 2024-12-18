"use client"

import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FaArrowRight } from 'react-icons/fa'
import * as z from 'zod'
import { GoogleSignInButton, AppleSignInButton } from './auth-buttons'
import { RegisterSchema } from '../../../schemas'
import { register } from '../../../actions/register'

export const SignUpForm = () => {
  const [isPending, startTransition] = useTransition()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  // Initialize form with useForm
  const { register: formRegister, handleSubmit, reset, formState: { errors } } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values).then((data) => {
        if (data?.error) {
          setErrorMessage(data.error)
          setSuccessMessage(null) // Clear success message if there's an error
        } else if (data?.sucess) {
          setSuccessMessage('Registration successful! Please check your email.')
          setErrorMessage(null) // Clear error message if successful
          reset() // Reset the form
        }
      }).catch(() => {
        setErrorMessage("Something went wrong. Please try again.")
        setSuccessMessage(null) // Clear success message if there's an error
      })
    })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Your New Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Display error or success messages */}
          {errorMessage && <div className="alert alert-error text-red-600">{errorMessage}</div>}
          {successMessage && <div className="alert alert-success text-green-600">{successMessage}</div>}

          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                type="text"
                {...formRegister('name')}
                autoComplete="name"
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                {...formRegister('email')}
                autoComplete="email"
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                {...formRegister('password')}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
              />
              {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-2 w-fit justify-center rounded-md bg-[#b91b29] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
            >
              Register {isPending ? '...' : <FaArrowRight className='h-3 w-3' />}
            </button>
          </div>
        </form>

        <div className="mt-8 flex w-full items-center justify-between">
          <div className="w-full h-[2px] bg-gray-200"></div>
          <span className='text-gray-500'>Or</span>
          <div className="w-full h-[2px] bg-gray-200"></div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-2">
          <GoogleSignInButton />
          <AppleSignInButton />
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{' '}
          <a href="#" className="font-semibold leading-6 text-[#b91b29] hover:text-red-800">
            Sign In
          </a>
        </p>
      </div>
    </div>
  )
}
