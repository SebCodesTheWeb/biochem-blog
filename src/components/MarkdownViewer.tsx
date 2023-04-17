import React from 'react'
import Markdown from 'markdown-to-jsx'
import {
  Box,
  Button,
  Code,
  Image,
  Input,
  Kbd,
  Link,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
  UnorderedList,
  Text,
  Heading,
} from '@chakra-ui/react'

export const MarkdownViewer: typeof Markdown = (props) => (
  <Markdown
    options={{
      overrides: {
        p: {
          component: Text,
        },
        h1: {
          component: (props) => <Heading fontSize='2.75rem' {...props} />,
        },
        h2: {
          component: (props) => <Heading fontSize='2.25rem' {...props} />,
        },
        h3: {
          component: (props) => <Heading fontSize='1.75rem' {...props} my="2" />,
        },
        h4: {
          component: (props) => <Heading fontSize='1.5rem' {...props} mb="1" mt="2"/>,
        },
        h5: {
          component: (props) => <Heading fontSize='1.20rem' {...props} mb="1" mt="2"/>,
        },
        h6: {
          component: (props) => <Heading fontSize='1rem' {...props} />,
        },
        a: {
          component: (props) => <Link sx={{color: 'blue.500'}} {...props}/>,
        },
        code: {
          component: Code,
        },
        button: {
          component: Button,
        },
        div: {
          component: Box,
        },
        img: {
          component: (props) => (
            <Box p='4'>
              <Image alt='' {...props} />
            </Box>
          ),
        },
        input: {
          component: Input,
        },
        textarea: {
          component: Textarea,
        },
        kbd: {
          component: Kbd,
        },
        table: {
          component: Table,
        },
        thead: {
          component: Thead,
        },
        tbody: {
          component: Tbody,
        },
        tfoot: {
          component: Tfoot,
        },
        td: {
          component: Td,
        },
        th: {
          component: Th,
        },
        tr: {
          component: Tr,
        },
        li: {
          component: ListItem,
        },
        ol: {
          component: OrderedList,
        },
        ul: {
          component: UnorderedList,
        },
      },
    }}
    {...props}
  />
)
