'use client'

import { LoginButton } from '@/components'
// import { useRouter } from 'next/navigation'

const Page = () => {
  // const { user, loading } = usePageContext();
  // const router = useRouter()

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (user) {
  //   router.push('/articles')
  // } else {
  return (
    <LoginButton
      onClick={() => {
        console.log('hello')
      }}
    >
      button
    </LoginButton>
  )
  // }
}

export default Page
