import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  FormControl,
  Input,
  theme,
  FormErrorMessage,
  Button,
  Stack,
  Box,
  Heading,
} from "@chakra-ui/react";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Name must be at least 3 character(s)" })
    .max(20, { message: "Name must be less than 20 character(s)" }),
  email: z.string().email("Provide valid email address"),
  password: z.string().refine((data) => passwordRegex.test(data), {
    message:
      "Password must have at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character.",
  }),
});

type RegisterData = z.infer<typeof loginSchema>;

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = (values: RegisterData) => {
    console.log({ ...values });
  };

  return (
    <>
      <Box style={{ width: "100vw", maxWidth: "500px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5}>
            <Heading fontSize="xl">Register Your Account</Heading>
            <FormControl
              isInvalid={Boolean(errors.username)}
              colorScheme="green"
            >
              <Input
                {...register("username")}
                errorBorderColor={theme.colors.red[200]}
                focusBorderColor={theme.colors.green[500]}
                fontSize="xl"
                fontWeight="500"
                placeholder="User Name"
                paddingY={6}
              />
              <FormErrorMessage color={"red.100"}>
                {errors?.username?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.email)} colorScheme="green">
              <Input
                {...register("email")}
                errorBorderColor={theme.colors.red[200]}
                focusBorderColor={theme.colors.green[500]}
                fontSize="xl"
                fontWeight="500"
                placeholder="Email Address"
                paddingY={6}
              />
              <FormErrorMessage color={"red.100"}>
                {errors?.email?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={Boolean(errors.password)}
              colorScheme="green"
            >
              <Input
                {...register("password")}
                errorBorderColor={theme.colors.red[200]}
                focusBorderColor={theme.colors.green[500]}
                fontSize="xl"
                fontWeight="500"
                placeholder="Password"
                paddingY={6}
              />
              <FormErrorMessage color={"red.100"}>
                {errors?.password?.message}
              </FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="green">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default Register;
