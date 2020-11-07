var epsilon = Math.pow(10, -8);

// Brute force
var closest;
var distance = 100;

for (var i = 0; i < Math.PI; i += epsilon) {
	if (Math.abs(i - Math.cos(i)) < distance) {
		distance = Math.abs(i - Math.cos(i));
		closest = i;
	}
}

// Picard process
var alpha = 0.5;
var alphaNew = 0;

while (Math.abs(alphaNew - alpha) > epsilon) {
	alpha = alphaNew;
	alphaNew = Math.cos(alpha);
}

console.log("Brute force:   ", closest);
console.log("Picard process:", alphaNew);
