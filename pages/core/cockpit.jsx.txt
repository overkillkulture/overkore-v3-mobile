import { useState, useRef, useEffect } from "react";
import { OverkoreBrain } from "../OverkoreBrain"; // adjust path if needed

export default function OverkoreCockpit() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        handleSubmit(voiceInput);
      };

      recognition.onerror = (event) => {
        console.error("Voice error:", event.error);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  const handleSubmit = async (textOverride) => {
    const text = textOverride || input;
    if (!text.trim()) return;

    const newMessage = {
      role: "user",
      content: text,
      timestamp: Date.now()
    };

    const transcript = [...messages, newMessage];
    setMessages(transcript);
    setInput("");

    const reply = await OverkoreBrain(text, transcript);
    const response = {
      role: "overkore",
      content: reply,
      timestamp: Date.now()
    };

    const finalTranscript = [...transcript, response];
    setMessages(finalTranscript);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col p-6">
      <header className="border-b border-zinc-800 pb-3 mb-4">
        <h1 className="text-3xl font-bold text-center tracking-wider">OVERKORE // COCKPIT ONLINE</h1>
        <p className="text-center text-xs opacity-50">Creator Console: Voice + Mission + Memory Ready</p>
      </header>

      <div className="flex-1 bg-zinc-900 p-4 rounded-xl overflow-y-auto space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg border border-zinc-700 ${
              msg.role === "user" ? "bg-blue-700 text-right" : "bg-zinc-800 text-left"
            }`}
          >
            <div className="text-xs opacity-60 mb-1">
              {msg.role === "user" ? "You" : "Overkore"} –{" "}
              {new Date(msg.timestamp).toLocaleTimeString()}
            </div>
            <div className="text-base leading-snug whitespace-pre-wrap">{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="flex-1 p-3 bg-zinc-800 border border-zinc-600 rounded-xl text-white"
          placeholder="Enter command or speak..."
        />
        <button
          onClick={() => handleSubmit()}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl"
        >
          Send
        </button>
        <button
          onClick={toggleListening}
          className={`px-4 py-2 rounded-xl ${
            listening ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"
          }`}
        >
          🎤
        </button>
      </div>
    </div>
  );
}
