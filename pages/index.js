import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" color="white" bg="black" p={3} mb={6} align="center">
                Hello, Im Sakshyam Shrestha
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h3" variant="page-title">
                        Sakshyam Shrestha
                    </Heading>
                    <p>Computer Science student and Machine Learning engineer</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page
