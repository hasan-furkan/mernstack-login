import React from "react";
import { DashboardTable } from "./DasboardTable";

export function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <DashboardTable />
        </div>
      </div>
    </>
  );
}
