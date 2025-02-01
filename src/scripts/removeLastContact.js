import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  contacts.splice(contacts.length - 1, 1);

  await writeContacts(contacts);

  console.log(`Last contact successfully removed`);
};
removeLastContact();
