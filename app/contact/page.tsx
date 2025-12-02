import ExpandableScreenDemo from "@/components/ContactScreen";
import UnderlineButton from "@/components/UnderlineButton"; // adjust path as needed
import React from "react";

const ContactPage = () => {
  return (
    <div className="relative">
      {/* Back Button */}
      <div className="absolute top-4 left-6 z-10">
        <UnderlineButton />
      </div>

      {/* Contact Screen */}
      <ExpandableScreenDemo />
    </div>
  );
};

export default ContactPage;
