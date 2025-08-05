const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0Z6VmkzMEN3YXRDUFRGcnRIR1hhc2NQWklJdC96a0k1eE1iaE53eWYxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkQrS2h6T2JFS3Y2UVR2QkFMTXlnSUs4U285NHBqRHNVVHMxRmJJRjNTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvS3ArUjVQNmNzQk00TkVBOEVXbm1vM2ZZbDJ1cXVOM0F2cVcvYUQ1ekVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqYkZDU3Jmc0tYVWt3UXkxK1FxRVlHVFovdkp1QWd2YlFCZUlvaDh1bkNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLdmVkdEl4dlBZRzFyc0ZyRVROd3RMMFAvTXQrd2J0NXhHOTNpK2Y4RTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5UMXdhSzlwUFNCSnIrcjN4dzBWaHl6RWJtelk3Q1VSZTVCQVA1Sjh5UUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpkaVVqYTV3WEtFcXJXS09PWUE5NTdtc3V5ZkRqaWFVOGhEbnBHd2Jtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclg3OVAvdXRuQUlDUGYzZFFhR1Jnc29GOER0Tlgva3o0enRWUDE4ZjdVST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNaV2w5ZnIxcUtYYTlydU43dVdpRHlIY3pyVXR0eFFLQ3RrV0xlcTUwMWcxU2NBQUJHVTdGQ3JOT3h1eVdTMWFqQlJBUWFMQ1MxRGlqUm1CekxSSmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE3LCJhZHZTZWNyZXRLZXkiOiJRQzZUdlJWTW5Uc0kwZ2hVRDcrNjI4Z3VSaVRRWVJSUXhiNExuSnEyTm0wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJTTTJMM1RCRCIsIm1lIjp7ImlkIjoiOTQ3NTM2ODYzNTA6OTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWthc2gg76O/IiwibGlkIjoiMTcyNDAzMzQyOTkyOTY6OTRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQU3N0NkFDRU8vdnlNUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJreWdNUGIyVFBzTHI1WXBpd1o1TVZPL0tadEx6OVByL1JUM1hSSTJpUWdnPSIsImFjY291bnRTaWduYXR1cmUiOiJFYURoelRWb3IyRkFzMzlUS2tYYnc4a0trcXdPMnEzemlxRnRuNUNQc25UUUNQYm5DblpFOUhIaVBoSGpCcmFINlpEZTd5Nm0yaCtOc3lEWFQxNk1EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSDBhdWh0WVJ6OUEwckptdGQ4SDVmNFBDTEU5bG9DdGc2MWNoNEZLNVM4TGRmY2g3eXJpcms1M2ZHS2FJN3hQWFdkbmJlSjFrOFpMYTl2OEc1R3Y0Z3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1MzY4NjM1MDo5NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaTW9ERDI5a3o3QzYrV0tZc0dlVEZUdnltYlM4L1Q2LzBVOTEwU05va0lJIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ0MTMwNDIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY AKASH-2007-MD💫*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/gnnpy9.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "AKASH-2007-MD💫",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "AKASH-2007-MD💫",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94753686350",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*AKASH 👾*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ AKASH-2007-MD💫*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/gnnpy9.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Vaadi Pulla Vaadi ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94753686350",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
