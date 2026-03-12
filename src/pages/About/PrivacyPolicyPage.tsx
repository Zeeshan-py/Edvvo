import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, Users, FileText, Mail, Phone } from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

export const PrivacyPolicyPage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full bg-white dark:bg-gray-900 overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-900/20 dark:via-gray-800 dark:to-indigo-900/20 transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-4xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Welcome to Edvvo. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our educational platform and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] flex items-center gap-3">
                <Eye className="w-6 h-6 text-blue-600" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Personal Information</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Educational background and preferences</li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Usage Information</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    We automatically collect certain information about your use of our platform:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage patterns and preferences</li>
                    <li>Pages visited and time spent on our platform</li>
                    <li>Search queries and content interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] flex items-center gap-3">
                <Users className="w-6 h-6 text-blue-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Provide and maintain our educational services</li>
                <li>Personalize your learning experience</li>
                <li>Improve our platform and develop new features</li>
                <li>Communicate with you about updates and new content</li>
                <li>Ensure platform security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] flex items-center gap-3">
                <Lock className="w-6 h-6 text-blue-600" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in operating our platform</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica] flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure hosting and infrastructure</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica]">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Remember your preferences and settings</li>
                <li>Analyze platform usage and performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure platform functionality and security</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences, though disabling certain cookies may affect platform functionality.
              </p>
            </section>

            {/* Your Rights */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica]">
                Your Rights and Choices
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Access and review your personal information</li>
                <li>Update or correct inaccurate information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of certain communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica]">
                Children's Privacy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our platform is designed for educational purposes and may be used by students under 13 years of age. We are committed to protecting children's privacy and comply with applicable laws regarding the collection of information from children. We encourage parents and guardians to monitor their children's online activities and to contact us if they have any concerns.
              </p>
            </section>

            {/* International Transfers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica]">
                International Data Transfers
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </section>

            {/* Changes to Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-['Newsreader',Helvetica]">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our platform and updating the "Last updated" date. Your continued use of our platform after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

          
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 font-['Newsreader',Helvetica]">
                Have Questions About Privacy?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                We're committed to transparency and protecting your privacy. If you have any questions or concerns, don't hesitate to reach out to us.
              </p>
              <Link 
                to="/about" 
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}; 
