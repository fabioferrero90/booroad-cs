const Users = () => {
  return (
    //gray bar
    <div className="container mx-auto p-4">
      <div className="border-b rounded-lg mb-4 bg-gray-500 m-2.5 p-1">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded border border-gray-300 bg-gray-200"
        />

        <div className="justify-end flex">
          <select className="border border-gray-300 rounded p-2 m-3.5 flex  rounded-lg bg-gray-200">
            <option value="option1">DALLA A ALLA Z</option>
            <option value="option2">DALLA Z ALLA A</option>
          </select>

          <select className="border border-gray-300 rounded p-2 m-3.5  rounded-lg bg-gray-200">
            <option value="option1">IN VIAGGIO AL</option>
            <option value="option2">IN VIAGGIO DAL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Users;
