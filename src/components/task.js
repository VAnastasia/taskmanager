import {formatTime, formatDate} from './task-date';
import {createElement} from '../utils';

class Task {
  constructor({color = `black`, description = ``, repeatingsDays = [], dueDate, tags = [], isArchive = false, isFavorite = false}) {
    this._description = description;
    this._dueDate = new Date(dueDate);
    this._tags = tags;
    this._color = color;
    this._element = null;
    this._repeatingDays = repeatingsDays;
    this._isArchive = isArchive;
    this._isFavorite = isFavorite;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    return `<article class="card card--${this._color} ${this._repeatingDays. length > 0 && Object.values(this._repeatingsDays).some((day) => day) ? `card--repeat` : ``}">
    <div class="card__form">
      <div class="card__inner">
        <div class="card__control">
          <button type="button" class="card__btn card__btn--edit">
            edit
          </button>
          <button type="button" class="card__btn ${this._isArchive ? `card__btn--archive` : ``}">
            archive
          </button>
          <button
            type="button"
            class="card__btn ${this._isFavorite ? `card__btn--favorites` : ``} card__btn--disabled"
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
          <p class="card__text">${this._description}.</p>
        </div>
        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <div class="card__date-deadline">
                <p class="card__input-deadline-wrap">
                  <span class="card__date">${formatDate(new Date(this._dueDate))}</span>
                  <span class="card__time">${formatTime(new Date(this._dueDate))}</span>
                </p>
              </div>
            </div>
            <div class="card__hashtag">
              <div class="card__hashtag-list">
              ${(Array.from(this._tags).map((tag) => (
    `<span class="card__hashtag-inner">
        <input type="hidden" name="hashtag" value="${tag}" class="card__hashtag-hidden-input" />
        <button type="button" class="card__hashtag-name">#${tag}</button>
        <button type="button" class="card__hashtag-delete">delete</button>
      </span>`.trim()
  ))).join(``)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>`;
  }
}

export {Task};

const checkRepeating = (repeatingsDays) =>
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
  isFavorite = false
}) =>
  `<article class="card card--${color} ${checkRepeating(repeatingsDays) ? `card--repeat` : ``}">
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
