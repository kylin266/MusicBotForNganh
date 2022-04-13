
import { Client } from "discord.js";
// import { inputHandle } from "./src/input";
const client = new Client();
import CONFIG from "./config.js";
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});
client.on("message", async (msg) => {
    console.log('User command',msg)
});
client.login(CONFIG.BOT_TOKEN);