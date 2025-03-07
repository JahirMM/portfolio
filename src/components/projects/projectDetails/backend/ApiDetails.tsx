import { Api } from "@/interfaces/backendInterfaces";

import FilterDetails from "@/components/projects/projectDetails/backend/FilterDetails";
import CodeBlock from "@/components/projects/projectDetails/backend/CodeBlock";

import { generateId } from "@/utils/stringUtils";
import PaginationDetails from "./PaginationDetails";

interface ApiDetailsProps {
  api: Api;
}

const ApiDetails: React.FC<ApiDetailsProps> = ({ api }) => {
  if (
    !api.title?.trim() &&
    !api.description?.trim() &&
    !api.method &&
    !api.request?.trim()
  ) {
    return null;
  }

  return (
    <div id={generateId(api.title)} className="pb-4 mb-10 border-gray-300">
      {api.title && (
        <h3 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-300">
          {api.title}
        </h3>
      )}
      {api.description && (
        <p className="text-sm text-gray-800 text-pretty dark:text-gray-300">
          {api.description}
        </p>
      )}
      {api.method && (
        <p className="mt-5 font-bold">
          <span className="mr-3 text-gray-600 dark:text-gray-500">Method:</span>
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
                  : api.method === "PATCH"
                  ? "text-purple-800"
                  : ""
              }
              `}
          >
            {api.method}
          </span>
        </p>
      )}

      {api.request && (
        <div className="flex flex-col mt-3">
          <span className="mb-5 font-bold text-gray-600 dark:text-gray-500">
            Request:
          </span>
          <pre className="w-full px-6 py-4 overflow-auto text-sm text-white bg-gray-900">
            <code className="font-mono">{api.request}</code>
          </pre>
        </div>
      )}
      {api.body && (
        <div className="mt-5 mb-9">
          <span className="block mb-5 font-bold text-gray-600 dark:text-gray-500">
            Body:
          </span>
          <CodeBlock code={api.body} />
        </div>
      )}
      {api.response.description !== "" || api.response.example !== "" ? (
        <div className="mt-5 mb-9">
          <span className="block mb-5 font-bold text-gray-600 dark:text-gray-500">
            Response:
          </span>
          {api.response.description && (
            <p className="mb-5 text-sm text-gray-800 text-pretty dark:text-gray-300">
              {api.response.description}
            </p>
          )}
          {api.response.example && <CodeBlock code={api.response.example} />}
        </div>
      ) : (
        <></>
      )}
      {api.filters && <FilterDetails filters={api.filters} />}
      {api.pagination && <PaginationDetails pagination={api.pagination} />}
    </div>
  );
};

export default ApiDetails;
