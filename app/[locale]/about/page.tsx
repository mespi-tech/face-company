import { Metadata } from "next";
import Counter from "@/app/components/layout/Counter";
import Feature from "@/app/components/about/Feature";
import Hire from "@/app/components/layout/Hire";
import MainAbout from "@/app/components/about/MainAbout";
import PageTitle from "@/app/components/about/PageTitle";
import Partner from "@/app/components/layout/Partner";
// import Team from "@/app/components/about/Team";
import WorksProcess from "@/app/components/layout/WorksProcess";

export const metadata: Metadata = {
    title: "MESPI | About",
    description: "MESPI | About",
    openGraph: {
        title: "MESPI | About",
        description: "MESPI | About",
        url: "https://mespitech.com",
    },
    // keywords: ["Trang chủ", "công ty", "tên công ty"],
};

function About() {
    return (
        <div>
            <PageTitle />
            <Feature />
            <MainAbout />
            <Counter />
            {/* <Team /> */}
            <WorksProcess />
            <Hire />
            <Partner />
        </div>
    );
}

export default About;
