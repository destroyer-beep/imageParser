import express from 'express';
import ImageController from './controllers/ImageController.js';
import keys from 'global-keys';
import screenshot from 'screenshot-desktop';
import fs from "fs";

const app = express();
const keyStream = new keys.KeyStream();

keyStream.on('data', async state => {
    if(state.length === 1 && state[0] === 44) {
        let response = await screenshot({format: 'jpg'})
            const filename = Date.now();
            await fs.writeFileSync(`./image/${filename}.jpg`, Buffer.from(response));
            await ImageController.imgParser(filename);
    }
})

app.listen(3500, () => {
    console.log('server started');
});

