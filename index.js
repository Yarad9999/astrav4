/////////////////////////////////////////////////////
// VARIABLES
/////////////////////////////////////////////////////

const Discord = require("discord.js");
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
client.config = configs;

/////////////////////////////////////////////////////
// DEMARRER LE BO

client.on('ready', () => {
  console.log(`LE BOT : ${client.user.tag} EST DESORMAIS ON!`);
  client.user.setActivity(`Bannis les cheateurs`, { type: 'WATCHING' });
  //Logs BOT ON
});



client.on('message', msg => {
  if (msg.content == 'ping') {
    msg.channel.send('Pong !');
    }
    //Ping Pong Latence
});


client.on('message', msg1 => {
  if (msg1.content == '.ip') {
    msg1.channel.send("Voici l'ip du magnifique serveur **AstraRP** : play.astrarp.fr")
  //IP du serveur
  }

});

client.on('message', msg2 => {
  if (msg2.content == '.info') {
    msg2.channel.send("Le créateur se nomme SV Nappo#0213");
    }
//Info
});

client.on('message', msg3 => {
  if (msg3.content == '.don') {
    msg3.channel.send(":moneybag: Hey, tu veux faire une donation ? Prend ce lien ---> https://paypal.me/astrarp :moneybag:");
    }
//Donations
});

client.on('message', msg4 => {
  if (msg4.content == '.topserveur') {
    msg4.channel.send("⭐Merci de voter pour 𝐀𝐬𝐭𝐫𝐚 𝐑𝐏 en cliquant sur le lien ⭐ --> https://top-serveurs.net/gta/astra-rp-free-acces-staff-actif-anti-cheat-50co");
    }
//Topserveur
});



          //KICK COMMANDE
client.on('message', message => {
  if (!message.guild) return;


  if (message.content.startsWith('.kick')) {

    const user = message.mentions.users.first();
    if (user) {

      const member = message.guild.member(user);

      if (member) {
        member
          .kick(`Kick par le plus beau des bots`)
          .then(() => {
            
            message.channel.send(` L'utilisateur **${user.tag}** a été kick du Discord avec succès ! `);
          })
          .catch(err => {
          
            message.channel.send('**Tu ne peux pas kick cette personne, tu ne possèdes pas les permissions nécessaires !**');
            console.error(err);
          });
      } else {

        message.channel.send("**Cet utilisateur n'est pas dans la Guild !**");
      }
    } else {
      message.channel.send("**Il faut mentionner l'utilisateur si tu veux le kick !**");
    }
  }
});

    



client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('.ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Tu as été banni car tu le méritais !',
          })
          .then(() => {
            message.channel.send(`L'utilisateur **${user.tag}** a bien été banni !`)
          })
          .catch(err => {
            message.channel.send('**Tu ne peux pas bannir cette personne, tu ne possèdes pas les permissions nécessaires !**');
            console.error(err);
          });
      } else {
        message.channel.send("**Cet utilisateur n'est pas dans la Guild !**");
      }
    } else {
      message.channel.send("**Il faut mentionner un utilisateur pour le bannir !**");
    }
  }
});

client.on('message', message => {
  if(message.content.startsWith(".clear")) {
    message.delete();
      if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
        return
          message.channel.send("Vous n'avez pas la permission de supprimer des messages !");
   
          let args = message.content.split(" ").slice(1);
   
      if(!args[0]) return message.channel.send("Tu n'as pas dit combien de messages je dois supprimer ! ")
      message.channel.bulkDelete(args[0]).then(() => {
          message.channel.send(` ${args[0]} messages ont bien été supprimé`);
          console.log(`J'ai supprimé ${args[0]} messages chez "${message.guild.name}" :D`);
          message.delete(1000)
})}});




client.login("NzEzMDczNTg1NzMxNzk3MDQ1.Xsa5mw.m6UKyrupZ4w9CL2AKVRcxCH298g");
/////////////////////////////////////////////////////
// FONCTION (A NE PAS MODIFIER)
/////////////////////////////////////////////////////

function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity(" Joueur en ligne " + data.clients + "/" + data.maxclients, { type: configs.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();
