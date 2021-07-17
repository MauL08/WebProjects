function input(number) {
    document.form.view.value =  document.form.view.value + number;
}
function equal() {
    document.form.view.value = eval(document.form.view.value);
}
function clean() {
    document.form.view.value = "";
}