const Topgg = require("@top-gg/sdk")
const express = require("express")
const app = express()
const webhook = new Topgg.Webhook("testingapi123")

module.exports = client => {
  
client.once('ready', () => {
  
app.post("/dblwebhook", webhook.listener( async (vote) => {

  const user = await client.users.fetch(vote.user);

  if (user === null) return;


  
}))

app.listen(80)
  
console.log(`Webhook Api listening on port 80`)
  
});
  
}