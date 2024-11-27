import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Table = () => {
  const router = useRouter();
  const pageData = useSelector(({ pageData }: any) => pageData);
  return (
    <div className="mx-auto mt-4 max-w-2xl text-center ">
      <h2 className="text-balance text-4xl  font-semibold tracking-tight text-gray-900 sm:text-5xl">
        List users
      </h2>
      <div className="overflow-x-auto mt-10 shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b  text-center">#</th>
              <th className="px-4 py-2 border-b  text-center">Name</th>
              <th className="px-4 py-2 border-b  text-center">Email</th>
              <th className="px-4 py-2 border-b  text-center">Age</th>
              <th className="px-4 py-2 border-b  text-center">Newsletter</th>
            </tr>
          </thead>
          <tbody>
            {pageData?.users?.map((item: any, index: any) => (
              <tr className="hover:bg-gray-50" key={index}>
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{item?.name}</td>
                <td className="px-4 py-2 border-b">{item?.email}</td>
                <td className="px-4 py-2 border-b">{item?.age}</td>
                <td className="px-4 py-2 border-b">
                  <input
                    checked={item?.newsletter}
                    readOnly
                    type="checkbox"
                    className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-auto mt-4 max-w-2xl text-center ">
        <button
          onClick={() => router.back()}
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Table;
