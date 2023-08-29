import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-gradient-to-tl from-violet-500 to-fuchsia-500">
      <div className="flex justify-center items-center h-screen bg-glassmorphism" >
        <SignUp/>
      </div>
    </div>
  );
}