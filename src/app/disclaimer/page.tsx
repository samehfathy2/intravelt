import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DisclaimerPage() {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
            <div className='container mx-auto px-4 max-w-4xl'>
                <div className='text-center mb-8'>
                    <Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
                        Important Notice
                    </Badge>
                    <h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
                        Disclaimer for WebTools Master
                    </h1>
                    <p className='text-lg text-gray-600'>
                        Last Updated: July 23, 2025
                    </p>
                    <p className='text-md text-gray-700 mt-2'>
                        By using the WebTools Master website (<a href="https://www.intravelt.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://www.intravelt.com/</a>), you acknowledge and agree to this Disclaimer. If you do not agree with any part of this Disclaimer, please do not use our Service.
                    </p>
                </div>

                <Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
                    <CardContent className='pt-6 prose prose-gray max-w-none'>
                        <div className='space-y-6'>
                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    1. General Disclaimer
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    The information and tools provided by **WebTools Master** are for general informational and utility purposes only. While we strive to provide accurate and up-to-date tools and information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the tools or information contained on the website for any purpose.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    2. Tool Accuracy and &quot;As Is&quot; Basis
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    Our tools are provided &quot;as is&quot; and &quot;as available&quot; without any warranties. We cannot guarantee their absolute accuracy, reliability, or suitability for your specific needs:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>
                                        <strong>Text Rewriter &amp; Spinner:</strong> Results may vary in quality, grammar, and accuracy. Always review and verify any rewritten content before use. We are not responsible for the originality or quality of the output.
                                    </li>
                                    <li>
                                        <strong>Robots.txt Fetcher:</strong> We fetch robots.txt files as they exist at the time of your request. These files may change, be temporarily unavailable, or contain errors on the source website. Our tool provides a snapshot and analysis but does not guarantee the external file&apos;s validity or continuous availability.
                                    </li>
                                    <li>
                                        <strong>Sitemap Analysis:</strong> Sitemap availability, structure, and format may vary between websites. Our analysis is based on the fetched sitemap at the time of request and does not guarantee its completeness, accuracy, or up-to-dateness on the external site.
                                    </li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    3. No Professional Advice
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    The tools and information provided on this website are not intended to constitute professional advice (e.g., legal, financial, technical, or SEO advice). You should not rely solely on the information provided by our tools for making critical business, legal, or technical decisions. Always consult with qualified professionals or conduct your own due diligence when needed.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    4. Third-Party Content and External Links
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    Our Service may fetch or display content from third-party websites (such as robots.txt and sitemap files) and may contain links to external websites that are not provided or maintained by or in any way affiliated with WebTools Master.
                                    We are not responsible for:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>The accuracy, completeness, or legality of third-party content or external websites.</li>
                                    <li>The availability or performance of third-party websites or files.</li>
                                    <li>Any damages or losses resulting from your reliance on or use of third-party content or external websites.</li>
                                    <li>Copyright, intellectual property, or any other legal issues pertaining to content fetched from third-party websites.</li>
                                </ul>
                                <p className='text-gray-600 mt-4'>
                                    The inclusion of any external links does not imply endorsement by WebTools Master of the site or any association with its operators.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    5. Limitation of Liability
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    To the fullest extent permitted by applicable law, in no event shall WebTools Master, its owners, employees, affiliates, or licensors be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>Loss of profits or revenue</li>
                                    <li>Loss of data or information</li>
                                    <li>Business interruption</li>
                                    <li>Personal injury or property damage</li>
                                    <li>Any other commercial damages or losses</li>
                                </ul>
                                <p className='text-gray-600 mt-4'>
                                    arising from your use of the Service or inability to use the Service, even if WebTools Master has been advised of the possibility of such damages.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    6. Service Availability
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We do not guarantee that our Service will be available at all times. The Service may be temporarily unavailable due to maintenance, technical issues, system failures, or other factors beyond our control. We will not be liable for any inconvenience, loss of data, or damages resulting from service unavailability or performance issues.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    7. User Responsibility
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    Users are solely responsible for their use of the Service and any content or data processed through our tools. You agree to:
                                </p>
                                <ul className='list-disc list-inside text-gray-600 space-y-1 mb-4'>
                                    <li>Verify the accuracy, legality, and suitability of all tool results before use or publication.</li>
                                    <li>Ensure your use of the Service complies with all applicable local, national, and international laws and regulations.</li>
                                    <li>Respect intellectual property rights and not use the Service to infringe on copyrights, trademarks, or other proprietary rights of any third party.</li>
                                    <li>Use the tools in accordance with their intended purpose and refrain from any misuse or abuse.</li>
                                    <li>Back up any important data before processing it with our tools, as we do not store user content.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    8. Changes to This Disclaimer
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    We reserve the right to modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of our Service after any changes constitutes acceptance of the updated Disclaimer. We encourage you to review this page periodically.
                                </p>
                            </section>

                            <section>
                                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                                    9. Contact Information
                                </h2>
                                <p className='text-gray-600 mb-4'>
                                    If you have any questions about this Disclaimer, please contact us at:
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
