const tabs = (headerSelector, tabSelector, contentSelector, clazz, isFlex) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector),
        activeClass = document.querySelector(clazz);

    function hideTab() {
        tab.forEach(tab => {
            tab.classList.remove(activeClass)
        })

        content.forEach(item => {
            item.style.display = "none";
        })
    }

    function showTab(i = 0) {
        tab[i].classList.add(activeClass);
        isFlex ? content[i].style.display = "flex" : item.style.display = "block";
    }

    hideTab();
    showTab();

};

export default tabs;