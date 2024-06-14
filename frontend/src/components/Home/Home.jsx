import React, { useEffect, useState } from "react";

const USER_LIST = () => {
  const [userList, setUserList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7); // Number of items per page

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let result = await fetch("http://localhost:2000/alluser");
    result = await result.json();
    setUserList(result);
    sortUsers(result, sortOrder); // Ensure initial sorting
  };

  const searchHandle = async (event) => {
    const key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:2000/search/${key}`);
      result = await result.json();
      if (result) setUserList(result);
    } else {
        getUsers();
    }
  };

  const sortUsers = (users, order) => {
    const sortedUsers = [...users].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (order === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
    setUserList(sortedUsers);
  };

  useEffect(() => {
    sortUsers(userList, sortOrder);
  }, [sortOrder]);

  // Logic to calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = userList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center product-list p-4 bg-gray-100">
      <h3 className="text-2xl font-bold mb-4">User List</h3>
      <input
        placeholder="Search"
        className="search p-2 border rounded mb-4 w-30 text-center"
        onChange={searchHandle}
      />
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => setSortOrder("asc")}
        >
          Sort A-Z
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setSortOrder("desc")}
        >
          Sort Z-A
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Address</th>
            <th className="border border-gray-300 p-2">Mobile Number</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <tr key={item._id} className="bg-white hover:bg-gray-50">
                <td className="border border-gray-300 p-2 text-center">{item.name}</td>
                <td className="border border-gray-300 p-2 text-center">{item.address}</td>
                <td className="border border-gray-300 p-2 text-center">{item.mobile}</td>
                <td className="border border-gray-300 p-2 text-center">{item.email}</td>
                <td className="border border-gray-300 p-2 text-center">{item.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-red-500 font-bold p-4">
                No Result Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mb-10">
        {Array.from({ length: Math.ceil(userList.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 bg-blue-500 text-white rounded ${
              currentPage === index + 1 ? 'bg-blue-700' : ''
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default USER_LIST;
