"use client";

import React from "react";
import { texts } from "@/lib/texts";

export default function ForCollaborationsPage() {
  const lang: "en" | "ja" = "ja";

  return (
    <div>
      <div id="content_for_collaborations">
        {/* Hero Section */}
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              {texts.menu_for_collaborations[lang]}
            </h1>
          </div>
        </section>

        {/* About Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl md:text-2xl font-bold">
              {texts.for_collaborations_about[lang]}
            </h3>
          </div>
        </div>

        {/* Examples Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {texts.for_collaborations_example[lang]}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>{texts.for_collaborations_example1[lang]}</li>
              <li>{texts.for_collaborations_example2[lang]}</li>
              <li>{texts.for_collaborations_example3[lang]}</li>
              <li>{texts.for_collaborations_example4[lang]}</li>
              <li>{texts.for_collaborations_example5[lang]}</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-6 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {texts.for_collaborations_contact[lang]}
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                {texts.for_collaborations_access[lang]}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${texts.for_collaborations_email[lang]}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  {texts.for_collaborations_email[lang]}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
