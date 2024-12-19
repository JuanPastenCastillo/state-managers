import { atom } from "jotai"

const countAtom = atom(0)
const countryAtom = atom("Japan")
const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"])
const animeAtom = atom([
  {
    title: "Ghost in the Shell",
    year: 1995,
    watched: true,
    theId: crypto.randomUUID()
  },
  {
    title: "Serial Experiments Lain",
    year: 1998,
    watched: false,
    theId: crypto.randomUUID()
  }
])

export { animeAtom, citiesAtom, countAtom, countryAtom }
