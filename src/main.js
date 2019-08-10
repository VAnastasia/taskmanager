import {getMenuTemplate} from './components/site-menu.js';
import {getSearchTemplate} from './components/search.js';
import {getFilters} from './components/filters.js';
import {getBoardTasksTemplate} from './components/board-task.js';

const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};

const containerMenu = document.querySelector(`.control`);
const containerContent = document.querySelector(`.main`);

renderComponent(containerMenu, getMenuTemplate());
renderComponent(containerContent, getSearchTemplate());
renderComponent(containerContent, getFilters());
renderComponent(containerContent, getBoardTasksTemplate());