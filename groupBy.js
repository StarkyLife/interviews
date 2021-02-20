/* Из массива объектов получить объект с ключами равными выбранному
    свойству из списка объекта
    output:
        {
            1: { city: 'Москва', id: '1' },
            2: { city: 'Санкт-Петербург', id: '2' },
            3: { city: 'Казань', id: '3' },
        }
*/

const exampleArr = [
    { city: 'Москва', id: '1', },
    { city: 'Санкт-Петербург', id: '2', },
    { city: 'Казань', id: '3', },
]

function groupBy(arr, key) {
    // code here
};

const cities = groupBy(exampleArr, 'id');

cities['1'].city  === 'Москва'