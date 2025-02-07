// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });
//   //console.log(userEmailArray);
//   postToWebPage(userEmailArray);
// };

// const postToWebPage = (data) => {
//   console.log(data);
// };

// getAllUserEmails();

//******************************************************* */

// 2nd parameter of Fetch is an object

// const getDadJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const jsonJokeData = await response.json();

//   console.log(jsonJokeData);
// };

// getDadJoke();

const jokeObject = {
  id: "0189hNRf2g",
  joke: "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
};

// const postData = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });
//   const jsonResponse = await response.json();

//   console.log(jsonResponse);
// };

// postData(jokeObject);

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (reqestData) => {
  return `http://api.icndb.com/jokes/random?firstName${reqestData.firstName}&lastName=${reqestData.lastName}$limitTo=${reqestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);

  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const reqestData = getDataFromForm();
  const requestUrl = buildRequestUrl(reqestData);
  await requestJoke(requestUrl);
  console.log("finished");
};

processJokeRequest();
