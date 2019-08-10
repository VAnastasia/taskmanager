const getFilterTemplate = ({name, count = 0, isChecked = false}) => {
  const id = name.toLowerCase();
  return `
    <input
      type="radio"
      id="filter__${id}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${id}" class="filter__label">
      ${name}
      <span class="filter__${id}-count">${count}</span>
    </label>`;
};

const filterElements = [
  {name: `All`, count: 13, isChecked: true},
  {name: `Overdue`, count: 0},
  {name: `Today`, count: 0},
  {name: `Favorites`, count: 1},
  {name: `Repeating`, count: 1},
  {name: `Tags`, count: 1},
  {name: `Archive`, count: 115},
];

const filtersMarkup = filterElements
  .map(getFilterTemplate)
  .join(`\n`);

export const getFilters = () => `
  <section class="main__filter filter container">
    ${filtersMarkup};
  </section>
`;
