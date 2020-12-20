import React, { useEffect } from "react"
import { graphql, StaticQuery } from "gatsby"
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { MDXBodyRender } from ".."

export interface TemplateProps {
  data: {
    title: string
    label?: string
    body: string
    isPreview?: boolean
    isOpen: boolean
    onOpen?: any
    onClose?: any
  }
}

export const Template: React.FC<TemplateProps> = ({
  data: { title, label, body, isPreview = false, isOpen, onOpen, onClose },
}) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <MDXBodyRender body={body} isPreview={isPreview} />
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>{label || "Fechar"}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

interface QueryProps {
  mdx: {
    body: string
    frontmatter: {
      title: string
      active: boolean
    }
  }
}

const AttentionModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  function handleOnClose() {
    onClose()
  }
  return (
    <StaticQuery
      query={query}
      render={(data: QueryProps) => {
        const templateData = {
          ...data.mdx.frontmatter,
          body: data.mdx.body,
          isOpen,
          onOpen,
          onClose: handleOnClose,
        }
        useEffect(() => {
          if (data.mdx.frontmatter.active) {
            onOpen()
          }
        }, [])
        return <Template data={templateData} />
      }}
    />
  )
}

const query = graphql`
  query {
    mdx(frontmatter: { componentKey: { eq: "attentionModal" } }) {
      body
      frontmatter {
        title
        active
        label
      }
    }
  }
`

export default AttentionModal
