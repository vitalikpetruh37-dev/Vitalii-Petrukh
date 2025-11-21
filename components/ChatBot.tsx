import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const greetings = {
      pl: 'Dzień dobry! Jestem asystentem Vit-Went. Mogę przygotować dla Ciebie wstępną wycenę montażu. Co chciałbyś zamontować?',
      en: 'Hello! I am the Vit-Went assistant. I can provide an initial installation quote for you. What service are you interested in?',
      ua: 'Добрий день! Я асистент Vit-Went. Можу підготувати для вас попередню оцінку монтажу. Що б ви хотіли встановити?'
    };
    setMessages([{ role: 'model', text: greetings[language] }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => `${m.role === 'user' ? 'Klient' : 'Asystent'}: ${m.text}`);
      const responseText = await sendMessageToGemini(history, userMsg.text, language);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Error. Try again later.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl shadow-cyan-500/30 z-[100] hover:scale-110 transition-transform ${isOpen ? 'hidden' : 'flex'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden flex flex-col max-h-[600px]"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot size={24} />
                <div>
                  <h3 className="font-bold text-sm">Vit-Went AI</h3>
                  <p className="text-xs text-blue-100 opacity-80">Szybka Wycena</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-slate-950/50 h-80 scrollbar-hide space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-slate-800 text-slate-200 border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-slate-800 border border-white/5 p-3 rounded-2xl rounded-tl-none flex gap-1">
                     <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                     <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-75"></span>
                     <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-slate-900 border-t border-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="..."
                  className="flex-1 px-4 py-2 bg-slate-950 border border-white/10 rounded-full focus:border-cyan-500/50 focus:outline-none text-white text-sm placeholder-slate-600"
                  disabled={isLoading}
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-500 disabled:opacity-50 transition-colors"
                >
                  {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};