import { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House } from "@phosphor-icons/react"
const icons = { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House }

export default function Step({ advices, steps }) {
  return (
    <>
      <ul>
        {advices.map(advice => (
          <li key={advice.id}>{advice.title}</li>

        ))}
      </ul>



      {steps.map((step, i) => {
        const Icon = icons[step.icon]
        return <Icon key={i} />
      })}
    </>
  )
}
