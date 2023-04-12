import Footer from "./Footer";

const priceRuUa = 0.05;
const priceEng = 0.12;
// UTC hours +0
const startingHour = 8;
const endingHour = 17;

export function calcPrice(language, mimetype, count) {
  let totalPrice = 0;
  switch (true) {
    case language == "ru":
    case language == "ua":
      totalPrice = priceRuUa * count;
      if (totalPrice < 50) totalPrice = 50;
      break;
    case language == "en":
      totalPrice = priceEng * count;
      if (totalPrice < 120) totalPrice = 120;
      break;
    default:
      totalPrice = "Language error";
  }

  if (typeof totalPrice === "string") return totalPrice;

  switch (true) {
    case mimetype == "doc":
    case mimetype == "docx":
    case mimetype == "rtf":
      return totalPrice;
    case mimetype == "other":
      totalPrice = totalPrice * 1.2;
      return totalPrice;
    default:
      totalPrice = "Doctype error";
      return totalPrice;
  }
}
export function calcTime(language, mimetype, count) {
  let totalTime = 0;
  switch (true) {
    case language == "ru":
    case language == "ua":
      totalTime = 1800000 + 3600000 * (count / 1333);
      if (totalTime < 3600000) totalTime = 3600000;
      break;
    case language == "en":
      totalTime = 1800000 + 3600000 * (count / 333);
      if (totalTime < 3600000) totalTime = 3600000;
      break;
    default:
      totalTime = "Language error";
  }
  if (typeof totalTime === "string") return totalTime;

  switch (true) {
    case mimetype == "doc":
    case mimetype == "docx":
    case mimetype == "rtf":
      break;
    case mimetype == "other":
      totalTime = totalTime * 1.2;
      break;
    default:
      totalTime = "Doctype error";
  }
  return totalTime;
}
// проверить рабочее ли время
function isWorkingHours(date) {
  // создает объект Даты из милисекунд, переданных в date
  const dateForCheck = new Date(date);
  // Метод getUTCHours() возвращает час (от 0 до 23) указанной даты и времени в соответствии с универсальным временем.
  // получаем часы по универсальному времени
  const curHour = dateForCheck.getUTCHours();
  // (текущее время часы >= 8 И текущее время часы < 17)
  // между 8 и 17 - true
  if (curHour >= startingHour && curHour < endingHour) return true;
  return false;
}
// проверить рабочий ли это день
function isWorkingDay(date) {
  // создает объект Даты из милисекунд, переданных в date
  const dateForCheck = new Date(date);
  // Метод getUTCDay() возвращает день недели (от 0 до 6) для указанной даты в соответствии с универсальным временем.
  const curDay = dateForCheck.getUTCDay();
  // 6 - saturday, 0 - sunday
  // если возвращается 0 или 6 те суббота или воскресенье, то вернуть false
  if (curDay === 6 || curDay === 0) return false;
  return true;
}

// сдвинуть текущую дату (милисекунды) на один день вперед и установить начало рабочего дня - получаем результат в милисекундах
function shiftDayAndSetWorkingHour(date) {
  // создает объект Даты из милисекунд, переданных в date
  let shiftedDate = new Date(date);
  // Метод setUTCDate() устанавливает день месяца в соответствии с временем UTC.
  // Прибавляем к получаемой дате один ДЕНЬ
  shiftedDate.setUTCDate(shiftedDate.getUTCDate() + 1);
  // Метод setUTCHours() устанавливает час объекта date в соответствии с временем UTC.
  // Date.setUTCHours(hour, min, sec)
  shiftedDate.setUTCHours(startingHour, 0, 0);
  // Метод getTime() возвращает количество миллисекунд между полуночью 1 января 1970 года и указанной датой.
  // возвращаем новую дату в милисекундах
  return shiftedDate.getTime();
}
// расчет времени до конца раб дня с момента переданного в date 
function calcTimeInMSForTheEndOfTheDay(date) {
  // создает объект Даты из милисекунд, переданных в date
  const checkedDate = new Date(date);
  // Метод getTime() возвращает количество миллисекунд между полуночью 1 января 1970 года и указанной датой.
  const curTime = checkedDate.getTime();
  // Метод setUTCHours() устанавливает час объекта date в соответствии с временем UTC.
  // устанавливается время 17:00 - конец раб дня
  const endOfDay = checkedDate.setUTCHours(endingHour, 0, 0);
  // разница между концом рабочего дня и текущим моментом
  return endOfDay - curTime;
}
// расчет дэдлайна
// timeForWorkInMS - расчет времени в calcTime (время необходимое для выполнения заказа работы)
// dateNow - текущая дата
export function calcDeadline(timeForWorkInMS, dateNow) {
  // это тайм стамп в милисекундах (пример - 1623822732)
  let deadlineTimestamp = 0;
  // дэдлайн дата написанная строкой (пример - "10/10/2021 12:00:00")
  let deadlineDate = "";

  // пока время необходимое для выполнения заказа работы не равно 0
  while (timeForWorkInMS != 0) {
    // проверяем рабочий ли это день, если нет, сдвигаем дату
    if (!isWorkingDay(dateNow)) {
      dateNow = shiftDayAndSetWorkingHour(dateNow);
      continue;
    }
    // проверяем рабочий ли это час, если нет, сдвигаем дату
    if (!isWorkingHours(dateNow)) {
      dateNow = shiftDayAndSetWorkingHour(dateNow);
      continue;
    }
    // если время необходимое для выполнения заказа работы меньше времени до конца рабочего дня, то находим дэдлайн и выходим из цикла. 
    if (timeForWorkInMS <= calcTimeInMSForTheEndOfTheDay(dateNow)) {
      deadlineTimestamp = dateNow + timeForWorkInMS;
      deadlineDate =
        new Date(deadlineTimestamp).getUTCDate() +
        "/" +
        (new Date(deadlineTimestamp).getUTCMonth() + 1) +
        "/" +
        new Date(deadlineTimestamp).getUTCFullYear() +
        " " +
        new Date(deadlineTimestamp).getUTCHours() +
        ":" +
        new Date(deadlineTimestamp).getUTCMinutes() +
        ":" +
        new Date(deadlineTimestamp).getUTCSeconds();
      break;
    }
    // если это рабочий день и рабочий час, но времени на выполнение работы требуется больше чем до конца дня
    // отнимаем от времени необходимого для выполнения работы время до конца раб дня и перезаходим в цикл
    // сдвигаем дату на следующий день
    timeForWorkInMS = timeForWorkInMS - calcTimeInMSForTheEndOfTheDay(dateNow);
    dateNow = shiftDayAndSetWorkingHour(dateNow);
  }
  // возвращаем время в милисекундах и время строкой (надо по заданию)
  return { deadlineTimestamp, deadlineDate };
}
