interface CityContext {
  city: string | null,
  changeCity: ((newCity: string) => void) | (() => void),
}
