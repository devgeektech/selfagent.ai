"use client";
import React, { useState } from "react";
import Sources from '@/components/tabsSources/page'

import "./style.scss";
import Headertwo from "@/components/headertwo";

export default function Datasource(){

  return (
    <>
      <div className="dataSourecsPage">
        <Headertwo />
        <div className="innerpage">
          <div className="container">
            <div className="title_desc text-center">
              <h1>Data Sources</h1>
              <p className="mb-0">
                Add your data sources to train your siteagent
              </p>
            </div>
            <Sources />
          </div>
        </div>
      </div>
    </>
  );
}
