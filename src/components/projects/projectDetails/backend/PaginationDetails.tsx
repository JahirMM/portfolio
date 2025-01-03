import { PaginationParameter } from "@/interfaces/backendInterfaces";

function PaginationDetails({
  pagination,
}: {
  pagination: PaginationParameter;
}) {
  return (
    <>
      <span className="text-gray-800 text-2xl block font-bold mb-5 dark:text-gray-300">
        Paginación
      </span>
      <p className="text-gray-800 text-sm text-pretty mb-5 dark:text-gray-300">
        {pagination.page.description}
      </p>
      <div className="overflow-x-auto mb-5">
        <table className="min-w-full table-auto border-collapse text-sm border border-gray-500">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                Method
              </th>
              <th className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                Tipo
              </th>
              <th className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                Parámetro
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                {pagination.page.required}
              </td>
              <td className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                {pagination.page.type}
              </td>
              <td className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                {pagination.page.parameterName}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex flex-col">
        <span className="text-gray-600 font-bold mb-5 dark:text-gray-500">
          Request:
        </span>
        <pre className="bg-gray-900 text-white text-sm py-4 px-6 overflow-auto w-full">
          <code className="font-mono">{pagination.page.request}</code>
        </pre>
      </div>
    </>
  );
}

export default PaginationDetails;
