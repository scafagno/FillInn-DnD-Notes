import { QuartzComponentConstructor } from "./types"
function Navbar() {
  return (
    <nav class="custom-navbar">
      <a href="/FillInn-DnD-Notes/">Home</a>
      <a href="/FillInn-DnD-Notes/Campagne">Campagne</a>
      <a href="/FillInn-DnD-Notes/Calendario/calendario.md">Calendario</a>
      <a href="/FillInn-DnD-Notes/Altro">Altro</a>
    </nav>
  )
}
Navbar.displayName = "Navbar"
export default (() => Navbar) satisfies QuartzComponentConstructor
