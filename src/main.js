import {
  getMenuTemplate,
  getSearchTemplate,
  getFilters,
  getBoardTasksTemplate,
  renderTasks,
  noTasksTemplate
  // Task,
  // TaskEdit
} from './components';

import {renderedTasks, tasksMock} from './data.js';
import {BoardTask} from './components/board-task';
import {Position, render} from './utils';
import {Menu} from './components/site-menu';
import {Search} from './components/search';
import {Filter} from './components/filters';
import {filterElements} from './components/filters';

import {Task} from './components/task';
import {TaskEdit} from './components/task-edit';
import {LoadButton} from './components/button-load';


const containerContent = document.querySelector(`.main`);
const containerMenu = document.querySelector(`.control`);
const containerFilters = document.createElement(`section`);
containerFilters.className = `main__filter filter container`;

const renderMenu = () => {
  const menu = new Menu();
  render(containerMenu, menu.getElement(), Position.BEFOREEND);
};

const renderSearch = () => {
  const search = new Search();
  render(containerContent, search.getElement(), Position.BEFOREEND);
};

const renderFilter = (filterElement) => {
  const filter = new Filter(filterElement);
  render(containerFilters, filter.getElement(), Position.BEFOREEND);
};

const renderBoardTask = () => {
  const boardTask = new BoardTask();
  render(containerContent, boardTask.getElement(), Position.BEFOREEND);
};


export const renderTask = (taskMock) => {
  const task = new Task(taskMock);
  const taskEdit = new TaskEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  task.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(taskEdit.getElement(), task.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(tasksContainer, task.getElement(), Position.BEFOREEND);
};

const renderLoadButton = () => {
  const loadButton = new LoadButton();
  render(tasksContainer, loadButton.getElement(), Position.BEFOREEND);
};

renderMenu();
renderSearch();
filterElements.forEach(renderFilter);
render(containerContent, containerFilters, Position.BEFOREEND);
renderBoardTask();

const tasksContainer = document.querySelector(`.board__tasks`);
tasksMock.forEach(renderTask);
renderLoadButton();


const renderComponent = (container, markup) => {
  container.insertAdjacentHTML(`beforeEnd`, markup);
};


// const containerContent = document.querySelector(`.main`);

// renderComponent(containerMenu, getMenuTemplate());
// renderComponent(containerContent, getSearchTemplate());
// renderComponent(containerContent, getFilters());
//
// if (renderedTasks.length > 0) {
//   renderComponent(containerContent, getBoardTasksTemplate());
//   const loadButton = document.querySelector(`.load-more`);
//
//   const renderTasksMore = () => {
//     loadButton.insertAdjacentHTML(`beforebegin`, renderTasks(renderedTasks, 0, 8));
//   };
//
//   // loadButton.addEventListener(`click`, () => {
//   //   renderTasksMore();
//   //   if (renderedTasks.length === 0) {
//   //     loadButton.style = `display: none`;
//   //   }
//   // });
// } else {
//   renderComponent(containerContent, noTasksTemplate);
// }
