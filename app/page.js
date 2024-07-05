"use client"

import aos from "@/public/assets/vendor/aos/aos";
import { useEffect } from "react";
import IndexPage from "./index/page";


export default function Home() {
  useEffect(() => {
    aos.init();
      }, []);
  return (
    <>
    <IndexPage />
    </>
  );
}
