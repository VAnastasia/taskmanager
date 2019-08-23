import {
  TaskDay,
  TaskColor
} from './constants';

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

export {TIME_DAY};
export const tasks = getTasks(TASKS_AMOUNT);
export const renderedTasks = tasks.slice();
