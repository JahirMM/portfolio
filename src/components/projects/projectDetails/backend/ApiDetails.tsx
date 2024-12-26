import { Api } from "@/interfaces/backendInterfaces";

import CodeBlock from "@/components/projects/projectDetails/backend/CodeBlock";

interface ApiDetailsProps {
  api: Api;
  generateId: (title: string) => string;
}

const ApiDetails: React.FC<ApiDetailsProps> = ({ api, generateId }) => {
  if (
    !api.title?.trim() &&
    !api.description?.trim() &&
    !api.method &&
    !api.request?.trim()
  ) {
    return null;
  }

  return (
    <section id={generateId(api.title)} className="border-gray-300 mb-4 pb-4">
      {api.title && (
        <h3 className="text-gray-800 text-3xl mb-8 font-bold dark:text-gray-300">
          {api.title}
        </h3>
      )}
      {api.description && (
        <p className="text-gray-800 text-sm text-pretty dark:text-gray-300">
          {api.description}
        </p>
      )}
      {api.method && (
        <p className="mt-5 font-bold">
          <span className="text-gray-600 mr-3 dark:text-gray-500">Method:</span>
          <span
            className={`
              ${
                api.method === "POST"
                  ? "text-yellow-500"
                  : api.method === "GET"
                  ? "text-green-500"
                  : api.method === "PUT"
                  ? "text-blue-500"
                  : api.method === "DELETE"
                  ? "text-pink-500"
                  : ""
              }
              `}
          >
            {api.method}
          </span>
        </p>
      )}

      {api.request && (
        <div className="mt-3 flex flex-col">
          <span className="text-gray-600 font-bold mb-5 dark:text-gray-500">
            Request:
          </span>
          <pre className="bg-gray-900 text-white text-sm py-4 px-6 overflow-auto w-full">
            <code className="font-mono">{api.request}</code>
          </pre>
        </div>
      )}
      {api.body && (
        <div className="mt-5 mb-9">
          <span className="text-gray-600 block font-bold mb-5 dark:text-gray-500">
            Body:
          </span>
          <CodeBlock code={api.body} />
        </div>
      )}
      {api.response.description !== "" || api.response.example !== "" ? (
        <div className="mt-5 mb-9">
          <span className="text-gray-600 block font-bold mb-5 dark:text-gray-500">
            Response:
          </span>
          {api.response.description && (
            <p className="text-gray-800 text-sm text-pretty mb-5 dark:text-gray-500">
              {api.response.description}
            </p>
          )}
          {api.response.example && <CodeBlock code={api.response.example} />}
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ApiDetails;
