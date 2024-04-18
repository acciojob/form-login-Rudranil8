function getFormvalue() {
	let form = document.querySelector("#myForm");
	form.addEventListener('submit', getFormValue);
	event.preventDefault();
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;

    alert(firstName + " " + lastName);
}
