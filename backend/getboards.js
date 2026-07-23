const axios = require("axios");

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjY4NTcxNDgwMiwiYWFpIjoxMSwidWlkIjoxMTA4ODM2NzUsImlhZCI6IjIwMjYtMDctMjNUMDc6MTM6MjcuNDc4WiIsInBlciI6Im1lOndyaXRlIiwiYWN0aWQiOjM2MTcwMzI3LCJyZ24iOiJhcHNlMiJ9.qjvDjWaLUbS4MMPwpws-5oXk2G9WTrjTCpzTUHkqojc";

async function getBoards() {
  const query = `
    {
      boards {
        id
        name
      }
    }
  `;

  const response = await axios.post(
    "https://api.monday.com/v2",
    { query },
    {
      headers: {
        Authorization: API_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  console.log(JSON.stringify(response.data, null, 2));
}

getBoards();