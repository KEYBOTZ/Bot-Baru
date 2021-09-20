exports.wait = () => {
	return`*「❗」WAIT KAK*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」BELUM VERIFIKASI「❗」*\n\nketik : @verify`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED YAHAHAHA HAYUUU :V*`
}

exports.premium = (prefix) => {
	return`Lu Siapa? Fitur ini khusus user premium!
Upgrade ke premium dulu bosku
Jika minat hubungi owner ku
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Kamu sudah melakukan verify -_-*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY TOD*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY TOD*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY TOD*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY TOD*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS JADI ADMIN TOD*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🗿」Teks nya mana Tod?*`
}

exports.clears = () => {
	return`*Sukses bosku*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ Nama : ${pushname}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 20K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Pulsa : 083153406515
Gopay : Minta Owner

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`╭──「🇸 🇪 🇼 🇦  🇧 🇴 🇹 」
│❏  1 MINGGU : IDR 4.000 (4K)
│❏  1 BULAN : IDR 6.000 (6K)
│❏   PERMANEN : IDR10.000 (10K)
╰────
╭─ [ KELEBIHAN BOT ]
│❏  ＯＮ 24 ＪＡＭ
│❏  WELCOME IMAGE
│❏  FITUR LANGKA
╰────
╭─[ KEUNTUNGAN ]
│❏  ANTI LINK ( AUTO KICK )
│❏  WELCOME ( OTOMATIS )
│❏  DAN RATUSAN FITUR LAINYA
╰────
╭─[ *MINAT CHAT* ]
│❏  🪀 wa.me/6289636634511?text=sewa+bot
╰────
╭─[ *TES BOT? MASUK GRUB DI BAWAH* ]
│❏https://chat.whatsapp.com/Hnb8UOsuN4t5hSEMNTUdft
╰────
╭─[ *PAYMENT* ]
│❏  GOPAY
│❏  DANA
│❏  PULSA +10K
│❏  QRIS ALL PAYMENT
╰────`
}
