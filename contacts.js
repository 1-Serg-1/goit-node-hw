const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

async function getContacts() {
    try {
        const contactsRaw = await fs.readFile(contactsPath);
        const contacts = JSON.parse(contactsRaw);
        return contacts;
        
    } catch (error) {
        console.log(error);
    }
}
 
async function listContacts() {
    const contactsList = await getContacts();
    console.table(contactsList);    
}

async function getContactById(contactId) {
    const contactList = await getContacts();
    const findContactId = contactList.find(({ id }) => id === contactId);
    if (!findContactId) {
        console.log(`Contact with id:${contactId} not found`);
        return;
    }
    console.table(findContactId);
    return findContactId;
}

async function removeContact(contactId) {
    const contactsList = await getContacts();
    const filteredContacts = contactsList.filter(
        ({ id }) => id !== contactId);
    if (filteredContacts.length === contactsList.length) {
        console.log(`Contact with id:${contactId} not found`);
        return;
    }
      fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
      console.log(`Contact with id:${contactId} removed.`);
      return;

}

async function addContact(name, email, phone) {
    const contactsList = await getContacts();
    const verificationContact = contactsList.find(el => el.name === name);
    if (!verificationContact) {
        const id = nanoid();
        const contact = { id, name, email, phone };
        const newContactsList = [...contactsList, contact];
        fs.writeFile(contactsPath, JSON.stringify(newContactsList));
        console.log(`${name} is already in contacts.`);
        return;
    }  
    console.log(`A contact with name ${name} already exists`);
    return;
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
};