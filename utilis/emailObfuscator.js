// Utility function to obfuscate email addresses
export const obfuscateEmail = (email) => {
  // Convert email to HTML entities
  return email
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
};

// Function to create obfuscated mailto link
export const createObfuscatedMailto = (email) => {
  const obfuscatedEmail = obfuscateEmail(email);
  const mailtoLink = `mailto:${email}`;
  return {
    href: mailtoLink,
    dangerouslySetInnerHTML: { __html: obfuscatedEmail },
  };
};
