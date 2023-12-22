function getEmailDomain(email) {
  const arr = email.split('@');
  arr.reverse();
  return arr[0].toString();
}

console.log(getEmailDomain('prettyandsimple@example.com'))