"use client";

import { Footer } from "flowbite-react";

export default function DefaultFooter() {
  return (
    <Footer container className="h-[10vh] flex justify-between items-center">
      <p className="ml-[5vw] text-gray-900 dark:text-white">&copy; Enzo</p>
      <Footer.LinkGroup className="flex gap-4 mr-[5vw]">
        <Footer.Link href="/about">About</Footer.Link>
        <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
        <Footer.Link href="/licensing">Licensing</Footer.Link>
        <Footer.Link href="/contact">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
