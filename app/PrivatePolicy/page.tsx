import React from "react";

export default function PrivatePolicy() {
  return (
    <main className="max-w-screen-xl mx-auto flex flex-col my-auto items-center">
      <div className=" px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="mb-4">
          <strong>Personal Information</strong>
          <br />
          Name, Email address, Phone number, Billing address, Payment
          information (e.g., credit card details)
        </p>
        <p className="mb-4">
          <strong>Usage Information</strong>
          <br />
          IP address, Browser type, Device information, Pages visited on our
          website, Time and date of visits, Referring website
        </p>

        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          1. <strong>To Provide Services:</strong> We use your personal
          information to facilitate rental bookings, process payments, and
          communicate with you regarding your bookings.
        </p>
        <p className="mb-4">
          2. <strong>Marketing and Communication:</strong> With your consent, we
          may send you promotional emails, newsletters, or updates about our
          services.
        </p>
        <p className="mb-4">
          3. <strong>Analytics and Improvement:</strong> We analyze usage data
          to improve our website's functionality, user experience, and customer
          service.
        </p>
        <p className="mb-4">
          4. <strong>Legal Compliance:</strong> We may use your information to
          comply with legal obligations, resolve disputes, and enforce our
          policies.
        </p>

        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="mb-4">
          We implement security measures to protect your personal information
          from unauthorized access, disclosure, or misuse. These measures
          include encryption, secure servers, and regular security audits.
        </p>

        <h2 className="text-xl font-semibold mb-2">Data Sharing</h2>
        <p className="mb-4">
          We do not sell, rent, or trade your personal information to third
          parties for marketing purposes. However, we may share your information
          with trusted service providers who assist us in operating our website,
          processing payments, or delivering services to you.
        </p>


        <h2 className="text-xl font-semibold mb-2">Cookie Policy</h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your browsing
          experience, analyze website traffic, and customize content based on
          your preferences. You can manage cookies through your browser settings
          or opt-out of non-essential cookies.
        </p>

        <h2 className="text-xl font-semibold mb-2">Childrens Privacy</h2>
        <p className="mb-4">
          Our services are not directed to individuals under the age of 18. We
          do not knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us to have it removed.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          Changes to Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. We encourage you to
          review this policy regularly for any changes.
        </p>

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding your
          privacy or this Privacy Policy, please contact us at{" "}
          <a href="mailto:contact@kingvacrentals.com">
            contact@kingvacrentals.com
          </a>
        </p>
      </div>
    </main>
  );
}
