import CardWrapper from "@/components/auth/card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Do not have an account"
      backButtonHref="/auth/register"
      showSocial
    >
      login-form
    </CardWrapper>
  );
};

export default LoginForm;
