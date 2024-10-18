import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const constants = await readContacts();
  constants.pop();
  await writeContacts(constants);
};

removeLastContact();
