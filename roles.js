} else if(commandIs("rol", message)){
  if(hasRole(message.member, "DIOS")){
        if(args.length > 3) {
              message.channel.sendMessage('No has indicado bien el rol. Usa: `!rabor rol [usuario a rol dar]`');
        } else {
            if (!(role instanceof Role)) role = this.guild.roles.get(role);
            if (!role) throw new TypeError('Supplied parameter was neither a Role not a Snowflake.');
            return this.client.rest.methods.addMemberRole(this, role);
        }
}
