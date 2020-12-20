import {
  Flex,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react"
import { Form } from "@unform/web"
import React, { useCallback, useRef } from "react"
import { navigate } from "gatsby"
import { FaTelegramPlane } from "react-icons/fa"
import * as Yup from "yup"
import getValidationErrors from "../../../utils/getValidationErrors"
import { MetaInput, MetaTextarea } from "../.."

const schema = Yup.object().shape({
  "bot-field": Yup.string(),
  "form-name": Yup.string(),
  name: Yup.string().required("Nome é obrigatório"),
  phone: Yup.string(),
  email: Yup.string()
    .required("Email é obrigatório")
    .email("Favor digitar um email válido"),
  message: Yup.string().required("A mensagem é obrigatória"),
})

const FormComponent = () => {
  const formRef = useRef()
  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        formRef.current.setErrors({})
        const encodedData = new URLSearchParams(data).toString()
        await schema.validate(data, { abortEarly: false })

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodedData,
        })
          .then(() => {
            navigate("/newsletter/obrigado")
            reset()
          })
          .catch(error => {
            console.log(error)
          })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current.setErrors(errors)
          return
        }
      }
    },
    [formRef]
  )
  return (
    <Form
      schema={schema}
      name="faq"
      method="post"
      ref={formRef}
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <Flex direction="column" maxW="350px" color="black">
        <MetaInput name="form-name" value="faq" type="hidden" hidden />
        <MetaInput name="bot-field" hidden />
        <MetaInput name="name" placeholder="Seu Nome" />
        <MetaInput name="phone" placeholder="(99) 99999.9999" />
        <MetaInput name="email" placeholder="Email" />
        <MetaTextarea name="message" placeholder="Qual a sua dúvida ?" />
        <Button variant="outline" type="submit">
          Enviar
        </Button>
      </Flex>
    </Form>
  )
}

export default FormComponent
