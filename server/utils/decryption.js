const crypto = require("crypto");
const Buffer = require("buffer/").Buffer;

const decrypt = (message) => {
  let key = `-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----`;
  const privateKey = {
    key: key,
    passphrase: "",
    padding: crypto.constants.RSA_PKCS1_PADDING,
  };

  const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(message, "base64"));

  return decrypted.toString("utf8");
};

module.exports = decrypt;