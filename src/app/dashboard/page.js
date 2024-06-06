import Link from "next/link"

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export const metadata = {
  title: 'Next.js',
}
 
export default function Page() {
  return <Link href="/dashboard" >Dashboard</Link>
}