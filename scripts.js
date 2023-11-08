let currentDate = new Date()
let day = String(currentDate.getDate()).padStart(2, '0')
let month = String(currentDate.getMonth() + 1).padStart(2, '0')
let year = currentDate.getFullYear()

currentDate = year + '-' + month + '-' + day

document.getElementById('date').value = currentDate

document
	.getElementById('inventoryForm')
	.addEventListener('submit', function (event) {
		event.preventDefault()

		let date = document.getElementById('date').value
		let containerNumber = document.getElementById('container-number').value
		let bookingNumber = document.getElementById('booking-number').value

		document.getElementById('tableTitle').innerHTML =
			'Container Number: ' + containerNumber
		document.getElementById('tableSubtitle').innerHTML =
			'Booking Number: ' + bookingNumber
		document.getElementById('tableDate').innerHTML = 'Date: ' + date
	})

function addEntryToTable() {
	const tbody = document
		.getElementById('entries-table')
		.getElementsByTagName('tbody')[0]

	const newRow = tbody.insertRow()

	const jobNumber = document.getElementById('job-number').value
	const customerName = document.getElementById('customer-name').value
	const quantity = document.getElementById('quantity').value
	const manufacturer = document.getElementById('manufacturer').value
	const description = document.getElementById('description').value
	const orderNumber = document.getElementById('order-number').value
	const notes = document.getElementById('notes').value

	newRow.insertCell(0).innerText = jobNumber
	newRow.insertCell(1).innerText = customerName
	newRow.insertCell(2).innerText = quantity
	newRow.insertCell(3).innerText = manufacturer
	newRow.insertCell(4).innerText = description
	newRow.insertCell(5).innerText = orderNumber
	newRow.insertCell(6).innerText = notes

	document.getElementById('inventoryForm').reset()
}
