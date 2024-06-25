 
import Layout from '../components/layout'
import NestedLayout from '../components/nested-layout'
 
export default function Page() {
  return (
    /** Your content */
  )
}
 
Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}