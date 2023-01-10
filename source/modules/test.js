require('dotenv').config({ path: '../../env' });
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration)

async function OpenAI() {
    const response = await openai.createCompletion({

    })

    return({})
}

module.exports = { OpenAi };