var eventType = prompt("What type of event are you going to?");

var tempFahr = prompt("What is the temperature outside?");

var result = "";

if (eventType === "casual" && tempFahr > 70) {
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear something comfy and no jacket.`;
} else if (
  eventType === "casual" &&
  tempFahr >= 54 &&
  eventType === "casual" &&
  tempFahr <= 70
) {
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear something comfy and a jacket.`;
} else if (eventType === "casual" && tempFahr < 54)
{
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear something comfy and a coat.`;
} else if (eventType === "semi-formal" && tempFahr > 70) {
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear a polo and no jacket.`;
} else if (
  eventType === "semi-formal" &&
  tempFahr >= 54 &&
  eventType === "casual" &&
  tempFahr <= 70
) {
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear a polo and a jacket.`;
} else if (eventType === "semi-formal" && tempFahr < 54)
{
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear a polo and a coat.`;
} else if (eventType === "formal" && tempFahr > 70) {
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear a suit and no jacket.`;
} else if (
  eventType === "formal" &&
  tempFahr >= 54 &&
  eventType === "casual" &&
  tempFahr <= 70
) {
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear a suit and a jacket.`;
} else (eventType === "formal" && tempFahr < 54)
{
  result = `Since it is ${tempFahr} degrees outside and you're going to a ${eventType}, you should wear a suit and a coat.`;
}

console.log(result);
