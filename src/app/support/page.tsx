import Layout from '@/components/layout/Layout'
import SupportForm from '@/components/support/SupportForm'

export default function SupportPage() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto py-10 px-4">
        <h1 className="text-3xl font-heading font-bold mb-6 text-center">
          Contact Support
        </h1>
        <SupportForm />
      </div>
    </Layout>
  )
}
