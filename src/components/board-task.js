// import {renderTasks, Task} from './task';
import {getFormTemplate} from './task-edit';
import {getLoadButtonTemplate} from './button-load';
import {renderedTasks, tasksMock, renderTask} from '../data';

const getBoardTasksTemplate = () => `
<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks">

    ${tasksMock.forEach(renderTask)}
    ${getLoadButtonTemplate()}
  </div>
</section>
`;

export {getBoardTasksTemplate};

// ${getFormTemplate(renderedTasks.shift())}
// ${renderTasks(renderedTasks, 0, 7)}
