export class Progress {
    constructor(svgElement) {
        this.svg = svgElement;
        this.progressCircle = this.svg.querySelector('circle:last-child');

        this.radius = this.progressCircle.r.baseVal.value;
        this.circumference = 2 * Math.PI * this.radius;

        this.progressCircle.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
        this.progressCircle.style.strokeDashoffset = `${this.circumference}`;

        this.value = 0;
        this.isAnimated = false;
        this.rotation = 0;
        this.animationFrame = null;
    }

    setValue(val) {
        this.value = Math.max(0, Math.min(100, val));
        this.progressCircle.style.strokeDashoffset = `${this.circumference - (this.value / 100) * this.circumference}`;
    }

    setAnimated(flag) {
        this.isAnimated = flag;
        if (flag) this.animate();
        else {
            cancelAnimationFrame(this.animationFrame);
            this.rotation = 0;
            this.svg.style.transform = `rotate(-90deg)`;
        }
    }

    setHidden() {
        this.svg.parentElement.classList.toggle('hidden');
    }

    animate() {
        if (!this.isAnimated) return;
        this.rotation += 2;
        this.svg.style.transform = `rotate(${this.rotation - 90}deg)`;
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }
}
