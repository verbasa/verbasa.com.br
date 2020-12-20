import React from "react"
import { DefaultLayout, SEO } from "../../components"
import { FaqForm } from "../../components"
import FaqCategoryCards from "../../templates/faq/FaqCategryCards"

const FaqIndex: React.FC = () => {
  return (
    <DefaultLayout>
      <SEO slug="/faq" metadata={{ title: "Dúvidas Frequentes" }} />

      <FaqCategoryCards />
      <FaqForm />
    </DefaultLayout>
  )
}

export default FaqIndex
