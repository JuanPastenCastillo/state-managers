import { INDEX_MobsWrapper } from "./styles/INDEX_MobsWrapper"
import { Temperature } from "./temperature"
import { TimerView } from "./timer"

export const INDEX_Mobx = () => {
  return (
    <INDEX_MobsWrapper>
      <h1>{INDEX_Mobx.name}</h1>
      <TimerView />
      <Temperature />
    </INDEX_MobsWrapper>
  )
}
