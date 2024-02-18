localStorage.setItem("ui-theme", "light");

const elements = {
    formEl: document.querySelector(".js-feedback-form"),
    inputEl: document.querySelector(".js-feedback-form input"),
    textAreaEl: document.querySelector(".js-feedback-form textarea"),

}

getValueFromLocalStorage();

elements.textAreaEl.addEventListener("input", saveTextArea);
elements.formEl.addEventListener("submit", handleFormSubmit);
elements.formEl.addEventListener("input", handleInputValue);

function saveTextArea(event) {
    const textAreaValue = event.target.value;
    localStorage.setItem("text-area", textAreaValue)
}

function getValueFromLocalStorage() {
    const comment = localStorage.getItem("text-area");

    if (!comment) {
        return
    }

    elements.textAreaEl.textContent = comment;
}

function handleFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();

    localStorage.removeItem("text-area");

}

const formData = {};

function handleInputValue(event) {

    formData[event.target.name] = event.target.value;

    localStorage.setItem("info", JSON.stringify(formData));
}