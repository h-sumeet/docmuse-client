import React from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

const ChatContainer = ({
  chatContainerRef,
  conversation,
  setQuestion,
  question,
  handleSubmit,
  loading,
  selectedPdf,
}) => {
  const suggestions = [
    "What is the PDF document about?",
    "Can you summarize the PDF in short?",
    "What are the possible questions made?",
  ];

  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-lg border border-gray-200 h-[95vh] w-[800px]">
      <div className="flex-none border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm uppercase font-bold text-gray-800">
            Chat with your PDF
          </h2>
          <div className="flex items-center space-x-2">
            <span
              className={`w-2 h-2 rounded-full ${
                selectedPdf ? "bg-green-500" : "bg-gray-400"
              }`}
            ></span>
            <span className="text-sm text-gray-600 font-medium">
              {selectedPdf ? "Document Connected" : "No Document Selected"}
            </span>
          </div>
        </div>
      </div>

      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        {conversation.length > 0 ? (
          conversation.map((msg, index) => (
            <ChatMessage key={index} message={msg} />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="bg-gray-50 rounded-2xl p-8 max-w-md w-full text-center space-y-6">
              <div className="bg-blue-50 rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {selectedPdf
                    ? "Start Your Conversation"
                    : "Select a PDF to Begin"}
                </h3>
                <p className="text-gray-600">
                  {selectedPdf
                    ? "Ask any question about your PDF document"
                    : "Upload or select a PDF from the sidebar to start chatting"}
                </p>
              </div>
              {selectedPdf && (
                <div className="flex flex-wrap justify-center gap-3">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setQuestion(suggestion)}
                      className="w-full px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex-none p-4 bg-gray-50 rounded-b-2xl border-t border-gray-200">
        <ChatInput
          question={question}
          setQuestion={setQuestion}
          handleSubmit={handleSubmit}
          loading={loading}
          selectedPdf={selectedPdf}
        />
      </div>
    </div>
  );
};

export default ChatContainer;