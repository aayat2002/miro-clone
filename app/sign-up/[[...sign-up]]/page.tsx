import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center p-4">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
}


