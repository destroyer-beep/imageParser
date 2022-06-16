import express from 'express';
import ImageController from './controllers/ImageController.js';
// import keys from 'global-keys';
// import screenshot from 'screenshot-desktop';
// import fs from "fs";
import screenshot from 'desktop-screenshot';

const app = express();

const filename = Date.now();
screenshot(`./image/${filename}.jpg`, async (error, complete) => {
    if(error) {
        console.log("Screenshot failed", error);
    } else {
        await ImageController.imgParser(filename);
    }
});

// const keyStream = new keys.KeyStream();

// keyStream.on('data', async state => {
//     console.log(state);
//     if(state.length === 1 && state[0] === 44) {
// let response = await screenshot({format: 'jpg'})
// const filename = Date.now();
// await fs.writeFileSync(`./image/${filename}.jpg`, Buffer.from(response));
// await ImageController.imgParser(filename);
//     }
// })

app.listen(4900, () => {
    console.log('server started');
});

