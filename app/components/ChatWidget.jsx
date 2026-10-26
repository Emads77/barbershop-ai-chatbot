import Script from 'next/script';

// The Sawan AI assistant: the standard one-line embed, served by the Sawan AI backend.
export default function ChatWidget() {
  return <Script src="https://api.sawan-ai.nl/widget.js" data-client="blade-ember" strategy="afterInteractive" />;
}
