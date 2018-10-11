'use strict'
const fs = require('fs');
const jwt = require('jsonwebtoken');

// PRIVATE and PUBLIC key
let privateKEY = fs.readFileSync('./private.key', 'utf8');
let publicKEY = fs.readFileSync('./public.key', 'utf8');

module.exports = {
  
  sign: (payload, $Options) => {

    /*
    sOptions = {
      issuer: "Authorizaxtion/Resource/This server",
      subject: "iam@user.me", 
      audience: "Client_Identity" // this should be provided by client
    }
    */

    const signOptions = {
      issuer: $Options.issuer,
      subject: $Options.subject,
      audience: $Options.audience,
      expiresIn: "30d",
      algorithm: "RS256"
    };
    return jwt.sign(payload, privateKey, signOptions)
  },

  verify: (token, $Option) => {

    /* 
    vOptions = {
      issuer: "Authorization/Resource/This server",
      subject: "iam@user.me", 
      audience: "Client_Identity" // this should be provided by client
    }
    */

    const verifyOptions = {
      issuer: $Option.issuer,
      subject: $Option.subject,
      audience: $Option.audience,
      expiresIn: "30d",
      algorithm: ["RS256"]
    };

    try {
      return jwt.verify(token, publicKey, verifyOptions);
    } catch (err) {
      return false
    }

  },

  decode: (token) => {
    return jwt.decode(token, {
      complete: true
    });
  }

}