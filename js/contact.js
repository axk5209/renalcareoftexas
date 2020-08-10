if ( window.history.replaceState ) {
	window.history.replaceState( null, null, window.location.href );
}

const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")
const submitButton = document.getElementById("cf-submit")
const messageBlock = document.getElementById("message-block")
function submitContactForm (event) {
	event.preventDefault()
	submitButton.innerText = "Sending..."
	submitButton.disabled = true
	const body = `
					<html>
						<span style = "font-size:large;font-weight:bold;">Message</span>
						<br>
						<span style = "font-size:large">${message.value}</span>
						<br>
						<br>
						<br>
						<br>
						<span style = "font-size:medium;font-weight:bold;">Sender Details</span>
						<br>
						<span style = "font-style: italic;font-size:medium">Name: </span>
						<span style = "font-size:medium">${name.value}</span>
						<br>
						<span style = "font-style: italic;font-size:medium">Email: </span>
						<span style = "font-size:medium">${email.value}</span>
						<br>
						<span style = "font-style: italic;font-size:medium">Phone Number: </span>
						<span style = "font-size:medium">${phone.value}</span>
						
					</html>`
	console.log(body)

	Email.send({
		Host : "smtp.gmail.com",
		Username : "renalcarelandingpage@gmail.com",
		Password : "Renal@Texas2020",
		To : 'renalcareoftexas@gmail.com',
		From : "renalcarelandingpage@gmail.com",
		Subject : "Landing Page Contact Request",
		Body : body
	}).then(() => {
		name.value = ""
		email.value = ""
		phone.value = ""
		message.value = ""
		messageBlock.style.display = "block"
		submitButton.innerText = "Submit"
		submitButton.disabled = false
	}
	);
}