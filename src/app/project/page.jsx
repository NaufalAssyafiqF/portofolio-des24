import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import MyWebAppProjects from "@/components/MyProjects/MyWebAppProjects";
import DesignProjects from "@/components/MyProjects/DesignProjects";

const page = () => {
  return (
    <div className="w-full mt-48 mb-40">
      <Navbar />
      <MyWebAppProjects />
      <DesignProjects />
    </div>
  );
};

export default page;
