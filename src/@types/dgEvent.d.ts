interface DgEvent {
  textContent: string,
  eventData: {
    days: Array<WeekDays>,
    time: string,
    place: {
      town: string,
      street: string,
      comment: string
    }
  },
}
