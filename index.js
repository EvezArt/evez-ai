const BASE_URL = "https://evez-api2.fly.dev/v1";

class EvezAI {
  constructor(apiKey) {
    if (!apiKey) throw new Error("API key required. Get one at https://evez-api2.fly.dev/signup");
    this.apiKey = apiKey;
    this.baseURL = BASE_URL;
    this.chat = {
      completions: {
        create: async (params) => {
          const resp = await fetch(`${this.baseURL}/chat/completions`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${this.apiKey}`
            },
            body: JSON.stringify(params)
          });
          if (!resp.ok) throw new Error(`EVEZ API error: ${resp.status}`);
          return resp.json();
        }
      }
    };
  }

  static MODELS = {
    SMART: "evez-smart",
    CODE: "evez-code", 
    FAST: "evez-fast",
    VISION: "evez-vision"
  };
}

module.exports = EvezAI;
module.exports.default = EvezAI;
