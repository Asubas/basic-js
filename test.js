function isMAC48Address(n) {
  const regex = /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$/i;
  return regex.test(n);
}

console.log(isMAC48Address('00-1B-63-84-45-E6'))