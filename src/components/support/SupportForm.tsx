'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'

interface FormData {
  name: string
  email: string
  message: string
}

export default function SupportForm() {
  const { register, handleSubmit, formState } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // TODO: integrate with backend/ticketing system
    console.log('Support request', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register('name', { required: true })}
        placeholder="Name"
        className="w-full px-4 py-2 rounded-md bg-surface border border-primary/20"
      />
      <input
        type="email"
        {...register('email', { required: true })}
        placeholder="Email"
        className="w-full px-4 py-2 rounded-md bg-surface border border-primary/20"
      />
      <textarea
        {...register('message', { required: true })}
        placeholder="Message"
        rows={5}
        className="w-full px-4 py-2 rounded-md bg-surface border border-primary/20"
      />
      <Button type="submit" disabled={formState.isSubmitting} className="w-full">
        Submit
      </Button>
      {formState.isSubmitSuccessful && (
        <p className="text-sm text-secondary">Thank you! We will be in touch soon.</p>
      )}
    </form>
  )
}
