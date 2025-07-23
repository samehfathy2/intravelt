import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
            <div className='container mx-auto px-4 max-w-4xl'>
                <div className='text-center mb-8'>
                    <Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
                        Legal Information
                    </Badge>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
                        Terms of Service for WebTools Master
                    </h1>
                    <p className='text-lg text-gray-600'>
                        Last Updated: July 23, 2025
                    </p>
                </div>

                <Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
                    <CardContent className='pt-6 prose prose-gray max-w-none'>
                        <div className='space-y-6'>
                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    1. Acceptance of Terms
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    By accessing and using WebTools Master ("the Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    2. Description of Service
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    WebTools Master provides a suite of free web development and content creation tools. These tools include, but are not limited to:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>Text Rewriter & Spinner</li>
                                    <li>Robots.txt Fetching</li>
                                    <li>Sitemap Analysis</li>
                                </ul>
                                <p className='text-gray-600 mb-4'>
                                    The Service is provided "as is" and "as available." We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice, for any reason.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    3. User Responsibilities
                                </h2>
                                <p className='text-gray-600 mb-2'>
                                    You agree to:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>Use the Service only for lawful purposes and in accordance with these Terms.</li>
                                    <li>Not use the Service in any way that violates any applicable federal, state, local, or international law or regulation.</li>
                                    <li>Not engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm WebTools Master or users of the Service or expose them to liability.</li>
                                    <li>Not attempt to harm or disrupt the Service, including but not limited to introducing viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.</li>
                                    <li>Not attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
                                    <li>Respect intellectual property rights and not use the Service to infringe upon the intellectual property rights of others.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    4. Privacy and Data
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We do not store or retain any content you process through our tools. All data processing happens in real-time and is not saved to our servers. We are committed to protecting your privacy. For more details on how we collect, use, and disclose information, please review our comprehensive <a href="https://www.intravelt.com/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    5. Intellectual Property
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    The Service and its original content, features, and functionality are and will remain the exclusive property of WebTools Master and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WebTools Master.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    6. Disclaimer of Warranties
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    The Service is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. WebTools Master does not warrant that the Service will be uninterrupted, secure, or error-free; that defects will be corrected; or that the Service or the server that makes it available are free of viruses or other harmful components.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    7. Limitation of Liability
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    In no event shall WebTools Master, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    8. Service Availability
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    While we strive to maintain high availability, we do not guarantee that the Service will be available at all times. The Service may be temporarily unavailable due to maintenance, updates, technical issues, or other factors beyond our control. We will not be liable if for any reason all or any part of the Service is unavailable at any time or for any period.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    9. Modifications to Terms
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. Your continued use of the Service after the effective date of the revised Terms constitutes your acceptance of the new Terms.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    10. Termination
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    11. Governing Law
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    These Terms shall be governed and construed in accordance with the laws of the **State of California**, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    12. Contact Information
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    If you have any questions about these Terms of Service, please contact us at: <a href="mailto:contact@intravelt.com" className="text-blue-600 hover:underline">contact@intravelt.com</a>
                                </p>
                            </section>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
