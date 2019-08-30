// import {renderTasks, Task} from './task';
import {getFormTemplate} from './task-edit';
import {getLoadButtonTemplate} from './button-load';
import {renderedTasks, tasksMock, renderTask} from '../data';
import {createElement} from '../utils';

class BoardTask {
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<section class="board container">
      <div class="board__filter-list">
        <a href="#" class="board__filter">SORT BY DEFAULT</a>
        <a href="#" class="board__filter">SORT BY DATE up</a>
        <a href="#" class="board__filter">SORT BY DATE down</a>
      </div>
      <div class="board__tasks">
      </div>
    </section>`;
  }
}

export {BoardTask};

const getBoardTasksTemplate = () => `
<section class="board container">
  <div class="board__filter-list">
    <a href="#" class="board__filter">SORT BY DEFAULT</a>
    <a href="#" class="board__filter">SORT BY DATE up</a>
    <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>
  <div class="board__tasks">


  </div>
</section>
`;

// ${tasksMock.forEach(renderTask)}
// ${getLoadButtonTemplate()}

export {getBoardTasksTemplate};

// ${getFormTemplate(renderedTasks.shift())}
// ${renderTasks(renderedTasks, 0, 7)}
