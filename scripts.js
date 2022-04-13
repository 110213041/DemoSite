window.oncontextmenu = (e) => {
    e.preventDefault();
}

const catClass = document.getElementById("cat-btn").classList;

if (!localStorage.popCount) {
    localStorage.popCount = 0;
}

function updatePopCount() {
    document.getElementById("pop-counter").innerHTML = localStorage.popCount;
}

updatePopCount()

const popTheCat = () => {
    catClass.replace("cat-close", "cat-open");
    localStorage.popCount = Number(localStorage.popCount) + 1;
    updatePopCount()
}

const closeTheCat = () => {
    catClass.replace("cat-open", "cat-close");
}

const resetPopCount = () => {
    localStorage.popCount = 0;
    updatePopCount()
}
