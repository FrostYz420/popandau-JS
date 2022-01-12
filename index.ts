import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
  ]
})

client.on('ready', () => {
    console.log('the bot is ready')
})

client.on('messageCreate',  (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        })
    }
    
})

client.on('messageCreate', (message) => {
    if (message.content === 'bullet e gay') {
        message.reply({
            content: 'adevarat',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'frosty e gay') {
        message.reply({
            content: 'minciuna mane'
        })
    }

})

client.on('messageCreate', (message) => {
    if (message.content === 'comenzi popandau') {
        message.reply({
            content: '1-Ping 2-faded e gay(verifici daca e gay) 3-bullet e gay(verifici daca e gay) 4-frosty e gay(verifici daca e gay) (mai multe in curand!!!!)'
        })
    }

})

client.on('messageCreate', (message) => {
    if (message.content === 'ajutor') {
        message.reply({
            content: '**Botul inca este in lucru!!** , scrie "comenzi popandau" in chat pentru a vedea comenzile.'
        })
    }

})

client.login(process.env.TOKEN) 