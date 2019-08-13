const DESCRIPTIONS = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];
const DAYS_WEEK = 7;
const DAYS_FORTNIGHT = 14;
const MS_DAY = 24 * 60 * 60 * 1000;

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

const getRandomItemArray = (array) => array[Math.floor(Math.random() * array.length)];
const getDate = () => {
  return Date.now() - (DAYS_WEEK * MS_DAY) + (Math.ceil(Math.random() * DAYS_FORTNIGHT) * MS_DAY);
};

const getRepeatingDays = () => ({
  'mo': Boolean(Math.round(Math.random())),
  'tu': Boolean(Math.round(Math.random())),
  'we': Boolean(Math.round(Math.random())),
  'th': Boolean(Math.round(Math.random())),
  'fr': Boolean(Math.round(Math.random())),
  'sa': Boolean(Math.round(Math.random())),
  'su': Boolean(Math.round(Math.random()))
});

const getTags = () => {
  const count = Math.round(Math.random() * 3);
  const tagsArray = shuffleArray(TAGS);
  const randomTags = new Array(count)
    .fill()
    .map((item, ind) => tagsArray[ind]);
  const tags = new Set(randomTags);
  return tags;
};

const getTask = () => ({
  description: getRandomItemArray(DESCRIPTIONS),
  dueDate: getDate(),
  repetingsDay: getRepeatingDays(),
  tags: getTags(),
  color: getRandomItemArray(COLORS),
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random()))
});

export {getTask};
