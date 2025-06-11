"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/utils/SmoothScroll";
import Cursor from "@/utils/Cursor";
import Offline from "@/components/Offline";



  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Navbar />
      <main>{children}</main>
    
    </>
  );
}
