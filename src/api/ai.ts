// src/api/ai.ts

// Multi-provider AI Integration

import OpenAI from 'openai';
import Claude from 'claude';
import Gemini from 'gemini';
import Groq from 'groq';
import OpenRouter from 'openrouter';

class MultiProviderAI {
    constructor() {
        this.openAI = new OpenAI();
        this.claude = new Claude();
        this.gemini = new Gemini();
        this.groq = new Groq();
        this.openRouter = new OpenRouter();
    }

    async getResponse(provider, query) {
        switch (provider) {
            case 'OpenAI':
                return await this.openAI.getResponse(query);
            case 'Claude':
                return await this.claude.getResponse(query);
            case 'Gemini':
                return await this.gemini.getResponse(query);
            case 'Groq':
                return await this.groq.getResponse(query);
            case 'OpenRouter':
                return await this.openRouter.getResponse(query);
            default:
                throw new Error('Provider not supported');
        }
    }
}

export default new MultiProviderAI();