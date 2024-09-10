"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Main";
import { newsContext } from "./Main";




export default function Home() {

  return (
    <div>
     <Main />
    </div>
 
  );
}
