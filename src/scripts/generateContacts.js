import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const newFakeContactsArr = Array.from({ length: number }, createFakeContact);

  const currentContacts = await readContacts();
  const updatedContacts = [...currentContacts, ...newFakeContactsArr];

  await writeContacts(updatedContacts);

  console.log(`${number} fake contacts successfully added`);
};

generateContacts(5);
