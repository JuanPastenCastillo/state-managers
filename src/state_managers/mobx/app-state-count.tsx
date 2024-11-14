import { observable } from "mobx"

export type TimerProps = {
  count: number
  shouldUpdateAutomatically: boolean
  increase: () => void
  reset: () => void
  updateManuallyToggle: () => void
  stopInterval: () => void
  stopAutomatically: () => void
  updateAutomatically: () => void
  intervalId: NodeJS.Timeout | null
}

export const appStateCount: TimerProps = observable({
  count: 0,
  shouldUpdateAutomatically: true,
  intervalId: null as NodeJS.Timeout | null,

  increase: () => {
    appStateCount.count++
  },
  reset: () => {
    appStateCount.count = 0
  },

  updateManuallyToggle: () => {
    appStateCount.shouldUpdateAutomatically =
      !appStateCount.shouldUpdateAutomatically
  },

  stopInterval: () => {
    if (appStateCount.intervalId) {
      clearInterval(appStateCount.intervalId)
    }
  },

  stopAutomatically: () => {
    appStateCount.shouldUpdateAutomatically = false
    appStateCount.stopInterval()
  },

  updateAutomatically: () => {
    appStateCount.shouldUpdateAutomatically = true
    appStateCount.stopInterval()

    appStateCount.intervalId = setInterval(() => {
      if (appStateCount.shouldUpdateAutomatically) {
        appStateCount.increase()
      }
    }, 1000)
  }
})
