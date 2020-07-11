const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "..";
var role = message.mentions.roles.first();
          if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });
client.login(process.env.BOT_TOKEN);
