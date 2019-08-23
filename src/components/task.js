import {formatTime, formatDate} from './task-date';

const isRepeat = (repeatingsDays) =>
  Object.values(repeatingsDays).some((value) => value);

const renderTag = (tag) =>
  `<span class="card__hashtag-inner">
     <span class="card__hashtag-name">
       #${tag}
     </span>
   </span>`;

const renderTags = (tags) =>
  tags.map(renderTag).join(``);

const getTaskTemplate = ({
  color = `black`,
  description = ``,
  repeatingsDays = [],
  dueDate,
  tags = [],
  isArchive = false,
  isFavorite = false,
}) =>
  `<article class="card card--${color} ${isRepeat(repeatingsDays) ? `card--repeat` : ``}">
  <div class="card__form">
    <div class="card__inner">
      <div class="card__control">
        <button type="button" class="card__btn card__btn--edit">
          edit
        </button>
        <button type="button" class="card__btn ${isArchive ? `card__btn--archive` : ``}">
          archive
        </button>
        <button
          type="button"
          class="card__btn ${isFavorite ? `card__btn--favorites` : ``} card__btn--disabled"
        >
          favorites
        </button>
      </div>
      <div class="card__color-bar">
        <svg class="card__color-bar-wave" width="100%" height="10">
          <use xlink:href="#wave"></use>
        </svg>
      </div>
      <div class="card__textarea-wrap">
        <p class="card__text">${description}.</p>
      </div>
      <div class="card__settings">
        <div class="card__details">
          <div class="card__dates">
            <div class="card__date-deadline">
              <p class="card__input-deadline-wrap">
                <span class="card__date">${formatDate(new Date(dueDate))}</span>
                <span class="card__time">${formatTime(new Date(dueDate))}</span>
              </p>
            </div>
          </div>
          <div class="card__hashtag">
            <div class="card__hashtag-list">
              ${tags.length > 0 ? renderTags(tags) : ``}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
`;

export const noTasksTemplate = `
  <p class="board__no-tasks">
    Congratulations, all tasks were completed! To create a new click on
    «add new task» button.
  </p>`;

export const renderTasks = (tasks, begin, end) => {
  if (tasks.length > 0) {
    return tasks.splice(begin, end)
      .map(getTaskTemplate)
      .join(``);
  }
  return ``;
};
