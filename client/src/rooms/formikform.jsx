{/* <div className="join-room-form">
      <Formik
        initialValues={{
          id: "",
          username: "",
        }}
        validationSchema={Yup.object({
          id: Yup.number()
            .required("Room ID Required"),
          username: Yup.string()
          .required("Username Required")
        })}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.resetForm();
        }}
      >
        {formik => (
          <Flex
            bg="white.100"
            align="center"
            justify="center"
            h="60vh"
          >
            <Box
              bg="white"
              p={6}
              rounded="md"
              w={80}
            >
              <VStack
                as="form"
                mx="auto"
                spacing={5}
                justifyContent="center"
                onSubmit={formik.handleSubmit}
              >
                <Heading>Join a Study Room</Heading>

                <TextField
                  name="id"
                  type="number"
                  placeholder="Room ID"
                />

                <TextField
                  name="username"
                  type="username"
                  placeholder="Username"
                />

                <Button type="submit" colorScheme="purple" width="full">
                  Start Studying!
                </Button>

              </VStack>
            </Box>
          </Flex>
        )}
        </Formik>
    </div> */}