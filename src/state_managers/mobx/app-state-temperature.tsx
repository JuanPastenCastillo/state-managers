import { computed, makeObservable, observable } from "mobx"

export const temperatureMobx = new (class Temperature {
  unit = "C"
  temperatureCelsius = 25

  constructor() {
    makeObservable(this, {
      unit: observable,
      temperatureCelsius: observable,
      temperatureKelvin: computed,
      temperatureFahrenheit: computed,
      temperature: computed
    })
  }

  get temperatureKelvin() {
    return this.temperatureCelsius * (9 / 5) + 32
  }

  get temperatureFahrenheit() {
    return this.temperatureCelsius + 273.15
  }

  get temperature() {
    switch (this.unit) {
      case "C":
        return this.temperatureCelsius + "°C"
      case "K":
        return this.temperatureKelvin + "°K"
      case "F":
        return this.temperatureFahrenheit + "°F"
      default:
        return this.temperatureCelsius
    }
  }
})()
