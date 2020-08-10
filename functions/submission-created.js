require("dotenv").config();
const fetch = require("node-fetch");
const { REACHOUT_TOKEN } = process.env;
exports.handler = async event => {
  const reachout = JSON.parse(event.body).payload.reachout;
  console.log(`Received a submission: ${reachout}`);
  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${REACHOUT_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ reachout })
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown: \n ${data}`);
    })
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
