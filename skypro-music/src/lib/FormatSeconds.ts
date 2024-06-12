export function FormatSeconds(inputSec: number | undefined) {
    if (inputSec !== undefined) { // проверяем, что inputSec определен
      let minutes = Math.floor(inputSec / 60);
      let seconds = Math.floor(inputSec) - minutes * 60;
      return `${minutes}:${seconds > 9 ? "":"0"}${seconds}`;
    } else {
      return ''; // возвращаем пустую строку, если inputSec не определен
    }
  }