const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "757856882";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_28_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDM3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDMxLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQmczQmFGN3p4ajZsd0xZQTNZVEVCa0FXV0dSaEY1NVZVQmxUbk9RZUlGcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODcyMDkxNjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU4MjE4MzRBOUJBM0ZDOTgxNUI2MDI2REJBQkRFQTEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQzODEyMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzblViNlprU1FSbTJOUWxOdFJEMTl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhkMWE0NTQ4LThlZDUtNGVkMy1iNTYyLTRhMzIzOGI0YTY3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDgxLFxuICAgICAgMTQyLFxuICAgICAgNDUsXG4gICAgICA0NCxcbiAgICAgIDIzOCxcbiAgICAgIDIxOSxcbiAgICAgIDE4MCxcbiAgICAgIDQ1LFxuICAgICAgNTUsXG4gICAgICAyMzEsXG4gICAgICAyNTUsXG4gICAgICAxNjAsXG4gICAgICAxMTAsXG4gICAgICAyMjAsXG4gICAgICA4NCxcbiAgICAgIDYzLFxuICAgICAgODEsXG4gICAgICAxNDYsXG4gICAgICAxNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc2LFxuICAgICAgOTMsXG4gICAgICAyMjYsXG4gICAgICA5OSxcbiAgICAgIDE1OCxcbiAgICAgIDE3NCxcbiAgICAgIDExNCxcbiAgICAgIDE5OCxcbiAgICAgIDI1NSxcbiAgICAgIDE2OCxcbiAgICAgIDEsXG4gICAgICA1OCxcbiAgICAgIDExMyxcbiAgICAgIDYyLFxuICAgICAgNjYsXG4gICAgICAxOTcsXG4gICAgICAxNjgsXG4gICAgICA4NixcbiAgICAgIDExMixcbiAgICAgIDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkUyV1RYSkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4NzIwOTE2ODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODkyNDUzNTIzMjEwOTY6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQdkh4dG9CRU9LYXI3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInptU1gzbEJkbTBUc0ppUGJZSHFXSEpOaHJyTS9NbzU4Ui9XU0l3T0hKUnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTzc3OS9JQlFYenpZWFlrYmtVbjhQSWR2WERqTVBGRzBaUW9DTkJiTUV1dy83U29EL2Q1VldHNXdKZnFTYVA2dkNIQUlkZFV3Y0UrdWVyUWFDYjZmQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUmxKTlhSRkhqd3VHbXViWXRSMXlsVWR2NGtzcy9FM1ZHd2RBaUJHRUJPV0VjdUhiRnR2RjcyWWFGR25jbHpHTXJNU0F6dk1hZWVWZ1JYUDE0UVo4Q2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg3MjA5MTY4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQzODExOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9qZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2pnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSVhLZDczU0tvdWlNeDRUT2pydGZTVE43a3VGdjRjLzZuaU1iajNZRUQ3RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTgzMzUyMjIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5ODQ5NDA0NjNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
