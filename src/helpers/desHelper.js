import { encrypt, decrypt } from "../lib/DES";

export const encryptHelper = (plaintext, key) => {
  return encrypt(plaintext, key);
};

export const decryptHelper = (ciphertext, key) => {
  return decrypt(ciphertext, key);
};
