// Purpose: Creates  a hash for a given input using algorithms like sha256.
// Usage: Ensure data integrity('verifying the changes'),password storage,data verification
const crypto=require('crypto');
const hash=crypto.createHash('sha256').update('Hello World').digest('hex');
console.log("SHA_256 Hash:",hash);
