'use client'

import { HStack, Stack, Center, useMediaQuery } from '@chakra-ui/react'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDesktop] = useMediaQuery('(min-width: 1000px')

  return (
    <Stack
      w='full'
      alignItems='top'
      spacing='0'
      direction={isDesktop ? 'row' : 'column'}
    >
      {isDesktop && (
        <>
          <Stack w='20%' />
          <Stack
            w='20%'
            h='100vh'
            position='fixed'
            left='0'
            top='0'
            bgColor='teal.100'
          />
        </>
      )}
      {!isDesktop && (
        <>
          <Stack h='50px' />
          <Stack
            h='50px'
            w='full'
            position='fixed'
            left='0'
            top='0'
            bgColor='teal.100'
          />
        </>
      )}
      <Center w='full'>
        <Stack
          maxW='80ch'
          textAlign='left'
          lineHeight='1.62'
          spacing='8'
          py={{ base: '8', lg: '32' }}
          px={{ base: '4', lg: '0' }}
        >
          {children}
        </Stack>
      </Center>
    </Stack>
  )
}
