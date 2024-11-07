import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "32MB" } })
        .onUploadComplete(async ({ file }) => {
            // This code RUNS ON YOUR SERVER after upload

            console.log("file url", file.url);

            // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
            return { fileurl: file.url };
        }),
    videoUploader: f({ video: { maxFileSize: "1GB" } })

        .onUploadComplete(async ({ file }) => {
            // This code RUNS ON YOUR SERVER after upload

            console.log("file url", file.url);

            // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
            return { fileurl: file.url };
        }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
