let total = prompt('How many km are left to go?');

function howManyKm(total) {
  if (total > 100) {
    return "We still have a bit of driving left to go";
  } else if (total > 50 && total <= 100) {
    return "We'll be there in 5 minutes";
  }
  return "I'm parking. I'll see you right now";
}

console.log(howManyKm(total));
// Your code below:
