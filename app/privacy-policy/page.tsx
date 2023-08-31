async function Page(){

    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center text-light-2 gap-1.5">
                <p className=" text-heading1-bold">Privacy Policy</p>
                <p className="font-mono text-light-2 text-body-normal mb-4">Last Updated: August 31, 2023</p>
                <p>Thank you for choosing Walk to Win ("the App"), a web application designed to encourage friendly step count competitions among employees. This Privacy Policy outlines how we collect, use, and protect your personal information as you engage with the App. By using Walk to Win, you agree to the terms outlined in this policy.</p>

                <div className="flex flex-col items-start w-full mt-3">
                    <p className="text-heading3-bold mt-3 mb-2">1. Information We Collect</p>
                    <p>Walk to Win gathers the following information from registered employees of our company who participate in the App:<br/>
                        <span className="text-body-bold mt-2">Name:</span> Your full name is collected to identify and communicate with participants.<br/>
                        <span className="text-body-bold mt-2">Email Address:</span> Your email address is used for communication purposes, including sending competition updates, results, and prizes.<br/>
                        <span className="text-body-bold mt-2">Profile Picture:</span> Your profile picture is displayed alongside your participation on the leaderboards.<br/>
                        <span className="text-body-bold mt-2">Step Count Data from Google Fit:</span> We collect step count data from Google Fit, focusing specifically on the period from September 5, 2023, to September 20, 2023. This data is utilized solely to facilitate the employee step count competition and to determine rankings on leaderboards.
                    </p>

                    <p className="text-heading3-bold mt-5 mb-2">2. How We Use Your Information</p>
                    <p>The information we collect serves the following purposes: <br/>

                    <span className="text-body-bold mt-2">Points Allocation:</span> Participant points are determined based on step counts, promoting friendly competition and engagement.<br/>
                    <span className="text-body-bold mt-2">Leaderboard Rankings:</span> We compile and display leaderboards to showcase the achievements and rankings of participants within the competition.<br/>
                    <span className="text-body-bold mt-2">Communication:</span> Your email address allows us to keep you informed about competition updates, outcomes, and rewards.<br/>
                    </p>

                    <p className="text-heading3-bold mt-5 mb-2">3. Data Security</p>
                    <p>We prioritize the security of your data and implement reasonable measures to prevent unauthorized access, disclosure, alteration, or loss of your personal information. Our servers securely store all data, and access is granted only to authorized personnel.
                    </p>

                    <p className="text-heading3-bold mt-5 mb-2">4. Data Retention</p>

                    <p>Your step count data and personal information will be retained only for the duration of the competition, spanning from September 5, 2023, to September 20, 2023. After the competition concludes, your step count data will be promptly deleted. Your name, email address, and profile picture may be retained for communication purposes related to future competitions, unless you request otherwise.</p>
                    

                    <p className="text-heading3-bold mt-5 mb-2"> 5. Sharing of Information</p>
                    <p>
                        We do not share your personal information with external parties except when necessary to provide the services of the App. This includes sharing step count data internally with our team responsible for managing the competition and communications.
                    </p>

                    <p className="text-heading3-bold mt-5 mb-2">6. Your Choices</p>
                    <p>
                        Participation in the competition and provision of step count data are entirely voluntary. If you prefer not to participate, you can opt out at any time. Additionally, if you wish to have your personal information removed from our records following the competition, please contact us through Teams.
                    </p>

                    <p className="text-heading3-bold mt-5 mb-2">7. Changes to this Privacy Policy</p>
                    <p>
                        This Privacy Policy may be updated periodically. Substantial changes will be communicated through the App or via email. Continued use of Walk to Win after modifications indicates your acceptance of the revised policy.
                    </p>

                    <p className="text-heading3-bold mt-5 mb-2">8. Contact Us</p>
                    <p>
                        Should you have any inquiries, concerns, or requests concerning your personal information or this Privacy Policy, please reach out to us(Xians Well-Being Innovative) through Teams.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page;