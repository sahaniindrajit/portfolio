import Link from "next/link";
import React from "react";

const Contact = () => {
    return (
        <div className="mx-auto flex flex-col justify-center items-center text-center mb-10">
            <div className="space-y-3">
                <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-1 text-sm">
                    Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Building something interesting? DM me on{" "}
                    <Link
                        href={"https://x.com/sahani_indrajit"}
                        className="text-blue-500 hover:underline"
                    >
                        X
                    </Link>{" "}
                    or{" "}
                    <Link
                        href={"https://linkedin.com/in/indrajitsahani"}
                        className="text-blue-500 hover:underline"
                    >
                        LinkedIn
                    </Link>
                    , or email me at{" "}
                    <Link
                        href="mailto:indrajit38mig@gmail.com"
                        className="text-blue-500 hover:underline"
                    >
                        indrajit38mig@gmail.com
                    </Link>
                    . I usually reply within a day.
                </p>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />


        </div>
    );
};

export default Contact;