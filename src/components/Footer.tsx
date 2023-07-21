type Props = {
  disabled: boolean;
  onSendMessage: (message: string) => void;
}

import { ChatMessageInput } from "./ChatMessageInput";

export const Footer = ({ disabled, onSendMessage }: Props) => {
  return (
    <footer className="w-full border-t-gray-600 p-2">
      <div className="max-w-4xl m-auto">
        <ChatMessageInput
          disabled={disabled} 
          onSend={onSendMessage}
        />
        <div className="py-3 text-center text-xs text-gray-300">
          2023 &copy; Podium Dev
        </div>
      </div>
    </footer>
  )
}