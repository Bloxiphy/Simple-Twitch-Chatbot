const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

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

    if(message == '!roll') {
        client.say(channel, `@${user.username} rolled a ${Math.floor(Math.random() * 6) + 1}!`);
    }

    if(message == '!mention') {
        client.say(channel, `@${channel}`);
    }

    if(message.includes("awesome")) {
        client.say(channel, `If you enjoy @Cursed_bs' content, make sure to follow! :)`);
    }

    if(message == '!discord') {
        client.say(channel, `${user.usernamme}, ask nightbot lol, i don't have perms`);
    }

});