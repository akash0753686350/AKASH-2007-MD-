const fs = require("fs")

let handler = async (m, { kyami, KyamiPenCewe, text, reply }) => {
if (!KyamiPenCewe) return kyamipriv()
if (!text) return reply("namafile & reply code")
if (!m.quoted || !m.quoted.text) return reply("namafile & reply code")
if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")
let kondisi = "menambah"
if (fs.existsSync("./command/" + text)) return m.reply("Nama file plugins sudah terdaftar di dalam folder plugins!")
let teks = m.quoted.text
await fs.writeFileSync("./command/" + text, teks)
return m.reply(`Berhasil ${kondisi} file plugins *${text}*`)
}

handler.command = ["addplugins", "addplugin", "addp", "addplug"]

module.exports = handler