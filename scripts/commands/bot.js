module.exports.config = {
  name: "mim",
  version: "0.0.2",
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "sad video",
  category: "admin",
  usages: "",
    cooldowns: 5,
};





module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const prompt = args.join(" ");
    if (!prompt) return api.sendMessage(`হুম বেবি বলো💋😘`, event.threadID, event.messageID);
    const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${content}&filter=true`);
  console.log(res.data)
  
    const response = res.data.data.msg;


        return api.sendMessage({
            body: response

        }, event.threadID, event.messageID);
    }
