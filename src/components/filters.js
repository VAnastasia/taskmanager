import {tasksMock, TIME_DAY} from '../data';
import {createElement} from '../utils';

class Filter {
  constructor({name, count = 0, isChecked = false}) {
    this._name = name;
    this._count = count;
    this._isChecked = isChecked;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    const id = this._name.toLowerCase();
    return `<label for="filter__${id}" class="filter__label">
        ${this._name}
        <span class="filter__${id}-count">${this._count}</span>
      </label>
      <input
        type="radio"
        id="filter__${id}"
        class="filter__input visually-hidden"
        name="filter"
        ${this._isChecked ? `checked` : ``}/>
        `;
  }
}

export {Filter};

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

export const filterElements = [
  {name: `All`, count: tasksMock.length, isChecked: true},
  {name: `Overdue`, count: calcTasks(tasksMock.filter((task) => task.dueDate < Date.now()))},
  {name: `Today`, count: calcTasks(tasksMock.filter((task) => Math.abs(task.dueDate - Date.now()) < TIME_DAY))},
  {name: `Favorites`, count: calcTasks(tasksMock.filter((task) => task.isFavorite))},
  {name: `Repeating`, count: calcTasks(tasksMock.filter((task) => Object.values(task.repeatingsDays).some((value) => value)))},
  {name: `Tags`, count: calcTasks(tasksMock.filter((task) => task.tags.length))},
  {name: `Archive`, count: calcTasks(tasksMock.filter((task) => task.isArchive))},
];

const filtersMarkup = filterElements
  .map(getFilterTemplate)
  .join(`\n`);

export const getFilters = () => `
  <section class="main__filter filter container">
    ${filtersMarkup}
  </section>
`;
