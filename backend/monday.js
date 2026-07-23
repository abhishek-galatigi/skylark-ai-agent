
const axios = require("axios");
require("dotenv").config();

const API_URL = "https://api.monday.com/v2";

async function getBoardItems(boardId) {
  const query = `
    query {
      boards(ids: ${boardId}) {
        name
        items_page {
          items {
            id
            name
            column_values {
              column {
                title
              }
              text
            }
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      API_URL,
      { query },
      {
        headers: {
          Authorization: process.env.MONDAY_API_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data.boards[0];
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}



module.exports = {
    getBoardItems
};