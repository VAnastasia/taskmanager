import {
  getMenuTemplate,
  getSearchTemplate,
  getFilters,
  getBoardTasksTemplate,
  renderTasks,
  tasksArray
} from './components';

const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};

const containerMenu = document.querySelector(`.control`);
const containerContent = document.querySelector(`.main`);

renderComponent(containerMenu, getMenuTemplate());
renderComponent(containerContent, getSearchTemplate());
renderComponent(containerContent, getFilters());

if (tasksArray.length) {
  renderComponent(containerContent, getBoardTasksTemplate());
  const buttonLoad = document.querySelector(`.load-more`);

  const renderTasksMore = () => {
    buttonLoad.insertAdjacentHTML(`beforebegin`, renderTasks(tasksArray, 0, 8));
  };

  buttonLoad.addEventListener(`click`, () => {
    renderTasksMore();
    if (!tasksArray.length) {
      buttonLoad.style = `display: none`;
    }
  });
} else {
  renderComponent(containerContent, `<p class="board__no-tasks">
    Congratulations, all tasks were completed! To create a new click on
    «add new task» button.
  </p>`)
}
