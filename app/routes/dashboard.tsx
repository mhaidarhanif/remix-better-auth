import { type MetaFunction } from "@remix-run/node"

import UserCard from "~/components/user-card"

export const meta: MetaFunction = () => {
  return [{ title: "Dashboard" }, { name: "description", content: "Dashboard" }]
}

export default function Dashboard() {
  return (
    <div>
      <UserCard />
    </div>
  )
}
