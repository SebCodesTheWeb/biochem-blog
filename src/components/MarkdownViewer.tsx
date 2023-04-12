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
          component: (props) => <Heading fontSize='3rem' {...props} />,
        },
        h2: {
          component: (props) => <Heading fontSize='2.5rem' {...props} />,
        },
        h3: {
          component: (props) => <Heading fontSize='2.0rem' {...props} />,
        },
        h4: {
          component: (props) => <Heading fontSize='1.5rem' {...props} />,
        },
        h5: {
          component: (props) => <Heading fontSize='1.25rem' {...props} />,
        },
        h6: {
          component: (props) => <Heading fontSize='1rem' {...props} />,
        },
        a: {
          component: Link,
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
          component: Image,
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
