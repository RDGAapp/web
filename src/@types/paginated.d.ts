interface Paginated<T> {
  data: T,
  pagination: {
    perPage: number,
    currentPage: number,
    from: number,
    to: number,
    total: number
    lastPage: number,
  }
}
