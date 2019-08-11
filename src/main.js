import {
  getMenuTemplate,
  getSearchTemplate,
  getFilters,
  getBoardTasksTemplate,
} from './components';

const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};

const containerMenu = document.querySelector(`.control`);
const containerContent = document.querySelector(`.main`);

renderComponent(containerMenu, getMenuTemplate());
renderComponent(containerContent, getSearchTemplate());
renderComponent(containerContent, getFilters());
renderComponent(containerContent, getBoardTasksTemplate());
