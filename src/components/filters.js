import {tasksArray} from './data';

const MS_DAY = 24 * 60 * 60 * 1000;

const calcTasks = (array) => {
  return array.length;
};

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
  {name: `All`, count: tasksArray.length, isChecked: true},
  {name: `Overdue`, count: calcTasks(tasksArray.filter((task) => task.dueDate < Date.now()))},
  {name: `Today`, count: calcTasks(tasksArray.filter((task) => Math.abs(task.dueDate - Date.now()) < MS_DAY))},
  {name: `Favorites`, count: calcTasks(tasksArray.filter((task) => task.isFavorite))},
  {name: `Repeating`, count: calcTasks(tasksArray.filter((task) => Object.values(task.repeatingsDays).some((value) => value)))},
  {name: `Tags`, count: calcTasks(tasksArray.filter((task) => task.tags.size))},
  {name: `Archive`, count: calcTasks(tasksArray.filter((task) => task.isArchive))},
];

const filtersMarkup = filterElements
  .map(getFilterTemplate)
  .join(`\n`);

export const getFilters = () => `
  <section class="main__filter filter container">
    ${filtersMarkup}
  </section>
`;
