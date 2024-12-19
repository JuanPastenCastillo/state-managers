import { progressAnime } from "@/state_managers/jotai/atoms/derived-atom"
import { useAtom } from "jotai"
import { ProgressAtomWrapper } from "./styles/progress-atom-wrapper"

export const ProgressAtom = () => {
  const [progress] = useAtom(progressAnime)

  return (
    <ProgressAtomWrapper>
      <h2>Use an Derived Atom: progres percentage</h2>
      {Math.trunc(progress * 100)}% watched
    </ProgressAtomWrapper>
  )
}
