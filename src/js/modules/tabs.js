const trigger = document.querySelectorAll('.menu');
const tab = document.querySelector('.table');

const tabs = () => {
    function bindTab(trigger, tab, close) {
        trigger.addEventListener('click', () => {
            tab.style.display = 'block';
        })
    }
};

export default tabs;