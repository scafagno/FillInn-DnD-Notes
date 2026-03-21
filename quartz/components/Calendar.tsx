import { QuartzComponent, QuartzComponentProps } from "./types"

const Calendar: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div class="calendar-widget">
      <h3>Calendario Sessioni</h3>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTW3Heo2Jsta-bU5LzTUuHE4O8yEIPR5HyC9D2xKLc7eMQ7HPfwqSoiAyJuRiBAcl1hVfOjax94ma98/pubhtml?widget=true&headers=false"
        width="100%"
        height="400"
        frameBorder="0"
      />
    </div>
  )
}

export default Calendar
