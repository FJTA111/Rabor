const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = '!erika'

client.on('ready', () => {
  console.log('¡Erika está en línea!');
});

client.on('message', message => {

  if (message.channel.type === 'text' && !message.author.bot) {

    var args = message.content.split(/[ ]+/);
    console.log(args);


          // COMANDOS //

    if (message.content.startsWith(prefix + ' gelp' )) {
        message.channel.send(message.author.username + ', _estos son todos los comandos disponibles:_  `!erika confirmalo`, `!erika hola`, `!erika culo juanjo`, `!erika kokaine` `!erika di`, `!erika borra`, `!erika mata a`.');
        message.delete().catch(console.error)

    } else if(commandIs('confirmalo', message)) {
      message.channel.send('¡Confirmado, ' + message.author.username + ' tiene una voz muy sexy!')
      message.delete().catch(console.error)

    } else if(commandIs('hola', message)) {
      message.channel.send('Hola, ' + message.author.username);
      message.delete().catch(console.error)

    } else if(commandIs('culo juanjo', message)) {
        message.channel.send('¡Menudo culazo tiene Juanjo!');
        message.delete().catch(console.error)

    } else if(commandIs('kokaine', message)) {
        message.channel.sendFile('coca.jpg')
        message.delete().catch(console.error)

    } else if(commandIs("di", message)) {
      message.delete().catch(console.error)
      if(hasRole(message.member, "DIOS") || hasRole(message.member, "Juanjo")){
          if(args.length < 3){
              message.reply('No has definido un argumento. Uso: `!erika di [mensaje a decir]`');
          } else {
            args.shift();
            args.shift();
            message.channel.send(args.join(' '));
          }
      } else {
          message.reply('`A tí no te hago caso.`');
      }
    } else if(commandIs("borra", message)) {
      if(hasRole(message.member, "DIOS") || hasRole(message.member, "Aegor") || hasRole(message.member, "Juanjo")){
          if(args.length > 3) {
              message.channel.send('No has definido un número válido. Usa: `!erika borra [número de mensajes a borrar]`');
          } else {
              var count = (args.length === 1) ? 2 : parseInt(args[2]) + 1
              console.log(count);
              message.channel.fetchMessages({limit: count}).then(messages =>
                message.channel.bulkDelete(messages)
              ).catch(console.error);
            }
        } else {
            message.reply('`A borrar mensajes a tu casa, guarro.`');
        }

      } else if(commandIs("mata a", message)){
        if(hasRole(message.member, "DIOS")) {
              if(args.length > 3){
                  message.guild.member(message.mentions.users.first()).kick();
              } else {
                  message.channel.sendMessage('No has indicado a quien debo matar. Usa: `!erika matar a [usuario a hostia dar]`');
                }
              } else {
                  message.reply('`Solo Dios puede matar.`');
                }
    } else {
      console.log('NO ENTRO A NINGUNA OPCION');
    }

  } else if (message.channel.type === 'dm' && !message.author.bot) {
    console.log('Alguien le ha mandado un mensaje privado al BOT!');
  }

});

function commandIs(str, msg){
  return msg.content.startsWith(prefix + ' ' + str);
}

function pluck(array) {
  return array.map(function(item) { return item["name"]; });
}

function pluck(array) {
  return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role){
  if(pluck(mem.roles).includes(role)){
      return true;
  } else {
      return false;
  }
}

    client.login('MzExOTM3OTE1Mjk2OTQwMDM5.C_e25A.HrcqGMovZu50g6eJwO4uOcWvSic');
