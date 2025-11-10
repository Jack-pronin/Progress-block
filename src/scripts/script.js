import { Progress } from './progress.js';

window.onload = function () {
    const svgElement = document.querySelector('#progress__block svg');
    const progress = new Progress(svgElement);

    const valueInput = document.getElementById('value-input');
    const animateToggle = document.getElementById('animate-toggle');
    const hideToggle = document.getElementById('hide-toggle');

    progress.setValue(valueInput.value);

    valueInput.addEventListener('input', (e) => {
        progress.setValue(Number(e.target.value));
    });

    animateToggle.addEventListener('change', (e) => {
        progress.setAnimated(e.target.checked);
    });

    hideToggle.addEventListener('change', (e) => {
        progress.setHidden(e.target.checked);
    });
}