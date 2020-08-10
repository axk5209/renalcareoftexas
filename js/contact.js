// const contactForm = document.getElementById("reach-form")
// contactForm.addEventListener("submit", (event) =>
// {
// 	console.log("submitted")
// 	return false
// 	// event.preventDefault()

// 	// const name = document.getElementById("name")
// 	// const email = document.getElementById("email")
// 	// const phone = document.getElementById("phone")
// 	// const message = document.getElementById("message")

// 	// console.log(name.value)
// 	// console.log(email.value)
// 	// console.log(phone.value)
// 	// console.log(message.value)

// 	// name.value = ""
// 	// email.value = ""
// 	// phone.value = ""
// 	// message.value = ""

	
// 	// console.log("submitted")
// })



// const submitButton = document.getElementById("cf-submit")
// submitButton.addEventListener("click", (event) =>
// {
// 	console.log("submitted")
// 	// event.preventDefault()

// 	// const name = document.getElementById("name")
// 	// const email = document.getElementById("email")
// 	// const phone = document.getElementById("phone")
// 	// const message = document.getElementById("message")

// 	// console.log(name.value)
// 	// console.log(email.value)
// 	// console.log(phone.value)
// 	// console.log(message.value)

// 	// name.value = ""
// 	// email.value = ""
// 	// phone.value = ""
// 	// message.value = ""

	
// 	// console.log("submitted")
// })

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
	console.log(name.value)
	console.log(email.value)
	console.log(phone.value)
	console.log(message.value)
						
						// <span style = "font-size:medium">Dear Renal Care, </span>
						// <br>
						// <br>
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
	//const body = `Name: ${name.value}\n\nEmail: ${email.value}\n\nPhone Number: ${phone.value}\n\nMessage: ${message.value}`
	console.log(body)

	Email.send({
		Host : "smtp.gmail.com",
		Username : "renalcarelandingpage@gmail.com",
		Password : "Renal@Texas2020",
		To : 'axk45209@gmail.com',
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


	// setTimeout(() => {
	// 	name.value = ""
	// 	email.value = ""
	// 	phone.value = ""
	// 	message.value = ""
	// 	messageBlock.style.display = "block"
	// 	submitButton.innerText = "Submit"
	// 	submitButton.disabled = false
	// }, 5000)


}