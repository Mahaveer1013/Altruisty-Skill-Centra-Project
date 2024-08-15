// src/CodeEditor.js
import React, { useState, useEffect } from 'react';
import { Editor } from '@monaco-editor/react';
import 'tailwindcss/tailwind.css';

const examples = {
  javascript: `function helloWorld() {
  console.log('Hello, World!');
}

helloWorld();`,
  python: `def hello_world():
    print('Hello, World!')

hello_world()`,
  java: `public class HelloWorld {
  public static void helloWorld() {
    System.out.println("Hello, World!");
  }

  public static void main(String[] args) {
    helloWorld();
  }
}`
};

const CodeEditor = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(examples.javascript);

  useEffect(() => {
    setCode(examples[language]);
  }, [language]);

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <div className="mb-4 flex space-x-4">
        {['javascript', 'python', 'java'].map((lang) => (
          <button
            key={lang}
            className={`py-2 px-4 rounded ${language === lang ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setLanguage(lang)}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex-1">
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </div>
    </div>
  );
};

export default CodeEditor;
