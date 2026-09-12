import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Users, BookOpen, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { HeroSection } from "../Home/sections/HeroSection";
import { FooterSection } from "../Home/sections/FooterSection";

export const TermsOfServicePage = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full ed-surface  overflow-x-hidden transition-colors duration-300">
      <HeroSection />

      <div className="flex flex-col w-full items-center ed-tint       transition-colors duration-300 min-h-screen">
        <section className="w-full max-w-4xl px-4 md:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 ed-muted  ed-hover-ink  transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl ed-tint   ed-elevation mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold ed-ink  ed-type mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl ed-muted  max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our educational platform.
            </p>
            <div className="text-sm ed-muted  mt-4">
              Last updated: September 12, 2026
            </div>
          </div>

          {/* Terms of Service Content */}
          <div className="ed-surface  rounded-2xl ed-elevation p-8 md:p-12 space-y-8">

            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-green-600" />
                Agreement to Terms
              </h2>
              <p className="ed-ink  leading-relaxed">
                By accessing and using Edvvo, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <div className="ed-tint  border-l-4 ed-border p-4 rounded-r-lg">
                <p className="ed-link  text-sm">
                  <strong>Important:</strong> These terms constitute a legally binding agreement between you and Edvvo regarding your use of our educational platform and services.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <Users className="w-6 h-6 text-green-600" />
                Description of Service
              </h2>
              <p className="ed-ink  leading-relaxed">
                Edvvo is an educational platform that provides:
              </p>
              <ul className="list-disc list-inside space-y-2 ed-ink ">
                <li>Access to educational resources and study materials</li>
                <li>Digital textbooks and course content</li>
                <li>Study tools and productivity features</li>
                <li>Educational roadmaps and learning paths</li>
                <li>Solutions and academic resources</li>
                <li>Community features for students and educators</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                User Accounts and Registration
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Account Creation</h3>
                  <p className="ed-ink  leading-relaxed">
                    To access certain features of our platform, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ed-ink ">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your account credentials secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Account Security</h3>
                  <p className="ed-ink  leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Acceptable Use Policy
              </h2>
              <p className="ed-ink  leading-relaxed">
                You agree to use our platform only for lawful purposes and in accordance with these terms. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-1 ed-ink ">
                <li>Use the platform for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Upload or transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the platform's functionality</li>
                <li>Use automated systems to access the platform without permission</li>
                <li>Share account credentials with others</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <FileText className="w-6 h-6 text-green-600" />
                Intellectual Property Rights
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Our Content</h3>
                  <p className="ed-ink  leading-relaxed">
                    The platform and its original content, features, and functionality are owned by Edvvo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">User Content</h3>
                  <p className="ed-ink  leading-relaxed">
                    You retain ownership of any content you submit to our platform. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Third-Party Content</h3>
                  <p className="ed-ink  leading-relaxed">
                    Our platform may contain content from third-party sources. We do not claim ownership of such content and respect the intellectual property rights of third parties.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-600" />
                Privacy and Data Protection
              </h2>
              <p className="ed-ink  leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our platform, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
              <div className="ed-tint  border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800  text-sm">
                  <strong>Learn More:</strong> Please review our{" "}
                  <Link to="/privacy-policy" className="underline ed-hover-ink">
                    Privacy Policy
                  </Link>{" "}
                  for detailed information about how we handle your data.
                </p>
              </div>
            </section>

            {/* Disclaimers */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-green-600" />
                Disclaimers and Limitations
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Service Availability</h3>
                  <p className="ed-ink  leading-relaxed">
                    We strive to provide reliable and uninterrupted service, but we cannot guarantee that our platform will be available at all times. We may temporarily suspend or discontinue the service for maintenance, updates, or other reasons.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Content Accuracy</h3>
                  <p className="ed-ink  leading-relaxed">
                    While we strive to provide accurate and up-to-date educational content, we cannot guarantee the accuracy, completeness, or reliability of all information on our platform. Users should verify information independently.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold ed-ink  mb-2">Limitation of Liability</h3>
                  <p className="ed-ink  leading-relaxed">
                    To the maximum extent permitted by law, Edvvo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our platform.
                  </p>
                </div>
              </div>
            </section>

            {/* Termination */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-600" />
                Termination
              </h2>
              <p className="ed-ink  leading-relaxed">
                We may terminate or suspend your account and access to our platform immediately, without prior notice, for any reason, including breach of these terms. Upon termination, your right to use the platform will cease immediately.
              </p>
            </section>

            {/* Governing Law */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type">
                Governing Law and Jurisdiction
              </h2>
              <p className="ed-ink  leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Edvvo operates, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the appropriate courts of that jurisdiction.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold ed-ink  ed-type">
                Changes to Terms
              </h2>
              <p className="ed-ink  leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our platform and updating the "Last updated" date. Your continued use of our platform after such changes constitutes acceptance of the updated terms.
              </p>
            </section>

            {/* Contact Information */}

          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 text-center">
            <div className="ed-tint   rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4 ed-type">
                Questions About Our Terms?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                We're committed to transparency and clear communication. If you have any questions about these terms, please don't hesitate to reach out to us.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/privacy-policy"
                  className="ed-surface text-green-600 px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift ed-elevation"
                >
                  View Privacy Policy
                </Link>
                <Link
                  to="/about"
                  className="ed-surface text-white px-6 py-3 rounded-xl font-semibold ed-hover-surface transition-all duration-300 transform ed-lift border border-white/30"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
};
