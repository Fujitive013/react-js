import React from 'react'
import '../index.css'

function Sidebar() {
    return (
      <div className="flex-none w-1/5 overflow-y-auto bg-blackish border-r-2 border-gray-500 flex flex-col justify-between">
  <div className="w-full text-white pt-1 mt-7 border-gray-500">
    <ul>
      <li className="py-1 pl-5 border-gray-600 border-b-2"><button>Admin</button></li>
      <li className="py-1 pl-5 border-b-2 border-gray-600"><button>Dashboard</button></li>
      <li className="py-1 pl-5 mb-7 border-b-2 border-gray-600"><button>Student</button></li>
    </ul>
  </div>
  <div className="w-full text-white pt-1 border-b-2 border-gray-500">
    <ul>
      <li className="py-1 pl-5"><button>Help</button></li>
      <li className="py-1 pl-5"><button>About Us</button></li>
      <li className="py-1 pl-5 mb-7"><button>Contact Us</button></li>
    </ul>
  </div>
</div>

    );
  }

export default Sidebar