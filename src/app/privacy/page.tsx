import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
            <div className='container mx-auto px-4 max-w-4xl'>
                <div className='text-center mb-8'>
                    <Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
                        Privacy & Security
                    </Badge>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
                        Privacy Policy for WebTools Master
                    </h1>
                    <p className='text-lg text-gray-600'>
                        Last Updated: July 23, 2025
                    </p>
                    <p className='text-md text-gray-700 mt-2'>
                        This Privacy Policy describes how WebTools Master (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) collects, uses, and shares information when you use our website located at <a href="https://www.intravelt.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.intravelt.com/</a> (the &quot;Service&quot;). Your privacy is incredibly important to us. By using the Service, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </div>

                <Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
                    <CardContent className='pt-6 prose prose-gray max-w-none'>
                        <div className='space-y-6'>
                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    1. Information We Collect (Minimal Collection)
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    WebTools Master is designed to protect your privacy. We collect very little personal information to provide our services, focusing primarily on non-identifiable data:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong>Usage Data:</strong> We collect basic, <strong className="font-semibold">anonymized analytics</strong> about how our tools and website are used. This includes information such as pages visited, time spent on pages, and general interaction with our tools. This data <strong className="font-semibold">does not include any personal content</strong> you input or process.
                                    </li>
                                    <li>
                                        <strong>Technical Data:</strong> We may automatically collect certain technical information when you access the Service, such as your <strong className="font-semibold">IP address</strong> (which is typically anonymized or truncated), browser type, device type, operating system, and referral URLs. This data is primarily used for security, monitoring performance, and improving the Service.
                                    </li>
                                    <li>
                                        <strong>Contact Information:</strong> Only when you <strong className="font-semibold">voluntarily provide it to us</strong> through our contact forms or direct email correspondence for support or inquiries.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    2. What We Explicitly Do NOT Collect or Store
                                </h2>
                                <p className='text-gray-600 mb-2'>
                                    Your core content and personal files remain private. We have a strict &quot;zero-retention&quot; policy for user-processed content:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong>Text Content:</strong> We explicitly do <strong className="font-semibold">NOT</strong> collect, store, or save any text content you input into our rewriting tool.
                                    </li>
                                    <li>
                                        <strong>Domain Names/URLs:</strong> We do <strong className="font-semibold">NOT</strong> log or store specific domain names or URLs you search or analyze in our robots.txt fetcher or sitemap analysis tools.
                                    </li>
                                    <li>
                                        <strong>Processed Output:</strong> Any processed or output content generated by our tools is <strong className="font-semibold">not saved</strong> to our servers.
                                    </li>
                                    <li><strong>Personal Files/Documents:</strong> We do <strong className="font-semibold">NOT</strong> collect or store any personal files or documents you might interact with on the Service.</li>
                                    <li>
                                        <strong>Account Information:</strong> We do <strong className="font-semibold">NOT</strong> require user accounts, therefore we do not collect or store account-related information like usernames or passwords.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    3. How We Process Your Data (Real-time &amp; Zero-Retention)
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    All processing of user content by our tools happens <strong className="font-semibold">in real-time</strong> on our servers. This content is <strong className="font-semibold">immediately discarded</strong> after providing results to you. We strictly adhere to a &quot;zero-retention&quot; policy for user-submitted content:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong>Text Rewriting:</strong> Input content is processed for rewriting and then <strong className="font-semibold">immediately deleted</strong> from our temporary memory/servers.
                                    </li>
                                    <li>
                                        <strong>Robots.txt Fetching &amp; Sitemap Analysis:</strong> Domain queries are processed to fetch information and are <strong className="font-semibold">not logged or stored</strong> in any identifiable way.
                                    </li>
                                    <li>
                                        <strong className="font-semibold">No Caching:</strong> There is <strong className="font-semibold">no caching of user inputs or outputs</strong> on our servers.
                                    </li>
                                    <li><strong className="font-semibold">No Backup Copies:</strong> We do <strong className="font-semibold">not keep any backup copies</strong> of user-processed content.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    4. Third-Party Services (AdSense Compliance)
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We use the following third-party services which may collect data according to their own privacy policies. We select services that align with our commitment to user privacy:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong className="font-semibold">Google AdSense:</strong> We use Google AdSense to display advertisements on our Service. Google AdSense uses cookies and similar technologies (like web beacons) to serve ads based on your prior visits to our Service or other websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. <strong className="font-semibold">You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/authenticated" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ads Settings</a>.</strong>
                                    </li>
                                    <li>
                                        <strong className="font-semibold">Datamuse API:</strong> For synonym lookup and related word suggestions in text rewriting. <strong className="font-semibold">No personal data or content you input is shared with or stored by Datamuse.</strong> Only the words themselves (not the full text) are sent for lookup, and are immediately discarded after the lookup is performed.
                                    </li>
                                    <li>
                                        <strong className="font-semibold">Analytics:</strong> Basic, anonymized usage statistics (e.g., Google Analytics). This helps us understand how the Service is used and improve it. We configure analytics to <strong className="font-semibold">anonymize IP addresses</strong> and avoid collecting personally identifiable information.
                                    </li>
                                    <li>
                                        <strong className="font-semibold">CDN Services:</strong> For fast content delivery. CDN providers may log technical data like IP addresses for network performance and security, but they <strong className="font-semibold">do not process or store your personal user content</strong>.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    5. Cookies and Tracking
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We use cookies and similar tracking technologies for essential functionality and basic analytics:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong>Essential Cookies:</strong> These cookies are strictly necessary for the core functionality of the Service (e.g., maintaining session, basic site preferences). Without these cookies, the Service may not function correctly.
                                    </li>
                                    <li>
                                        <strong>Analytics Cookies:</strong> These cookies collect <strong className="font-semibold">anonymous usage statistics</strong> to help us understand how users interact with our Service. This data is aggregated and does not identify you personally. <strong className="font-semibold">You can disable analytics cookies through your browser settings.</strong>
                                    </li>
                                    <li>
                                        <strong>Advertising Cookies (Google AdSense):</strong> As mentioned in Section 4, Google AdSense uses cookies to provide relevant ads. <strong className="font-semibold">You have control over these through Google&apos;s Ads Settings.</strong>
                                    </li>
                                    <li>
                                        <strong>No Cross-Site Tracking:</strong> We do <strong className="font-semibold">NOT</strong> use cookies or technologies to track your activity across other unrelated websites.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    6. Data Security
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We implement appropriate and commercially reasonable security measures to protect the limited information we collect and process:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong>HTTPS Encryption:</strong> All data transmission between your browser and our Service is secured using HTTPS encryption.
                                    </li>
                                    <li><strong className="font-semibold">Secure Server Infrastructure:</strong> Our servers are hosted with reputable providers that implement robust security practices.</li>
                                    <li>
                                        <strong className="font-semibold">Regular Security Updates and Monitoring:</strong> We regularly update our systems and monitor for potential vulnerabilities.
                                    </li>
                                    <li>
                                        <strong className="font-semibold">No Permanent Storage of User Content:</strong> As detailed above, the &quot;zero-retention&quot; policy for user content is a core security measure.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    7. Your Rights
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    Given our minimal data collection and zero-retention policy for user content, traditional data protection rights regarding access, rectification, or erasure of specific personal content typically do not apply. However, you still have the right to:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li><strong className="font-semibold">Contact us</strong> about any privacy concerns or questions regarding our data practices.</li>
                                    <li><strong className="font-semibold">Opt out of analytics cookies</strong> through your browser settings.</li>
                                    <li><strong className="font-semibold">Opt out of personalized advertising</strong> from Google by visiting <a href="https://adssettings.google.com/authenticated" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ads Settings</a>.</li>
                                    <li><strong className="font-semibold">Report any privacy issues</strong> you may encounter while using our Service.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    8. Children&apos;s Privacy
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    Our Service is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you believe your child has provided us with personal information, please contact us immediately at <a href="mailto:contact@intravelt.com" className="text-blue-600 hover:underline">contact@intravelt.com</a>. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    9. International Users (Data Transfer)
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    Our Service is hosted on servers located in the United States. If you are accessing our Service from outside the United States, please be aware that your information may be transferred to, stored, and processed in the US where our servers are located. By using the Service, you understand and consent to the transfer of your information to our facilities in the United States.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    10. Changes to This Privacy Policy
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top of this policy. We encourage you to review this Privacy Policy periodically for any changes.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    11. Contact Us
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                                </p>
                                <ul className='list-none text-gray-600 space-y-1 mb-4'>
                                    <li>Email: <a href="mailto:contact@intravelt.com" className="text-blue-600 hover:underline">contact@intravelt.com</a></li>
                                    <li>Website: <a href="https://www.intravelt.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.intravelt.com/</a></li>
                                </ul>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
