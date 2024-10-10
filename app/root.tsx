import type { LinksFunction } from "@remix-run/node"
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { Toaster } from "sonner"

import { Logo } from "./components/logo"

import "./tailwind.css"

export const links: LinksFunction = () => [
  {
    rel: "shortcut icon",
    href: "https://fav.farm/🔒",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Toaster richColors closeButton />

        <div className="dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex min-h-screen w-full justify-center bg-white dark:bg-black">
          <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black md:flex"></div>
          <div className="absolute z-50 flex w-full items-center justify-between border-b border-border bg-white px-4 py-2 dark:bg-black md:px-1 lg:w-8/12">
            <Link to="/">
              <div className="flex cursor-pointer items-center gap-2">
                <Logo />
                <h1 className="font-bold text-black dark:text-white">
                  Remix Better Auth
                </h1>
              </div>
            </Link>
            <div className="z-50 flex items-center"></div>
          </div>
          <div className="mt-20 w-full lg:w-7/12">{children}</div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
