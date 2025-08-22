import { createContext, useState } from 'react';

export const FlashMessageContext = createContext();

export const FlashMessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showMessage = (text, duration = 3000) => {
    setMessage(text);
    setTimeout(() => setMessage(null), duration);
  };

  return (
    <FlashMessageContext.Provider value={{ message, showMessage }}>
      {children}
    </FlashMessageContext.Provider>
  );
};
