const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Côte d'ivoire";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250501993344";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_40_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODksXG4gICAgICAgIDQsXG4gICAgICAgIDg2LFxuICAgICAgICA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4NixcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDAsXG4gICAgICAgIDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDczLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDYxLFxuICAgICAgICAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgODEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICA5OSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWkVqUXVyS0pRUHF1TElBaDFJa0R3SkQ0SjVkUVhRK2NLQkpiVWcvYVF3VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYkp1SkRhdmxUNUdiTjJsYUpBMWk1UVwiLFxuICBcInBob25lSWRcIjogXCI3Yzg3MjFhZC1iM2YzLTQ5OGUtOWZkZC1lZDAxNjFjMWVhMDVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAwLFxuICAgICAgMTIyLFxuICAgICAgMTY2LFxuICAgICAgMjcsXG4gICAgICAyMjgsXG4gICAgICAxNDEsXG4gICAgICA0NyxcbiAgICAgIDc2LFxuICAgICAgMjQ5LFxuICAgICAgMjQ5LFxuICAgICAgMjA4LFxuICAgICAgMjU1LFxuICAgICAgMTQyLFxuICAgICAgOTEsXG4gICAgICAxODEsXG4gICAgICAyOSxcbiAgICAgIDUwLFxuICAgICAgMTksXG4gICAgICA5OCxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDI1MyxcbiAgICAgIDc4LFxuICAgICAgOTIsXG4gICAgICAxODksXG4gICAgICAyNDksXG4gICAgICA3NixcbiAgICAgIDE3MSxcbiAgICAgIDk4LFxuICAgICAgMjM5LFxuICAgICAgNzksXG4gICAgICAyNTEsXG4gICAgICA2NixcbiAgICAgIDE4MSxcbiAgICAgIDQwLFxuICAgICAgMTk2LFxuICAgICAgMTk0LFxuICAgICAgNzYsXG4gICAgICAyMDgsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkVQU0IzWTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTA1MDE5OTMzNDQ6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMDAzODkxODE4OTI0OTo0N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQWEltdFFFRU9UMjViZ0dHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZLZ3JUemFhUWxUUmNhQ2ZUdGtHU2E4QWVocXRmakVzVE10ZWJtQXFtSEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZDVWSXlibWdWV2J3M3RLTytwNzZlSVNnZVpsUFZIN2V6Zm50RFM2eUpNS0hCaFV1SDdlcURXVVZrQm00T0ZxOUF5YTUyQ0x0L0docVF3WEZZNTh2QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZG9RMis5MDVycm9qcG8yY0pBMTBZOXF4OFgvUm9vazl0Rm02R0NNMjhvbVNQc1RtaWNFRS9mZC8yWFlldDVRVzN6TFcrRURXMWM1bW1PUnA4aHVJaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDUwMTk5MzM0NDo0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTcyMzIzOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUthK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS2ErLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUCtZV0EzNVVicXZwWjcxQ1B5UElPRTc2czM2Ujh5WUdBa2l1OWZuUHVPRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjUwMzM3OTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
