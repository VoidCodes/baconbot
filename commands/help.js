const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Help Menu")
  .addField("Member Commands", "8ball, botinfo, coins, help, serverinfo and report");

  message.channel.send(helpembed);

  if(message.member.hasPermission("ADMINISTRATOR")){
  let modembed = new Discord.RichEmbed()
  .setDescription("Mod Help Menu")
  .setColor("#8300ff")
  .addField("Mod Commands", "addrole, removerole, kick, warn, tempmute, warnlevel, ban");

  try{
    await message.author.send(modembed);
    message.react("\:thumbsup:")
  }catch(e){
    message.reply("Your DMs are locked. I cannot send you the mod cmds.");
  }
}

}

module.exports.help = {
  name: "help"
}

