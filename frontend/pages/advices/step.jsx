import { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House } from "@phosphor-icons/react"
const icons = { Ticket, TrainSimple, FlagBannerFold, MapTrifold, ToiletPaper, ForkKnife, MapPinArea, Confetti, Bed, House }

import AdvicesCard from "@/AdvicesCard/AdvicesCard"

export default function Step({ advices, steps }) {
  return (
    <>
      <ul>
        {advices.map(advice => (
          <AdvicesCard key={`conseil${advice.id}`} data={advice} />
        ))}
      </ul>



      {steps.map((step, i) => {
        const Icon = icons[step.icon]
        return <Icon key={`icon${i}`} />
      })}
    </>
  )
}
