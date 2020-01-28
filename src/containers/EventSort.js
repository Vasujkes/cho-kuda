export const sortEvents = (events, sort) => {
  const sortSort = sort === "asc" ? 1 : -1;
  const fixPrice = events.map(e => (e.is_free ? ((e.price = 0), e) : e));

  return events.sort((a, b) => {
    if (+a.price > +b.price) return 1 * sortSort;
    if (+a.price < +b.price) return -1 * sortSort;
    return 0;
  });
};
