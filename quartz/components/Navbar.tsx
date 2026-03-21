import { QuartzComponentConstructor } from "./types"

function Navbar() {
  return (
    <nav class="custom-navbar">
      <a href="/">Home</a>
      <a href="/campagne">Campagne</a>
      <a href="/calendario">Calendario</a>
      <a href="/altro">Altro</a>
    </nav>
  )
}

Navbar.displayName = "Navbar"
export default (() => Navbar) satisfies QuartzComponentConstructor
