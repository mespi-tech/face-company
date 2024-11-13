import InfoContact from "@/app/components/contact/InfoContact";
import MainContact from "@/app/components/contact/MainContact";
import MapContract from "@/app/components/contact/MapContract";
import TitleContact from "@/app/components/contact/TitleContact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "MESPI | Contact",
    description: "MESPI | Contact",
    openGraph: {
        title: "MESPI | Contact",
        description: "MESPI | Contace",
        url: "https://mespitech.com",
    },
    // keywords: ["Trang chủ", "công ty", "tên công ty"],
};

function page() {
    return (
        <div>
            <TitleContact />
            <MainContact />
            <InfoContact />
            <MapContract />
        </div>
    );
}

export default page;
