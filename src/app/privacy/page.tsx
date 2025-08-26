import React from "react";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";
import { PrivacyPolicySection } from ".";

const page = () => {
  return (
    <>
      <Navigation />
      <PrivacyPolicySection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
