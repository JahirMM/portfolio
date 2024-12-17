interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre className="bg-gray-900 text-white text-sm rounded-md pb-4 overflow-auto w-full">
      <code className="font-mono">{code}</code>
    </pre>
  );
};

export default CodeBlock;
