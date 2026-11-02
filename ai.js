/**
 * OpenRouter AI Integration (Nvidia Nemotron 3.5 Model)
 * The Serendipity Chapel - Full English Edition
 */

class WeddingAI {
  constructor() {
    this.storageKey = 'serendipity_openrouter_key';
    this.storageModel = 'serendipity_openrouter_model';
    
    // Default configured with user's provided key
    this.defaultApiKey = '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';
    this.defaultModel = 'nvidia/nemotron-3.5-super-vl:free';

    this.apiKey = localStorage.getItem(this.storageKey) || this.defaultApiKey;
    this.model = localStorage.getItem(this.storageModel) || this.defaultModel;

    this.endpoint = 'https://openrouter.ai/api/v1/chat/completions';
  }

  saveConfig(newKey, newModel) {
    if (newKey) {
      this.apiKey = newKey.trim();
      localStorage.setItem(this.storageKey, this.apiKey);
    }
    if (newModel) {
      this.model = newModel.trim();
      localStorage.setItem(this.storageModel, this.model);
    }
  }

  /**
   * AI Ghostwriter: Generate wedding blessing based on chosen tone & couple context
   */
  async generateWish(tone = 'romantic', senderName = '', senderLocation = '', coupleNames = 'Julian & Eleanor', coupleVenue = 'The Glasshouse Conservatory, Kyoto') {
    const tonePrompts = {
      romantic: "Poetic, gentle, lyrical, and deeply romantic like classic literature.",
      funny: "Witty, playful, and charming with warm internet humor and lighthearted marriage advice.",
      genz: "Trendy, energetic Gen Z slang, wholesome internet culture, aesthetic vibes.",
      warm: "Cozy, heartfelt, sincere, and comforting like a message from an old soul or dear friend."
    };

    const promptDesc = tonePrompts[tone] || tonePrompts.romantic;
    const senderContext = senderName ? `from "${senderName}"` : "from an anonymous kind stranger on the web";
    const locationContext = senderLocation ? `located in "${senderLocation}"` : "";

    const systemPrompt = `You are the creative wedding ghostwriter for "The Serendipity Chapel".
Your task is to craft a heartfelt, charming wedding blessing (1 to 3 sentences, around 35 - 65 words) from a kind internet stranger to the couple.
Output ONLY the final blessing text. Do not include markdown quotes, introductory explanations, or meta commentary.`;

    const userPrompt = `Write a wedding blessing for the couple ${coupleNames}, who are celebrating at ${coupleVenue}.
- Tone & Style: ${promptDesc}
- Sender: ${senderContext} ${locationContext}.
Make it memorable, uplifting, and deeply personal!`;

    const referer = (window.location.origin && window.location.origin.startsWith('http')) 
      ? window.location.origin 
      : 'https://the-serendipity-chapel.app';

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': referer,
          'X-Title': 'The Serendipity Chapel'
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.85,
          max_tokens: 160
        })
      });

      if (!response.ok) {
        throw new Error(`OpenRouter HTTP error: ${response.status}`);
      }

      const data = await response.json();
      let text = data.choices?.[0]?.message?.content?.trim();
      if (!text) throw new Error('Empty response from AI model');

      text = text.replace(/^["'“](.*)["'”]$/, '$1');
      return text;
    } catch (err) {
      console.warn('AI generate wish fallback activated:', err);
      return this.getLocalFallbackWish(tone, coupleNames);
    }
  }

  /**
   * AI Bride & Groom Personalized Thank-You Letter Response
   */
  async generateBrideGroomResponse(senderName, senderLocation, wishContent, coupleNames = 'Julian & Eleanor', coupleVenue = 'Kyoto, Japan') {
    const systemPrompt = `You are the newlywed couple ${coupleNames}, holding your open ceremony at ${coupleVenue}.
You just received an unexpected, heartwarming wedding blessing from a kind internet stranger named "${senderName || 'a dear wanderer'}".
Write a deeply touching, gracious, and sincere thank-you letter (3 to 5 sentences). Mention their kind words, convey your mutual joy, and send warm wishes back to them wherever they are in the world. Output ONLY the body of the letter.`;

    const userPrompt = `Sender: ${senderName || 'A kind stranger'} ${senderLocation ? `(from ${senderLocation})` : ''}
Their blessing: "${wishContent}"

Respond with genuine emotional warmth as ${coupleNames}!`;

    const referer = (window.location.origin && window.location.origin.startsWith('http')) 
      ? window.location.origin 
      : 'https://the-serendipity-chapel.app';

    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': referer,
          'X-Title': 'The Serendipity Chapel'
        },
        body: JSON.stringify({
          model: this.model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.8,
          max_tokens: 220
        })
      });

      if (!response.ok) {
        throw new Error(`OpenRouter HTTP error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content?.trim();
      if (!text) throw new Error('Empty response from AI model');
      return text;
    } catch (err) {
      console.warn('AI Bride & Groom fallback activated:', err);
      return this.getLocalFallbackResponse(senderName, coupleNames);
    }
  }

  /**
   * English Fallback Generators for 100% Reliability
   */
  getLocalFallbackWish(tone, coupleNames) {
    const fallbacks = {
      romantic: `May the love between ${coupleNames} echo like ancient poetry through quiet forests—gentle in times of peace, steadfast through any storm, and forever blooming like the first day you met.`,
      funny: `Huge congratulations to ${coupleNames}! May your love be stronger than your Wi-Fi connection, and may you always agree on what to order for dinner!`,
      genz: `Obsessed with this love story! You two are absolute main character energy. Wishing you a lifetime of zero bad days, unmatched aesthetic, and pure joy together!`,
      warm: `From one stranger across the screen to another: thank you for reminding us of the goodness in the world. May ${coupleNames} build a home filled with endless laughter, warm tea, and quiet grace.`
    };
    return fallbacks[tone] || fallbacks.warm;
  }

  getLocalFallbackResponse(senderName, coupleNames) {
    const name = senderName || 'dear friend';
    return `Dearest ${name}, reading your beautiful words brought genuine tears of joy to our eyes on this unforgettable day. It is humbling to know that across oceans and screens, a kind soul took a quiet moment to send love our way. We are holding your blessing close to our hearts, and we send you our warmest wishes for happiness, peace, and love in all your days ahead.`;
  }
}

// Global instance
window.weddingAI = new WeddingAI();
