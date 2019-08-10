import {getTaskTemplate} from './task.js';
import {getFormTemplate} from './form.js';
import {getButtonLoadTemplate} from './button-load.js';

export const getBoardTasksTemplate = () => `
<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks">
    ${getFormTemplate()}
    ${getTaskTemplate()}
    ${getTaskTemplate()}
    ${getTaskTemplate()}
    ${getButtonLoadTemplate()}
  </div>
</section>
`;
