import {renderTasks} from './task';
import {getFormTemplate} from './form';
import {getLoadButtonTemplate} from './button-load';
import {tasksRendered} from './data';

const getBoardTasksTemplate = () => `
<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks">
    ${getFormTemplate(tasksRendered.shift())}
    ${renderTasks(tasksRendered, 0, 7)}
    ${getLoadButtonTemplate()}
  </div>
</section>
`;

export {getBoardTasksTemplate};
