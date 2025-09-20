'use client'

import { useState } from 'react'
import { useAuth } from '@/components/auth/AuthProvider'
import { uploadImage } from '@/lib/supabase/storage'
import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SellerDashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState<File | null>(null)
  const [previewFile, setPreviewFile] = useState<File | null>(null)
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null)
  const [propsUsed, setPropsUsed] = useState<string>('')
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    router.push('/login')
    return null
  }

  // In a real application, you would check if the user is a seller
  // For now, we'll assume any logged-in user can access this dashboard

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setUploading(true)
    setError(null)
    setSuccess(null)

    if (!file || !user) {
      setError('Please provide a file and ensure you are logged in.')
      setUploading(false)
      return
    }

    try {
      // Upload main file
      const fileUrl = await uploadImage(file, 'sequences', 'files')
      if (!fileUrl) {
        throw new Error('Failed to upload main file.')
      }

      // Upload preview file (if provided)
      let previewUrl: string | null = null
      if (previewFile) {
        previewUrl = await uploadImage(previewFile, 'sequences', 'previews')
        if (!previewUrl) {
          throw new Error('Failed to upload preview file.')
        }
      }

      // Upload thumbnail file (if provided)
      let thumbnailUrl: string | null = null
      if (thumbnailFile) {
        thumbnailUrl = await uploadImage(thumbnailFile, 'sequences', 'thumbnails')
        if (!thumbnailUrl) {
          throw new Error('Failed to upload thumbnail file.')
        }
      }

      const { data, error: insertError } = await supabase
        .from('sequences')
        .insert({
          title,
          description,
          price,
          seller_id: user.id,
          file_url: fileUrl,
          preview_url: previewUrl,
          thumbnail_url: thumbnailUrl,
          props_used: propsUsed.split(',').map(prop => prop.trim()).filter(prop => prop !== ''),
        })
        .select()

      if (insertError) {
        throw insertError
      }

      setSuccess('Sequence uploaded successfully!')
      setTitle('')
      setDescription('')
      setPrice(0)
      setFile(null)
      setPreviewFile(null)
      setThumbnailFile(null)
      setPropsUsed('')
      // Optionally, refresh the page or redirect

    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred during upload.')
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Seller Dashboard</h1>
      <p className="mb-6">Welcome, {user.email}!</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
            min="0"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">Main File (e.g., .zip, .rar)</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
        </div>
        <div>
          <label htmlFor="previewFile" className="block text-sm font-medium text-gray-700">Preview File (Optional, e.g., .mp4, .gif)</label>
          <input
            type="file"
            id="previewFile"
            onChange={(e) => setPreviewFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div>
          <label htmlFor="thumbnailFile" className="block text-sm font-medium text-gray-700">Thumbnail Image (Optional, e.g., .jpg, .png)</label>
          <input
            type="file"
            id="thumbnailFile"
            onChange={(e) => setThumbnailFile(e.target.files ? e.target.files[0] : null)}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <div>
          <label htmlFor="propsUsed" className="block text-sm font-medium text-gray-700">Props Used (Comma-separated)</label>
          <input
            type="text"
            id="propsUsed"
            value={propsUsed}
            onChange={(e) => setPropsUsed(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="e.g., prop1, prop2, prop3"
          />
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload Sequence'}
        </button>
      </form>

      {error && <p className="mt-4 text-red-600">Error: {error}</p>}
      {success && <p className="mt-4 text-green-600">Success: {success}</p>}
    </div>
  )
}