/* let mas = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ]; */



export function lifeTop (mas) {

    //сортировка
    let stat = false;
    while (stat == false) {
        stat = true;
        for (let i=0; i<mas.length-1; i++) {
            if (mas[i].health < mas[i+1].health) {
                stat = false;
                let a = mas[i];
                mas[i]= mas[i+1];
                mas[i+1] = a;
            }
        }
    }

    //возврат
    return mas;
}