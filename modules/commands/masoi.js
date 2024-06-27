module.exports.config = {
    name: "masoi",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie convert Kb2aBot",
    description: "Một chiếc ma sói trên Mirai",
    commandCategory: "Trò chơi",
    usages: "+ Mã số làng",
    cooldowns: 2
};
 
module.exports.onLoad = async () => {
    const fs = require("fs-extra");
    const axios = require("axios");
    const path = require("path");
    const dir = process.cwd() + `/node_modules/`;
    if (!fs.existsSync(dir + "game/masoi/index.js")) {
        await global.utils.downloadFile(`https://drive.google.com/u/0/uc?id=1PbdvB6HDn0ji64C3yYeYGu8A5O22xPeg&export=download`, dir + 'game.zip');
        const unZip = require('adm-zip');
        const zip = new unZip(dir + 'game.zip');
        await zip.extractAllTo(dir + 'game', true);
        fs.unlinkSync(dir + 'game.zip')
    } 
    try {
    const subname = text => {
        return text
            .split('.')
            .slice(0, -1)
            .join('.');
    };
    const loader = dir => {
        const exportData = {};
        const files = fs
            .readdirSync(dir)
            .filter(
                filename =>
                    fs.lstatSync(path.join(dir, filename)).isDirectory() ||
                    filename.split('.').pop() == 'js'
            );
        for (const filename of files) {
            try {
                const data = require(path.join(dir, filename));
                const sname = subname(filename) || filename;
                if (sname == 'common') {
                    Object.assign(exportData, data);
                } else {
                    exportData[sname] = data;
                }
            } catch (e) {
                console.error(e.stack);
                continue;
            }
        }
        return exportData;
    };
    var GameManager = require(dir + 'game/masoi/GameManager')
    
    new Promise(resolve => setTimeout(resolve, 2000));
    var gameManager = new GameManager(
        loader(dir + 'game/')
    );
    global.gameManager = gameManager
    console.log(`==== SUCCESSFULLY LOADING THE WOLF ====`)
    }
    catch(e) {
        console.log(e)
    }
}

module.exports.handleEvent = async function({ api, event, Currencies }) {
    const reply = function(message) {
        return api.sendMessage(message, event.threadID, event.messageID);
    }
    if(!global.gameManager || !global.gameManager.items.some(i => i.name == "Ma Sói")) return
        for (const game of global.gameManager.items) {
            if(!game.participants) continue
            if ((game.participants.includes(event.senderID) && !event.isGroup) || game.threadID == event.threadID) {
                game.onMessage(event, reply);
            }
        }
}
module.exports.run = async ({ api, event, args, Users }) => {
    global.Users = Users
    global.gameManager.run(this.config.name, {
        masterID: event.senderID,
        threadID: event.threadID,
        param: args,
        isGroup: event.isGroup
    })
}