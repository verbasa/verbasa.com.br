import React from "react"
import { chakra } from "@chakra-ui/react"
import { Card } from "../../components"

interface FaqCardProps {
  slug: string
  title: string
  icon: string
  text: string
}

const CategoryTemplate: React.FC<FaqCardProps> = ({
  slug,
  title,
  icon,
  text,
  ...rest
}) => {
  return (
    <Card
      link={`/faq/category${slug}`}
      title={title}
      icon={icon}
      text={text}
      bg="white"
      {...rest}
    />
  )
}

export default chakra(CategoryTemplate)
