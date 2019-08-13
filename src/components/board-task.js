import {getTaskTemplate} from './task';
import {getFormTemplate} from './form';
import {getLoadButtonTemplate} from './button-load';
import {getTask} from './data';

const getTasksArray = (count) => {
  const tasksArray = [];
  for (let i = 0; i <= count; i++) {
    tasksArray.push(getTask());
  }
  return tasksArray;
};

const renderTasks = (tasks) => {
  return tasks.map((task) => {
    return getTaskTemplate(task);
  }).join(``);
};

const tasks = getTasksArray(8);

const getBoardTasksTemplate = () => `
<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks">
    ${getFormTemplate()}
    ${renderTasks(tasks)}
    ${getLoadButtonTemplate()}
  </div>
</section>
`;

export {tasks, getBoardTasksTemplate};
