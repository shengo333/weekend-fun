function getRandomWeekendActivity(activities) {
// Ensure activities array is present and not empty
if (!Array.isArray(activities) || activities.length === 0) {
throw new Error("Please provide a valid array of activities.");
}

// Get a random index within the activities array
const randomIndex = Math.floor(Math.random() * activities.length);

// Return the selected activity
return activities[randomIndex];
}

// Example usage:
const weekendActivities = [
"Go for a hike or nature walk",
"Visit a museum or art gallery",
"Go skiing",
"Explore a new neighborhood in your city",
"Try a new recipe or cook a special meal",
"Have a game night with friends or family",
"Go stargazing or watch the sunset/sunrise",
"Have a picnic in the park",
"Read a book or listen to a podcast",
"Learn a new skill or take a class",
"Volunteer in your community",
"Go to a concert, play, or other performance",
"Have a spa day or get a massage",
"Spend time with loved ones",
"Relax and recharge at home"
];

const randomActivity = getRandomWeekendActivity(weekendActivities);
console.log("Here's a random weekend activity suggestion for you:", randomActivity);
