import axios from "axios";
import fs from "fs";

class ImageService {
    async sendFile(file) {
        const form = JSON.stringify({
            "analyze_specs": [{
                content: file,
                features: [{
                    type: "TEXT_DETECTION",
                    text_detection_config: {
                        language_codes: ["*"]
                    }
                }]
            }]
        })
        const {data} = await axios.post('https://vision.api.cloud.yandex.net/vision/v1/batchAnalyze', form, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Api-Key AQVNx8RYXwAjTifmqxCEQXCWlI_fIfjovYiXszf6",
            }
        })
        return data;
    }

    async imgParser(data) {
        let file = fs.readFileSync('./uploads/' + data.filename);
        const buffer = await Buffer.from(file).toString('base64');
        const {results} = await this.sendFile(buffer);
        const resultsJson = await JSON.stringify(results[0], null, 2);
        fs.writeFileSync('res.json', resultsJson, 'utf-8');
        return resultsJson;
    }
}

export default new ImageService();