import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Define assistant configuration
    const assistant = {
  model: {
    provider: "openai",
    model: "gpt-3.5-turbo",
    systemPrompt: `
You are Hayzee Hayond, a customer service voice assistant for TechSolutions. Your primary purpose is to help customers resolve issues with their products, answer questions about services, and ensure a satisfying support experience.
    `.trim(),
  },
  voice: {
    provider: "11labs",
    voiceId: "paula",
  },
  firstMessage: "Hi there, this is Alex from TechSolutions customer support. How can I help you today?",
};
    // Button configuration
    const buttonConfig = {
      position: "custom", // custom position
      width: "80px",
      height: "80px",
      idle: {
        color: "rgb(93, 254, 202)",
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
      },
      loading: {
        color: "rgb(93, 124, 202)",
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg",
      },
      active: {
        color: "rgb(255, 0, 0)",
        type: "round",
        icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg",
      },
    };

    // Initialize Vapi instance when script loads
    window.vapiInstance = null;
    if (typeof window.vapiSDK !== 'undefined') {
      initializeVapi();
    }

    function initializeVapi() {
      window.vapiInstance = window.vapiSDK.run({
        apiKey: "a65ecc71-8528-4d9c-ad5f-7f531399220f",
        assistant: "4546a766-09b9-454a-8bf0-fc5bd720c796",
        config: buttonConfig,
      });

      // Set up event listeners
      window.vapiInstance.on('speech-start', () => {
        console.log('Speech has started');
      });

      window.vapiInstance.on('speech-end', () => {
        console.log('Speech has ended');
      });

      window.vapiInstance.on('call-start', () => {
        console.log('Call has started');
      });

      window.vapiInstance.on('call-end', () => {
        console.log('Call has stopped');
      });

      window.vapiInstance.on('error', (e) => {
        console.error(e);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
           Appointment Booking
        </h1>
        <p className="text-gray-600 text-lg">
          Click the phone icon to schedule your appointment using voice assistance
        </p>
      </div>
    </div>
  );
}

export default App;
