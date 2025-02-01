import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
  console.log(`All contacts successfully removed`);
};

removeAllContacts();
