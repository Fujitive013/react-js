import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex">
          <div className="m-5 mr-2 mt-10 bg-white p-8 rounded-lg shadow-lg w-3/12 h-96 block items-center">
            <form className="inline" id="registerForm">
              <div className="h-full">
                <h1 className="text-center text-2xl">Create an Account</h1>
                <div className="mt-3 w-full px-2">
                  <label>Name</label>
                  <div className="border-black border w-full rounded-md h-10">
                    <input
                      id="nameInput"
                      className="h-full w-full rounded-md px-2"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-3 w-full px-2">
                  <label>Email</label>
                  <div className="border-black border w-full rounded-md h-10">
                    <input
                      id="emailInput"
                      className="h-full w-full rounded-md px-2"
                      placeholder="user@email.com"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mt-3 w-full px-2">
                  <label>Role</label>
                  <select
                    id="roleInput"
                    className="w-full border-black rounded-md border h-10"
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">Student</option>
                    <option value="User">Instructor</option>
                  </select>
                </div>
                <div className="mt-5 w-full px-2">
                  <button
                    id="submit"
                    type="submit"
                    className="bg-blue-500 w-full p-1 h-10 text-white font-bold rounded-md"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex m-2 ml-2 mt-10 bg-white rounded-lg shadow-lg w-9/12 h-96 overflow-auto">
            <div className="items-center w-11/12">
              <table className="w-full m-7 ml-14 mr-14 table-auto" id="userTable">
                <thead>
                  <tr>
                    <th className="text-center text-xl">User List</th>
                  </tr>
                </thead>
                <tbody id="tableBody">
                  <tr>
                    <th className=" p-1 border border-black">ID</th>
                    <th className=" p-1 border border-black">Name</th>
                    <th className=" p-1 border border-black">Email</th>
                    <th className=" p-1 border border-black">Role</th>
                    <th className=" p-1 border border-black">Actions</th>
                  </tr>
                  <tr>
                    <td className="p-1 text-center border border-black userID">2022****20</td>
                    <td className="p-1 border border-black user-Name">Axel Llagas Paredes</td>
                    <td className="p-1 border border-black user-Email">paredes.axel456@gmail.com</td>
                    <td className="p-1 border border-black user-Role">Student</td>
                    <td className="p-1 border border-black user-Role"></td>
                  </tr>
                  <tr>
                    <td className="p-1 text-center border border-black userID">2004****50</td>
                    <td className="p-1 border border-black user-Name">John Titor</td>
                    <td className="p-1 border border-black user-Email">titor.john@gmail.com</td>
                    <td className="p-1 border border-black user-Role">Admin</td>
                    <td className="p-1 border border-black user-Role"></td>
                  </tr>                  <tr>
                    <td className="p-1 text-center border border-black userID">2002****07</td>
                    <td className="p-1 border border-black user-Name">John Legend</td>
                    <td className="p-1 border border-black user-Email">legendary.John@gmail.com</td>
                    <td className="p-1 border border-black user-Role">Instructor</td>
                    <td className="p-1 border border-black user-Role"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Admin;
