// import { useRouter } from 'next/router'

// export default function ProjectPage() {
//   const router = useRouter()
//   console.log(router)
//   return (
//     <div>
//       <h1>{router.query.slug}</h1>
//       <button onClick={() => router.push('/')}>GO TO HOME</button>
//     </div>
//   )
// }
// LOCAL

import Layout from '../../components/Layout'

export default function ProjectPage() {
  return (
    <Layout>
      <h1>Project</h1>
    </Layout>
  )
}
