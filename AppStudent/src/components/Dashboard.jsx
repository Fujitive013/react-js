import React, { Component } from 'react'

export class Dashboard extends Component {
  render() {
    return (
  <main className='w-full'>
            <div className="flex m-2 ml-2 mt-10 bg-white rounded-lg shadow-lg w-11/12 h-96 overflow-auto">
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
</main>
    )
  }
}

export default Dashboard