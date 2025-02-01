import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

// import { readContacts } from './readContacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const contactsJSON = JSON.stringify([...updatedContacts], null, 2);

    await fs.writeFile(PATH_DB, contactsJSON, 'utf-8');

    return 'Contacts successfully added';
  } catch (error) {
    console.error(error.message);
  }
};
