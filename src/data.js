import {
  TaskDay,
  TaskColor
} from './constants';

import {Position, render} from './utils';

import {Task} from './components/task';
import {TaskEdit} from './components/task-edit';

const DESCRIPTIONS = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const TIME_WEEK = 7 * 24 * 60 * 60 * 1000;
const TIME_DAY = 24 * 60 * 60 * 1000;
const TASKS_AMOUNT = 16;

const colors = Object.values(TaskColor);

const shuffleArray = (array) => {
  let j;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const getRandonNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getRandomDate = () =>
  Date.now() - getRandonNumber(0, TIME_WEEK);

const getRandomBoolean = (chance = 0.5) =>
  Math.random() > chance;

const days = Object.values(TaskDay);

const repeatDayReducer = (weekdays, day) => {
  weekdays[day] = getRandomBoolean();
  return weekdays;
};

const getRepeatingDays = () =>
  days.reduce(repeatDayReducer, {});

const getRandomTags = ([...tags], num = getRandonNumber(0, 3)) =>
  shuffleArray(tags).slice(0, num);

const getTask = () => ({
  description: getRandomItem(DESCRIPTIONS),
  dueDate: getRandomDate(),
  repeatingsDays: getRepeatingDays(),
  tags: getRandomTags(TAGS),
  color: getRandomItem(colors),
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean()
});

const getTasks = (count) =>
  new Array(count).fill(null).map(getTask);


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

    console.log(task.getElement());

  // console.log(render(tasksContainer, task.getElement(), Position.BEFOREEND));
  tasksContainer.appendChild(task.getElement());
  render(tasksContainer, task.getElement(), Position.BEFOREEND);
};

export const tasksMock = new Array(TASKS_AMOUNT)
  .fill(``)
  .map(getTask);

const tasksContainer = document.createElement(`div`);
tasksContainer.className = `board__tasks`;

// const tasksContainer = document.querySelector(`.board__tasks`);

// console.log(tasksContainer);
// containerContent.insertAdjacentHTML(`beforeEnd`, tasksContainer);

// renderTask(tasksMock[0]);

tasksMock.forEach(renderTask);

console.log(tasksContainer);

const containerContent = document.querySelector(`.main`);
render(containerContent, tasksContainer, Position.BEFOREEND);
// containerContent.appendChild(tasksContainer);

export {TIME_DAY};
export const tasks = getTasks(TASKS_AMOUNT);
export const renderedTasks = tasks.slice();
