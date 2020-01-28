export const sortEvents = (events, sort) => {
  if (events === undefined) {
    return [];
  }

  const sortSort = sort === "asc" ? 1 : -1;

  return events
    .map(e => (e.is_free ? ((e.price = 0), e) : e))
    .sort((a, b) => {
      if (+a.price > +b.price) return 1 * sortSort;
      if (+a.price < +b.price) return -1 * sortSort;
      return 0;
    });
};
