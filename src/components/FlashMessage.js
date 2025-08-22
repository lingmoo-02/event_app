import { useContext } from 'react';
import { FlashMessageContext } from '../contexts/FlashMessageContext';

function FlashMessage() {
  const { message } = useContext(FlashMessageContext);

  if (!message) return null;

  return (
    <div className="w-full bg-green-200 text-green-900 text-center py-2 shadow">
      {message}
    </div>
  );
}

export default FlashMessage;