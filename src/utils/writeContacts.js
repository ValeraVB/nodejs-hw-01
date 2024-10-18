import { writeFile } from 'node:fs/promises';
import { PATH_DB_CONTACTS } from '../constants/contacts.js';

export const writeContacts = (songs) =>
  writeFile(PATH_DB_CONTACTS, JSON.stringify(songs, null, 2));
