const filterItems = (filter) => {
    const items = document.querySelectorAll('.store-item');
    items.forEach(item => {
        item.setAttribute('style', 'display: block');
        if (filter === 'all') {
            return;
        }
        if (!item.classList.contains(filter)) {
            item.setAttribute('style', 'display: none');
        }
    });
}

/* filter buttons */
let filterdiv = document.querySelector('.sortBtn');
filterdiv.querySelectorAll('.sortBtn > .btn').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        filterItems(item.dataset.filter);
    })
});