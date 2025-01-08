import { FilterParameter } from "@/interfaces/backendInterfaces";

function FilterDetails({ filters }: { filters: FilterParameter }) {
  if (!filters?.filters || filters.filters.length === 0) {
    return null;
  }
  return (
    <>
      <span className="text-gray-800 text-2xl block font-bold mb-5 dark:text-gray-300">
        Filtro
      </span>
      {filters.filters.map(
        (
          { title, parameterName, type, description, required, request },
          index
        ) => (
          <div key={index} className="mb-10">
            <div className="text-gray-800 text-sm font-bold mb-5 dark:text-gray-300">
              {title}
            </div>
            <p className="text-gray-800 text-sm text-pretty mb-5 dark:text-gray-300">
              {description}
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
                      {required}
                    </td>
                    <td className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                      {type}
                    </td>
                    <td className="border border-gray-500 px-4 py-2 text-gray-800 dark:text-gray-300">
                      {parameterName}
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
                <code className="font-mono">{request}</code>
              </pre>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default FilterDetails;
