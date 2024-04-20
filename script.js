function getFormvalue() {
	let form = document.querySelector("#form1");
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        alert(firstName + " " + lastName);
    });
}
