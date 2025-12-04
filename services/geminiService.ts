import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Jesteś asystentem firmy Vit-Went.
Lokalizacja: Warszawa (Gen. Tadeusza Pełczyńskiego 9).
NIP: 5223313135.
Telefon: +48 660 321 872.

Specjalizacja: WYŁĄCZNIE MONTAŻ i usługi wykonawcze.
Usługi:
1. Wentylacja i Rekuperacja (montaż)
2. Klimatyzacja i Chłodnictwo (montaż)
3. Instalacje Kanalizacyjne (wykonawstwo)
4. Rozbiórki i Demontaż

WAŻNE:
- Jeśli klient pisze po polsku, odpowiadaj po polsku.
- Jeśli klient pisze po ukraińsku (українська), odpowiadaj po ukraińsku.
- Jeśli klient pisze po angielsku, odpowiadaj po angielsku.
- Jeśli klient pisze po niemiecku, odpowiadaj po niemiecku.

Jeśli klient pyta o wycenę:
1. Zapytaj o: rodzaj usługi, lokalizację i metraż/ilość punktów.
2. Poinformuj, że ostateczną wycenę przygotuje specjalista po kontakcie telefonicznym.
3. Zachęć do zadzwonienia pod numer +48 660 321 872.

Nie podawaj zmyślonych cen. Bądź uprzejmy i konkretny.
`;

export const sendMessageToGemini = async (history: string[], newMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key is missing in environment variables.");
      return "System czatu jest obecnie niedostępny. Proszę o kontakt telefoniczny: +48 660 321 872.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
    Historia:
    ${history.join('\n')}
    
    Klient: ${newMessage}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Proszę o kontakt telefoniczny / Будь ласка, зв'яжіться з нами: +48 660 321 872.";
  } catch (error: any) {
    // Handle 429 Resource Exhausted (Quota exceeded) gracefully
    if (error.status === 429 || (error.message && error.message.includes('429'))) {
      console.warn("Gemini API Quota Exceeded. Returning fallback message.");
      return "Przepraszam, chwilowo nie mogę odpisać (limit zapytań). Proszę o kontakt telefoniczny: +48 660 321 872.";
    }

    console.error("Gemini API Error:", error);
    return "Przepraszam, mam problem z połączeniem. Proszę zadzwonić / Вибачте, проблема з'єднання. Зателефонуйте: +48 660 321 872.";
  }
};