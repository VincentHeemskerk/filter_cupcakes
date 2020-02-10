const items = document.querySelectorAll('.store-item');

const resetFilters = () => {
    items.forEach(item => {
        item.setAttribute('style', 'display: block');
    });
}

const filterItems = (filter) => {
    resetFilters();
    items.forEach(item => {
        if (filter === 'all') {
            return;
        }
        if (!item.classList.contains(filter)) {
            item.setAttribute('style', 'display: none');
        }
    });
}

/* filter buttons */
const filterdiv = document.querySelector('.sortBtn');
filterdiv.querySelectorAll('.sortBtn > .btn').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        filterItems(item.dataset.filter);
    });
});

const filterItemsByString = (filter) => {
    const names = document.querySelectorAll('#store-item-name');
    names.forEach(item => {
        console.log(item.innerHTML);
        if (!item.innerHTML.includes(filter)) {
            item.closest('.store-item').setAttribute('style', 'display: none');
        }
    })
}

/* search bar */
(() => {
    const searchBar = document.querySelector('#searchbar');
    searchBar.addEventListener('input', event => {
        resetFilters();
        let searchString = searchBar.value;
        filterItemsByString(searchString);
    });
})();