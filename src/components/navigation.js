import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: "inline-block", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Navigation({ children }) {
  return (
    <nav>
      <Link to="/" style={{ textShadow: "none", backgroundImage: "none" }}>
        <h3 style={{ display: "inline" }}>My Blogging ton</h3>
      </Link>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Conact</ListLink>
      </ul>
    </nav>
  )
}
