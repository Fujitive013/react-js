import React, { Component } from 'react';

class Students extends Component {
  render() {
    return (
      <main className="flex-1 bg-gray-100 p-8">
        <div className="flex h-4/5 w-full">
          <div className="w-full text-center pt-8">
            <label className="text-xl font-bold">Welcome, Axel Paredes!!!</label>
            <br />
            <p className="pt-3">
              Welcome to the Dashboard! This is the main content area where you can display various
              information and charts
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Students;
