// import './modules/tabs';

const trigger = document.querySelectorAll('.menu');
const tab = document.querySelector('.table');


console.log(trigger);

const openTab = (e) => {
    e.preventDefault();
    let target = e.target;
    console.log(target);
}

const closeTab = (e)=> {
    let target = e.target;
    console.log(target.children);
    if (target !== tab && target !== tab.children) {
        tab.forEach(item => {
            item.classList.remove('active');
        })
    }
}

trigger.forEach(item => {
    item.addEventListener('click', (e) => openTab(e))
})

tab.addEventListener('click', (e) => closeTab(e));
