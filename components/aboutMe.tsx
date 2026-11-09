import Image from "next/image";
import React from "react";

const AboutMe = () => {
    return (
        <div className="flex z-50 flex-col-reverse md:flex-row items-center md:items-start gap-4">
            <div className="w-full md:w-2/3 lg:w-10/12 flex flex-col gap-4">
                <h1 className="text-3xl lg:flex lg:flex-wrap lg:gap-x-3 block sm:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
                    <div>Indrajit Sahani</div>
                    <div className="text-sm md:text-base text-md text-primary/80 text-center sm:text-left">• Full-Stack Engineer • Production Infra • Email Deliverability • Observability • AI Tooling</div>
                </h1>
                <p className="text-md md:text-base text-primary/80 text-center sm:text-left">
                    Full-stack engineer at Enrich Labs, where I own Sendkit, a cold email platform for GTM agencies, end to end: product engineering, infrastructure across multiple cloud providers, monitoring, email deliverability, and AI integrations (CLI and MCP), while working with the team on how everything should be built and shipped. I like taking things from the first commit to production and keeping them running.
                </p>
                <p className="text-md md:text-base text-primary/80 text-center sm:text-left">
                    Also finishing my B.Tech in IT at GGSIPU (2027).
                </p>

            </div>
            <div className="w-full sm:w-1/3 lg:w-4/12 flex justify-center sm:justify-center">
                <Image
                    src="/indrajit.png"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="rounded-full border border-secondary h-24 w-24 sm:h-28 z-50 sm:w-28 lg:h-36 lg:min-w-36"
                />
            </div>
        </div>
    );
};

export default AboutMe;