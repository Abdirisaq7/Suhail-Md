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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254757856882";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"CAgICAyMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU3LFxuICAgICAgICA1MixcbiAgICAgICAgOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5eG4vdjZ5TldGVTkzazlNdEoyQ0s3clhXTjg1S1g2aWVPTU1oeUR5VTRvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjZ20tZ2ZKSVRiS281U1ZPbXhKR0hnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFhYTc5MDZlLTJiOWItNDVjMC04Y2UyLWY4ODZmMzMyYTY5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDg1LFxuICAgICAgNDAsXG4gICAgICAyMjAsXG4gICAgICAyNDIsXG4gICAgICA3MCxcbiAgICAgIDkzLFxuICAgICAgMSxcbiAgICAgIDExOSxcbiAgICAgIDExMixcbiAgICAgIDcxLFxuICAgICAgMTE5LFxuICAgICAgMTg2LFxuICAgICAgMTkwLFxuICAgICAgMTcwLFxuICAgICAgMjEyLFxuICAgICAgMjQwLFxuICAgICAgOTUsXG4gICAgICA0LFxuICAgICAgMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgNjcsXG4gICAgICAyNDcsXG4gICAgICA5NCxcbiAgICAgIDgyLFxuICAgICAgNDAsXG4gICAgICAyNTAsXG4gICAgICA3NCxcbiAgICAgIDE4NSxcbiAgICAgIDM4LFxuICAgICAgNTksXG4gICAgICA1LFxuICAgICAgNjYsXG4gICAgICA5NixcbiAgICAgIDkyLFxuICAgICAgNzQsXG4gICAgICA1NixcbiAgICAgIDIyNCxcbiAgICAgIDE0NCxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVCSDNEVzNOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODcyMDkxNjg6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTI0NTM1MjMyMTA5NjoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJREl4dG9CRUxXS3NMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInptU1gzbEJkbTBUc0ppUGJZSHFXSEpOaHJyTS9NbzU4Ui9XU0l3T0hKUnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYUxrSUFackN3aHVoS2lhZXBndjhHRFQwMWhpYkJVcGE2SUFuRC9GaHJYREtDTWcyNEZsY24wQkJ0WFYvQnV5d0JkSVZqbGQ1d3RKc01sd1UzNHVlQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRVdMakFqeFQzT1RsQlhzblozME02cU5JVEVaR3RGazR1Y3g1OFZaWUs1d2cwbHlhTW5OU1VqTWVtUEVOYUoxNmlNRnNBdzYrWkFwbWtHZHdWWEZFaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg3MjA5MTY4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NTI0MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPamdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9qZy5qc29uIjogIntcImtleURhdGFcIjpcIklYS2Q3M1NLb3VpTXg0VE9qcnRmU1RON2t1RnY0Yy82bmlNYmozWUVEN0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDU4MzM1MjIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5OTg0OTQwNDYzXCJ9Igp9",
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
