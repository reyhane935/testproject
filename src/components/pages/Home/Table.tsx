import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Table = () => {
  const router = useRouter();
  const pageData = useSelector(({ pageData }: any) => pageData);
  return (
    <>
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b text-left">#</th>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Email</th>
              <th className="px-4 py-2 border-b text-left">Age</th>
            </tr>
          </thead>
          <tbody>
            {pageData?.users?.map((item: any, index: any) => (
              <tr className="hover:bg-gray-50" key={index}>
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{item?.name}</td>
                <td className="px-4 py-2 border-b">{item?.email}</td>
                <td className="px-4 py-2 border-b">{item?.age}</td>
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
    </>
  );
};

export default Table;
