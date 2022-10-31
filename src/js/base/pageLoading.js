import fetchApiWeek from '../fetch/fetchApiWeek';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
// import putSettings from './putSettings';
import { spinner } from './spinner';
import { cards, settings } from './refs'

/* Функция pageLoading на входе принимает значение страници которое запрашивает на сервере и рендерит в блоке Hero карточки фильмов ТОП за Week и пагинацию */
export default function pageLoading(page = 1) {
  spinner('start');
  fetchApiWeek(page)
    .then(data => {
      spinner('stop');
      cards.arr = data.results
      renderCardsHero();
      return data;
    })
    .then(data => {
      renderPagination(data.total_pages, data.page);
      settings.fetch = "Week";
      settings.page = data.page
      // putSettings(data.page, "Week")
      return data;
    });
}
