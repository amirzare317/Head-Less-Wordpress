import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-xl mb-4">Contact us</h1>
      <p className="mb-6">
        If you'd like to get in touch, please don't hesitate to reach out to us
        using the information below.
      </p>
      <div className="flex flex-col md:flex-row justify-center mb-6">
        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Address</h2>
          <p>Iran, Yazd</p>
        </div>

        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Phone</h2>
          <p>(+98) 910 123 3456</p>
        </div>

        <div className="w-full md:w-1/3 mb-4">
          <h2 className="text-lg mb-2">Email</h2>
          <p>example [at] example.com</p>
        </div>
      </div>
    </div>
  );
}

export default page;
