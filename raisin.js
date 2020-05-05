const raisinAlarm = function(cookie) {
  if(Array.isArray(cookie[0])) {
    raisinAlarmArray(cookie)
  } else {
    if (cookie.includes("🍇")) {
      return "Raisin alert!"
    } else {
      return "All good!"
    }
  }
};

const raisinAlarmArray = function(cookies) {
  let result = [];
  for(const cookie of cookies) {
    if (cookie.includes("🍇")) {
      result.push("Raisin alert!")
    } else {
      result.push("All good!")
    }
  }
  return result;
}

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));