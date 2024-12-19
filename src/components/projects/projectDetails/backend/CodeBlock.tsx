interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {

  return (
    <pre className="bg-gray-900 text-white text-sm rounded-md py-4 px-6 overflow-auto w-full">
      <code className="font-mono">{JSON.stringify(JSON.parse(code), null, 2)}</code>
    </pre>
  );
};

export default CodeBlock;
