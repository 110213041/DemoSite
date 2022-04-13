// disable right click menu
window.oncontextmenu = (e) => {
    e.preventDefault();
}

const catClass = document.getElementById("cat-btn").classList;

// create popCount for new visitor
if (!localStorage.popCount) {
    localStorage.popCount = 0;
}

function updatePopCount() {
    document.getElementById("pop-counter").innerHTML = localStorage.popCount;
}

// No cookies alert box
if (!sessionStorage.isViewed || !Boolean(sessionStorage.isViewed)) {
    alert("Our website don't use cookies!");
    sessionStorage.isViewed = true;
    // update the beginning number, 0 if new visitor.
    updatePopCount()
} else {
    updatePopCount()
}

// click the cat, open her mouth.
const popTheCat = () => {
    catClass.replace("cat-close", "cat-open");
    localStorage.popCount = Number(localStorage.popCount) + 1;
    updatePopCount()
}

// shut her mouth
const closeTheCat = () => {
    catClass.replace("cat-open", "cat-close");
}

// reset the counter
const resetPopCount = () => {
    localStorage.popCount = 0;
    updatePopCount()
}
