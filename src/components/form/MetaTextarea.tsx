import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import {
  chakra,
  IconButton,
  Icon,
  InputGroup,
  InputRightElement,
  Tooltip,
  Textarea,
  InputLeftElement,
  Box,
} from "@chakra-ui/react"
import { useField } from "@unform/core"
import { FaTelegramPlane } from "react-icons/fa"
import { FiAlertCircle } from "react-icons/fi"

interface MetaTextareaProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  hasSubmitButton?: boolean
}

const MetaTextarea: React.FC<MetaTextareaProps> = ({
  name,
  hasSubmitButton,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    })
  }, [fieldName, registerField])

  const handleInputFocused = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  return (
    <InputGroup
      mb={rest.type === "hiden" || rest.hidden ? 0 : 4}
      bg="white"
      rounded="md"
      border={rest.hidden ? 0 : "2px solid"}
      borderColor={
        isFocused
          ? "brand.300"
          : !!error
          ? "red.500"
          : isFilled
          ? "green.600"
          : "white"
      }
    >
      {error && (
        <Tooltip hasArrow label={error} bg="red.600" placement="top-start">
          <InputLeftElement title={error} p={2} roundedLeft="md">
            <Icon as={FiAlertCircle} color="red.500" />
          </InputLeftElement>
        </Tooltip>
      )}
      <Textarea
        name={name}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        pl={`${error ? 12 : 4}`}
      />

      {hasSubmitButton && (
        <InputRightElement p={1}>
          <IconButton
            icon={<FaTelegramPlane />}
            aria-label="Inscrever-se"
            type="submit"
            colorScheme="brand"
            _focus={{ outline: "none" }}
            _active={{ outline: "none" }}
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default chakra(MetaTextarea)
