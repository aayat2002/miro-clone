import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}


