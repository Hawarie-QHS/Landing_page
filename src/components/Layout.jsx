import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="w-full overflow-x-hidden bg-cyan-950 text-white">
      {/* Wrapper umum untuk padding global */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        {children}
      </div>
    </main>
  );
};

export default Layout;
