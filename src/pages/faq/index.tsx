import { Heading } from "@chakra-ui/react"
import React from "react"
import { DefaultLayout, SEO } from "../../components"
import { FaqForm } from "../../components"
import FaqCategoryCards from "../../templates/faq/FaqCategryCards"

const FaqIndex: React.FC = () => {
  return (
    <DefaultLayout>
      <SEO slug="/faq" metadata={{ title: "Dúvidas Frequentes" }} />

      <Heading textAlign="center" p={8}>
        Dúvidas mais frequentes
      </Heading>
      <FaqCategoryCards />
      <FaqForm />
    </DefaultLayout>
  )
}

export default FaqIndex
