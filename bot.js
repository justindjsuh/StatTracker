// require("dotenv").config(); //to start process from .env file
// const {Client, GatewayIntentBits}=require("discord.js");
// const client=new Client({
//     intents:[
//         GatewayIntentBits.Guilds,//adds server functionality
//         GatewayIntentBits.GuildMessages //gets messages from our bot.
//     ]
// });
// client.once("ready", () =>{
//     console.log("BOT IS ONLINE"); //message when bot is online
// })
// client.on('message', msg => {
//     if (msg.content === 'ping') {
//         msg.reply('pong');
//     }
// })

// client.login(process.env.TOKEN);

const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login(process.env.TOKEN)