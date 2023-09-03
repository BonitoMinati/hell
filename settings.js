const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V12', // ISI APIKEY LU
}

global.namabot = "KyurzyBotzz - MD V3" // UBAH JADI NAMA LU
global.namaowner = "FallZx" // NAMA OWNER
global.footer_text = "© KyurzyBotzz - MD V3" // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285813708397'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'kyurzyV3' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.script = ("https://youtu.be/FallXD425 NO ENC ? BUY") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://chat.whatsapp.com/KCYr0YwODJTEEFUlPxuNXQ" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB OFFICIAL BY FALLZX JOIN YA*\n\nhttps://chat.whatsapp.com/KCYr0YwODJTEEFUlPxuNXQ`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS
global.autoblok212 = true // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlygrub = true // Bebas, kalo gua untuk mengurangi spam aja sih
// - \\
// PEMISAH \\
global.packname = '© KyurzyV3' //sticker wm ubah
global.author = 'Di Buat Oleh FallZx' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})