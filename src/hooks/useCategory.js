export const translateToUk = name => {
  switch (name.trim()) {
    case 'Products':
      return 'Продукти';
    case 'Alcohol':
      return 'Алкоголь';
    case 'Entertainment':
      return 'Разваги';
    case 'Health':
      return "Здоров'я";
    case 'Transport':
      return 'Транспорт';
    case 'Housing':
      return 'Все для дому';
    case 'Technique':
      return 'Техніка';
    case 'Communal, communication':
      return "Комунальні платежі та зв'язок";
    case 'Sports, hobbies':
      return 'Спорт та хоббі';
    case 'Education':
      return 'Освіта';
    case 'Other':
      return 'Інше';
    case 'Salary':
      return 'Заробітна плата';
    case 'Additional income':
      return 'Додатковий дохід';
    default:
      break;
  }
};

export const translateToEng = name => {
  switch (name.trim()) {
    case 'Продукти':
      return 'Products';
    case 'Алкоголь':
      return 'Alcohol';
    case 'Разваги':
      return 'Entertainment';
    case "Здоров'я":
      return 'Health';
    case 'Транспорт':
      return 'Transport';
    case 'Все для дому':
      return 'Housing';
    case 'Техніка':
      return 'Technique';
    case "Комунальні платежі та зв'язок":
      return 'Communal, communication';
    case 'Спорт та хоббі':
      return 'Sports, hobbies';
    case 'Освіта':
      return 'Education';
    case 'Інше':
      return 'Other';
    case 'Заробітна плата':
      return 'Salary';
    case 'Додатковий дохід':
      return 'Additional income';
    default:
      break;
  }
};
