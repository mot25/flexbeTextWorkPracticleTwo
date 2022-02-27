
const button = document.querySelectorAll('.button')
const cursor = document.querySelector('.cursor')

button.forEach(el => el.addEventListener('mousemove', function (e) {
    const pos = this.getBoundingClientRect();
    const mx = e.clientX - pos.left - pos.width / 2;
    const my = e.clientY - pos.top - pos.height / 2;

    this.style.transform = 'translate(' + mx * 1.15 + 'px, ' + my * 1.3 + 'px)';
    this.style.transform += 'rotate3d(' + mx * -1.1 + ', ' + my * -1.3 + ', 0, 12deg)';
    this.children[0].style.transform = 'translate(' + mx * 1.025 + 'px, ' + my * 1.075 + 'px)';
}));

button.forEach(el => el.addEventListener('mouseleave', function () {
    this.style.transform = 'translate3d(0px, 0px, 0px)';
    this.style.transform += 'rotate3d(0, 0, 0, 0deg)';
    this.children[0].style.transform = 'translate3d(0px, 0px, 0px)';
}));

// --- CURSOR
