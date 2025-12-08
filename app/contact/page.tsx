import ExpandableScreenDemo from "@/components/ContactScreen";
import UnderlineButton from "@/components/UnderlineButton"; // adjust path as needed

export const metadata = {
  title: " Contact | BetterWebStack",
  description: "Build fast and better stack for your next web project",
  alternates: {
    canonical: "https://betterwebstack.vercel.app/contact",
  },
};

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
