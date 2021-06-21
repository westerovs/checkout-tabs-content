/*
1 способ
Алгоритм:
    1 Устанавливаем active классы вручную на кнопку и на блок-контента
    2 Скрываем в CSS все блоки контента, кроме активного
    3 в JS обрабатываем клик по кнопкам
    4 При клике:
        - проверяем содержание active класса, что бы избежать лишних вызовов ф-ций
        - очищаем циклом все active - классы у кнопок и у блок-контента
            для этого напишем функцию очистки классов
        - устанавливаем новый активный класс
            для этого напишем функцию установки активного класса
*/

const tabItems = document.querySelectorAll('.bestiary__item')
const contentItems = document.querySelectorAll('.bestiary__content-item')

const clearActiveClass = (element, className = 'is-active') => {
    element.forEach(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
    element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('is-active')) return
        
        const currentItem = index
        
        clearActiveClass(tabItems)
        clearActiveClass(contentItems)
        
        setActiveClass(tabItems, currentItem)
        setActiveClass(contentItems, currentItem)
    })
}

tabItems.forEach(checkoutTabs)
