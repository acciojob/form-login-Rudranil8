function getFormvalue() {
	event.preventDefault();
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;

    alert(firstName + " " + lastName);
}
