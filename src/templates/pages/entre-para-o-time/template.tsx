import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { Container, Link } from "../../../components"

interface BlockHeroProps {
  title: string
  video: string
  bgImage: string
}

const BlockHero: React.FC<BlockHeroProps> = ({ title, video, bgImage }) => {
  return (
    <Box
      bgImage={`url(${bgImage})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      mb={{ base: "0", md: 20 }}
    >
      <Flex
        direction="column"
        h={{ base: "400px", md: "476px" }}
        align="center"
      >
        <Box position="relative">
          <Heading
            textAlign="center"
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            color="white"
            py={10}
            px={20}
          >
            {title}
          </Heading>
          <AspectRatio
            maxW="764px"
            w="100%"
            ratio={16 / 9}
            rounded="md"
            overflow="hidden"
            position="absolute"
            top="100%"
          >
            <iframe
              title={title}
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </AspectRatio>
        </Box>
      </Flex>
    </Box>
  )
}

interface PlansProps {
  label: string
  labelPrefix?: string
  price: string
  infoList: Array<{
    key: string
    value?: string
  }>
  buttons: Array<{
    label: string
    colorScheme: string
    variant: string
    link?: string
  }>
}

interface BlockPlansProps {
  plans: PlansProps[]
}

const BlockPlans: React.FC<BlockPlansProps> = ({ plans }) => {
  return (
    <Container>
      <Flex w={{ base: "100%", md: "70%" }} mx="auto" shadow="lg" rounded="lg">
        <Tabs isFitted variant="enclosed" w="100%">
          <TabList mb="1em">
            {plans.map(plan => (
              <Tab
                _selected={{ color: "white", bg: "brand.500" }}
                key={plan.label}
              >
                {plan.label}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {plans.map(plan => (
              <TabPanel key={plan.label} p={0}>
                <Flex direction="column">
                  <Flex
                    direction={{ base: "column", lg: "row" }}
                    justify="space-between"
                    align="center"
                    p={8}
                  >
                    {plan.label === "Ambos" ? (
                      <Box>
                        <Heading as="h3" px={4}>
                          Nacional &
                        </Heading>
                        <Heading as="h2" bg="brand.500" color="white" px={4}>
                          Internacional
                        </Heading>
                      </Box>
                    ) : (
                      <Box>
                        {plan.labelPrefix && (
                          <Heading as="h3" px={4}>
                            {plan.labelPrefix}
                          </Heading>
                        )}
                        <Heading as="h2" bg="brand.500" color="white" px={4}>
                          {plan.label}
                        </Heading>
                      </Box>
                    )}
                    <Box
                      borderLeft="2px solid #1f3c88"
                      borderBottom="2px solid #1f3c88"
                      h={{ base: 0, lg: 32 }}
                      w={{ base: 32, lg: 0 }}
                      m={4}
                    />
                    <Box>
                      {plan.infoList.map(info => (
                        <p>
                          <Text
                            as="span"
                            key={info.key}
                            color="brand.500"
                            fontWeight="700"
                            pr={2}
                          >
                            {info.key}
                          </Text>
                          {info.value && <Text as="span">{info.value}</Text>}
                        </p>
                      ))}
                    </Box>
                  </Flex>
                  <Center
                    bg="aux.50"
                    p={4}
                    fontSize="2xl"
                    fontWeight="900"
                    color="brand.500"
                  >
                    {plan.price}
                  </Center>
                  <Flex justify="center" p={8}>
                    {plan.buttons.map((button, index) => (
                      <Button
                        as={Link}
                        key={button.label}
                        variant={button.variant}
                        colorScheme={
                          !!button.link ? button.colorScheme : "gray"
                        }
                        href={button.link}
                        px={10}
                        ml={index !== 0 ? 8 : 0}
                        disabled={!button.link}
                      >
                        {!!button.link ? button.label : "Em breve!"}
                      </Button>
                    ))}
                  </Flex>
                </Flex>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  )
}

interface TemplateProps {
  data: {
    hero: BlockHeroProps
    plans: PlansProps[]
  }
}

const Template: React.FC<TemplateProps> = ({ data }) => {
  return (
    <>
      <BlockHero {...data.hero} />
      <BlockPlans plans={data.plans} />
    </>
  )
}

export default Template
