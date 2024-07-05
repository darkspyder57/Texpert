"use client"

import { useEffect } from "react";

export default function BootstrapClient(){
    useEffect(()=>{
        require('@/public/assets/vendor/bootstrap/js/bootstrap.bundle.js')
    })
}