import React from "react"
import Navigation from "../components/navigation"

export default function Layout({ children }) {
  return (
    <div style={{ margin: "3rem auto", maxWidth: 600, padding: `0 1rem` }}>
      <Navigation></Navigation>
      {children}
    </div>
  )
}
