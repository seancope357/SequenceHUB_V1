import { supabase } from './client'

export async function uploadImage(file: File, bucketName: string, filePath: string) {
  if (!file) {
    console.error('No file provided for upload.')
    return null
  }

  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false, // Set to true if you want to overwrite existing files with the same name
      })

    if (error) {
      throw error
    }

    // Construct the public URL for the uploaded file
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath)

    return publicUrlData.publicUrl

  } catch (error) {
    console.error('Error uploading image to Supabase:', error)
    return null
  }
}