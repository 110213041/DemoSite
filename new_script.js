// disable right click menu
window.oncontextmenu = (e) => {
    e.preventDefault();
}

const catID = document.getElementById("cat-btn");
const catClass = catID.classList;

function updatePopCount() {
    document.getElementById("pop-counter").innerHTML = localStorage.popCount;
}

catID.addEventListener("mousedown", e => {
    const popSound = new Audio("pop.ogg");
    catClass.replace("cat-close", "cat-open");
    popSound.play()
    localStorage.popCount = Number(localStorage.popCount) + 1;
    updatePopCount()
});

// shut her mouth
const closeTheCat = () => {
    catClass.replace("cat-open", "cat-close");
}

// reset the counter
const resetPopCount = () => {
    localStorage.popCount = 0;
    updatePopCount()
}

function main() {
    // create popCount for new visitor
    if (!localStorage.popCount) {
        localStorage.popCount = 0;
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
}

main()