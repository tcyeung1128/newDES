import { useState } from "react";
import { encryptHelper, decryptHelper } from "../../helpers/desHelper";
import { Button, TextField } from "@mui/material";
// import HKITLOGO from "../../../public/HKITLOGO.png";

export default function DES() {
  const [plaintext, setPlaintext] = useState("");
  const [plainKey, setPlainKey] = useState("");
  const [ciphertext, setCiphertext] = useState("");
  const [cipherKey, setCipherKey] = useState("");
  const [encrypted, setEncrypted] = useState("");
  const [decrypted, setDecrypted] = useState("");

  function encryptPlain() {
    let res = encryptHelper(String(plaintext), String(plainKey));
    setEncrypted(res);
  }

  function decryptCipher() {
    let res = decryptHelper(String(ciphertext), String(cipherKey));
    setDecrypted(res);
  }

  return (
    <>
      <header>
        <div>CS407 - Applied Cryptography</div>
        <div>Group 5 Assignment</div>
        <div>New-DES Encryption Scheme Demonstration</div>
      </header>

      <section id="des-demo">
        <div className="sec">
          <div className="title">
            <b>Encrypt</b>
          </div>
          <div>
            <TextField
              id="enc-plaintext"
              label="Plaintext"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setPlaintext(e.currentTarget.value)}
            />
          </div>
          <div>
            <TextField
              id="enc-key"
              label="Key"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setPlainKey(e.currentTarget.value)}
            />
          </div>
          <div>
            <Button variant="outlined" onClick={() => encryptPlain()}>
              Encrypt
            </Button>
          </div>
          <br />
          <div>
            <b>Ciphertext:</b>
          </div>
          <textarea
            className="cipher result"
            defaultValue={encrypted}
            readOnly
          ></textarea>
        </div>
        <div className="sec">
          <div className="title">
            <b>Decrypt</b>
          </div>
          <div>
            <TextField
              id="dec-ciphertext"
              label="Ciphertext"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setCiphertext(e.currentTarget.value)}
            />
          </div>
          <div>
            <TextField
              id="dec-key"
              label="Key"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setCipherKey(e.currentTarget.value)}
            />
          </div>
          <div>
            <Button variant="outlined" onClick={() => decryptCipher()}>
              Decrypt
            </Button>
          </div>
          <br />
          <div>
            <b>Plaintext:</b>
          </div>
          <textarea
            className="plain result"
            defaultValue={decrypted}
            readOnly
          ></textarea>
        </div>
      </section>
    </>
  );
}
