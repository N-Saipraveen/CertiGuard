"use client";
import {Feature} from "./Feature";

const features = [
  {
    title: "Blockchain Integration",
    description:
      "Utilize blockchain to ensure secure, tamper-proof certificates, maintaining trust and transparency.",
  },
  {
    title: "AI-Powered Verification",
    description:
      "Leverage AI to automate and enhance the accuracy of certificate verification processes.",
  },
  {
    title: "User-Friendly Management",
    description:
      "Easily manage and access digital certificates with intuitive interfaces and secure controls.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            This product provides you with all the services you need to verify the
            Certificates and Issue them seemlessly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

