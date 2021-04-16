const tmi = require('tmi.js'),
    { channel, username, password } = require('./config.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

// CONNECT TO TWITCH
const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `${username}, connected on ${channel}!`);
});

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == 'hello') {
        client.say(channel, `@${user.username}, hello!`);
    }

    if(message == '!dice') {
        client.say(channel, `@${user.username} rolled a ${Math.floor(Math.random() * 6) + 1}!`);
    }

    if(message == '!discord') {
        client.say(channel, `${user.usernamme}, join the Discord here: https://discord.gg/tmhxwernES`);
    }

    if(message == '!credits') {
        client.say(channel, `${username} was made by Bloxiphy#1337!`);
    }

    if(message.includes("awesome")) {
        client.say(channel, `If you enjoyed the content, make sure you follow! <3`);
    }

});
