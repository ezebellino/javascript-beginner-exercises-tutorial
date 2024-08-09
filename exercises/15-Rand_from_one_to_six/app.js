function getRandomInt()
{
	let randomNumber = Math.random()*6;
	return Math.floor(randomNumber)+1;
}
console.log(getRandomInt());