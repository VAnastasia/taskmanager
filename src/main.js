import {
  getMenuTemplate,
  getSearchTemplate,
  getFilters,
  getBoardTasksTemplate,
  renderTasks,
  noTasksTemplate
} from './components';

import {renderedTasks} from './data.js';

const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};

const containerMenu = document.querySelector(`.control`);
const containerContent = document.querySelector(`.main`);

renderComponent(containerMenu, getMenuTemplate());
renderComponent(containerContent, getSearchTemplate());
renderComponent(containerContent, getFilters());

if (renderedTasks.length > 0) {
  renderComponent(containerContent, getBoardTasksTemplate());
  const loadButton = document.querySelector(`.load-more`);

  const renderTasksMore = () => {
    loadButton.insertAdjacentHTML(`beforebegin`, renderTasks(renderedTasks, 0, 8));
  };

  loadButton.addEventListener(`click`, () => {
    renderTasksMore();
    if (renderedTasks.length === 0) {
      loadButton.style = `display: none`;
    }
  });
} else {
  renderComponent(containerContent, noTasksTemplate);
}
