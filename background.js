let keyCat = 'catKey';
let keyHelo = 'heloKey';
let keyHeldp = 'heldpKey';

let cat = ["Dog", "Rat", "bat"];
let helo = ["hello", "Help", "Hell"];
let heldp =["help", "held", "hello"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({keyCat: cat, keyHelo: helo, keyHeldp: heldp});
});