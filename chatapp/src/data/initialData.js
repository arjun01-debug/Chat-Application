
export const preloadedContacts = [
  { id: "1", name: "Alice", msg : 'What is Up?', time : '2024-12-25T10:00:00Z'},
  { id: "2", name: "Bob", msg : 'Want help on a bug pls...', time: '2024-12-25T10:05:00Z' },
  { id: "3", name: "Charlie", msg : "Movie?", time: '2024-12-25T11:00:00Z' },
  { id: "4", name: "Diana", msg : 'Where are you?', time: '2024-12-25T11:30:00Z' },
  { id: "5", name: "Eve", msg : 'Will be late for sure.', time : '2024-12-25T12:30:00Z' },
  { id: "6", name: "Frank", msg : 'Help me with this bug please', time : '2024-12-25T13:05:00Z' },
];

export const preloadedMessages = [
  { id: "1", contactId: "1", content: "Hello Alice!", isSentByUser: true, time: "10.05 pm" },
  { id: "2", contactId: "1", content: "Hi there!", isSentByUser: false, time: "10.10 pm" },
  { id: "3", contactId: "1", content: "What is Up?", isSentByUser: true, time: "10.30 pm" },
  { id: "4", contactId: "2", content: "Hey", isSentByUser: false, time: "10.30 pm" },
  { id: "5", contactId: "2", content: "What do you want?", isSentByUser: true, time: "10.31 pm" },
  { id: "6", contactId: "2", content: "Want help on a bug pls...", isSentByUser: false, time: "10.32 pm" },
  { id: "7", contactId: "3", content: "Movie?", isSentByUser: false, time: "12.30 pm" },
  { id: "8", contactId: "4", content: "Where are you?", isSentByUser: true, time: "2.00 am" },
];