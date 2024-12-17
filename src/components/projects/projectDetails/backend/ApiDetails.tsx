import { Api } from "@/interfaces/backendInterfaces";

import CodeBlock from "@/components/projects/projectDetails/backend/CodeBlock";

interface ApiDetailsProps {
  api: Api;
}

const ApiDetails: React.FC<ApiDetailsProps> = ({ api }) => {
  if (
    !api.title?.trim() &&
    !api.description?.trim() &&
    !api.method &&
    !api.url?.trim()
  ) {
    return null;
  }

  return (
    <div className="api-details border-b border-gray-300 mb-4 pb-4">
      {api.title && <h3 className="text-xl font-bold">{api.title}</h3>}
      {api.description && <p className="text-gray-700 mb-2">{api.description}</p>}
      {api.method && (
        <p className="text-gray-600">
          <strong>Method:</strong> {api.method}
        </p>
      )}
      {api.url && (
        <p className="text-gray-600">
          <strong>URL:</strong> {api.url}
        </p>
      )}
      {api.body && (
        <div className="mt-4">
          <strong>Body:</strong>
          <CodeBlock code={api.body} />
        </div>
      )}
      {api.response && (
        <div className="mt-4">
          <strong>Response:</strong>
          {api.response.description && <p>{api.response.description}</p>}
          {api.response.example && <CodeBlock code={api.response.example} />}
        </div>
      )}
    </div>
  );
};

export default ApiDetails;
