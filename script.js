const search = document.querySelector(".search");
const closebtn = document.querySelector(".close");
const input = document.querySelector("input");
const thirdSlash = document.querySelector(".third-slash");
const wrapper = document.querySelector(".wrapper")


document.addEventListener("click", (e) => {
    if (e.target === search) {
        search.classList.add("width-change");
        closebtn.classList.remove("hidden");
        input.classList.remove("hidden");
        thirdSlash.classList.add("hidden");
    }
    if (e.target.parentElement === closebtn || e.target === closebtn) {
        search.classList.remove("width-change");
        closebtn.classList.add("hidden");
        input.classList.add("hidden");
        thirdSlash.classList.remove("hidden");
        thirdSlash.classList.add("third-slash-animation");
        wrapper.classList.remove("posicion-wrapper-change");
    }
    if (e.target === input) {
        wrapper.classList.add("posicion-wrapper-change");
    }
})