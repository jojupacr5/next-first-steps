import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Title',
 description: 'Contact description',
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl">Contact Page</span>
    </>
  )
}