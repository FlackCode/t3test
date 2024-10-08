import "~/styles/globals.css";
import "@uploadthing/react/styles.css";

import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import TopNav from "./_components/topnav";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import React from "react";
import { Toaster } from "~/components/ui/sonner";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children, modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} dark`}>
      <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body className="">
          <div className="h-screen grid grid-rows-[auto,1fr]">
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root"></div>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
