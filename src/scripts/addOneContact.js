import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const addOneContact = async () => {
  const currentContacts = await readContacts();
  const updatedContacts = [...currentContacts, createFakeContact()];
  await writeContacts(updatedContacts);
  console.log('One contact successfully added');
};

addOneContact();
