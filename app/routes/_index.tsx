import type { MetaFunction } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

import { Button } from "~/components/ui/button"
import { auth } from "~/lib/auth"
import { Session } from "~/lib/auth-types"

export const meta: MetaFunction = () => {
  return [
    { title: "Better Auth Remix Example" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export async function loader({ request }: { request: Request }) {
  return auth.api.getSession({
    headers: request.headers,
  })
}

export default function Index() {
  const session = useLoaderData<Session | null>()
  return (
    <div className="no-visible-scrollbar flex min-h-[80vh] items-center justify-center overflow-hidden px-6 md:px-0">
      <main className="row-start-2 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-center text-4xl font-bold text-black dark:text-white">
            Better Auth.
          </h3>
          <p className="break-words text-center text-sm md:text-base">
            Remix demo to showcase{" "}
            <a
              href="https://better-auth.com"
              target="_blank"
              className="italic underline"
            >
              Better Auth
            </a>{" "}
            features and capabilities. <br />
          </p>
        </div>
        <Link to={session ? "/dashboard" : "/sign-in"}>
          <Button className="rounded-none" size="lg">
            {session ? "Dashboard" : "Sign In"}
          </Button>
        </Link>
      </main>
    </div>
  )
}
