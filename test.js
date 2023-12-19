function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = (2^disksNumber) - 1;
  let seconds= Math.floor((turns/turnsSpeed) * 3600)
  console.log(2^disksNumber)
  console.log({
    turns,
    seconds
  })
  return {
    turns,
    seconds
  }
}

calculateHanoi(5, 4074)