import { QuartzComponentConstructor } from "./types"

function Navbar() {
  return (
    <nav class="custom-navbar">
      <a href="/FillInn-DnD-Notes/">Home</a>
      <a href="/Campagne">Campagne</a>
      <a href="/Calendario">Calendario</a>
      <a href="/Altro">Altro</a>
    </nav>
  )
}

Navbar.displayName = "Navbar"
export default (() => Navbar) satisfies QuartzComponentConstructor
