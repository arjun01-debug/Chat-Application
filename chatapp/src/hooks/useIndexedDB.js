import { openDB } from "idb";

//custom Hook
export const useIndexedDB = () => {
  //start of the DB
  const dbPromise = openDB("ChatApp", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("contacts")) {
        db.createObjectStore("contacts", { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains("messages")) {
        db.createObjectStore("messages", { keyPath: "id" });
      }
    },
  });

  // set all contacts
  const saveContacts = async (contacts) => {
    const db = await dbPromise;
    const tx = db.transaction("contacts", "readwrite");
    contacts.forEach((contact) => tx.store.put(contact));
    await tx.done;
  };

  // set all messages
  const saveMessages = async (messages) => {
    const db = await dbPromise;
    const tx = db.transaction("messages", "readwrite");
    messages.forEach((message) => tx.store.put(message));
    await tx.done;
  };

  // get all contacts
  const getContacts = async () => {
    const db = await dbPromise;
    return await db.getAll("contacts");
  };

  // get messages of a specific contact
  const getMessages = async (contactId) => {
    const db = await dbPromise;
    const allMessages = await db.getAll("messages");
    return allMessages.filter((msg) => Number(msg.contactId) === Number(contactId));
  };

  return { saveContacts, saveMessages, getContacts, getMessages };
};