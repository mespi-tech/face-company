import Hire from "@/app/components/layout/Hire";
import Overview from "@/app/components/services/Overview";
import Overview2 from "@/app/components/services/Overview2";
import ThreeSection from "@/app/components/services/ThreeSection";
import TitleServices from "@/app/components/services/TitleServices";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "MESPI | Services",
    description: "MESPI | Services",
    openGraph: {
        title: "MESPI | Services",
        description: "MESPI | Services",
        url: "https://mespitech.com",
    },
    // keywords: ["Trang chủ", "công ty", "tên công ty"],
};

function Services() {
    return (
        <div>
            <TitleServices />
            <ThreeSection />
            <Hire />
            <Overview />
            <Overview2 />
        </div>
    );
}

export default Services;
