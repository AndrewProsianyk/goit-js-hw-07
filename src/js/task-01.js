const amountOfCategories = document.querySelectorAll('.item')
console.log(`В списке ${amountOfCategories.length} категории.`)

const elements = amountOfCategories.forEach(element => {
    const firstEl = element.firstElementChild.textContent
    const lastEl = element.lastElementChild.children.length
    console.log(`Категория: ${firstEl}`)
    console.log(`Количество элементов: ${lastEl}`)
});