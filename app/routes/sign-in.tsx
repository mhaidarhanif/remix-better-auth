import SignInCard from "~/components/sign-in-card"
import { SignUp } from "~/components/sign-up-card"
import { Tabs } from "~/components/tabs"

export default function SignIn() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center justify-center md:py-10">
        <div className="md:w-[400px]">
          <Tabs
            tabs={[
              {
                title: "Sign In",
                value: "sign-in",
                content: <SignInCard />,
              },
              {
                title: "Sign Up",
                value: "sign-up",
                content: <SignUp />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
