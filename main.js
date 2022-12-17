// @ts-nocheck
let contacts = []
let contact = {}


/**
 * Called when submitting the new Contact Form^^
 * This method will pull data from the form^^
 * use the provided function to give the data an id^^
 * then add that data to the contacts list.^^
 * Then reset the form^^
 * *** hints:
 * *** push: resources/push.jpg
 */
function addContact(event) {
  event.preventDefault()
  let form = event.target
  contact = {
    contactName: form.name.value,
    contactNumber: form.phoneNumber.value,
    emergencyContact: form.emergencyContact.checked,
    contactId: generateId()
  }
  contacts.push(contact)
  console.log(contact);
  saveContacts()
  form.reset()
}

/**
 * Converts the contacts array to a JSON string then
 * Saves the string to localstorage at the key contacts 
 */
function saveContacts() {
  window.localStorage.setItem("contacts", JSON.stringify(contacts))
}

/**
 * Attempts to retrieve the contacts string from localstorage
 * then parses the JSON string into an array. Finally sets
 * the contacts array to the retrieved array
 */
function loadContacts() {
  let contactsData = JSON.parse(window.localStorage.getItem("contacts"))
  if(contactsData){
    contacts = contactsData
    
  }
  
}

/**
 * This function targets the contacts-list on the 
 * DOM and adds a new div element for each of the
 * contacts in the contacts array
 */
function drawContacts() {
  let contactListElement = document.getElementById("contact-list")
  
}

/**
 * This function is called with a contact id
 * and will use the id to find and remove the 
 * contact by their id from the list of contacts
 * *** hints: 
 * *** findIndex: resources/findIndex.jpg
 * *** splice: resources/splice.jpg
 * @param {string} contactId 
 */
function removeContact(contactId) {
}

/**^^
 * Toggles the visibility of the AddContact Form^^
 */
function toggleAddContactForm() {
  document.getElementById("new-contact-form").classList.toggle("hidden")
}


/**
 * Used to generate a random string id for mocked
 * database generated Id
 * @returns {string}
 */
function generateId() {
  return Math.floor(Math.random() * 10000000) + "-" + Math.floor(Math.random() * 10000000)
}


loadContacts()
drawContacts()
