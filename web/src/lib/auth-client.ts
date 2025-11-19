import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL: "http://172.20.10.3:3000",
})