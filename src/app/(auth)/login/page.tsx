'use client'

import { Flex, Heading, View, Text } from '@adobe/react-spectrum'
import { LoginButton } from '@/components'
import { useLogin } from '@/hooks'

const Page = () => {
  const { handleGoogleLogin } = useLogin()

  return (
    <View height="100vh">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        gap="size-200"
      >
        <Heading level={2}>Login</Heading>
        <Flex direction="column" alignItems="center" gap="size-200">
          <Text>Sign in with your Google account:</Text>
          <LoginButton
            variant="primary"
            onClick={handleGoogleLogin}
            marginTop="size-100"
            width="size-2400"
            justifySelf="center"
          >
            <Text marginStart="size-100">Sign in with Google</Text>
          </LoginButton>
        </Flex>
      </Flex>
    </View>
  )
}

export default Page
