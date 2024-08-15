// src/App.js
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
    <div className="flex flex-col md:h-[70%] p-4">
      <div className="mb-4">
        <label className="mr-2 text-[#F5CF6B]">Select Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="py-2 px-4 rounded bg-[#17212E] "
        >
          {Object.keys(examples).map((lang) => (
            <option  key={lang} value={lang} className='hover:bg-[#F5CF6B] hover:text-black'>
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-1">
        <Editor
          language={language}
          className='h-[300px] md:h-full'
          value={code}
          onChange={handleEditorChange}
          theme="vs-light"
        />
      </div>
    </div>
  );
};

function Question() {
  return (
    <div className="min-h-screen bg-[#17212E] text-white  font-times grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="md:w-[full] bg-gray-800 p-4 md:p-10">
        <h1 className="text-xl font-bold text-[#F5CF6B]">Question</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur. Varius vel feugiat pharetra consequat sed.
          Malesuada venenatis fermentum facilisi pharetra lorem fermentum dignissim.
          Ut consectetur vitae laoreet consequat morbi. Ut a velit lacinia quisque commodo.
        </p>
        <div className="bg-white h-64 rounded mt-4"></div>
      </div>

      {/* Right Section */}
      <div className="md:w-full p-4   ">
        {/* Code Editor */}
        <div className="bg-gray-800 h-[470px] md:h-[95%] flex flex-col w-full  mr-0 md:mr-4">
          <CodeEditor className="h-[500px] md:h-full"/>
          <div className="flex justify-between p-5 mt-2 md:mt-5">
            <button className="bg-[#17212E] hover:bg-[#F5CF6B] hover:text-[#17212E] p-2 rounded">Run</button>
            <button className="bg-[#17212E] p-2 rounded hover:bg-[#F5CF6B] hover:text-[#17212E]">Submit</button>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white w-full text-[#17212E] mt-4 p-4 flex-1 md:-mt-20 ">
          <div className="bg-green-500 text-white p-2 rounded">passed</div>
        </div>
      </div>
    </div>
  );
}

export default Question;
