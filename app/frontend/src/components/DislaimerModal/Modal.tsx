import * as React from "react";
import { Dialog, DialogSurface, DialogTitle, DialogContent, DialogBody, DialogActions, Button } from "@fluentui/react-components";
import "./Modal.css";

export const DisclaimerModal: React.FC = () => {
    const [open, setOpen] = React.useState(true);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <Dialog open={open} onOpenChange={(event, data) => setOpen(data.open)} modalType="alert">
            <DialogSurface id="my-dialog-surface" className="dialog-surface">
                <DialogBody id="my-dialog-body">
                    <DialogTitle id="custom-dialog-title">EduGPT Beta</DialogTitle>
                    <DialogContent id="custom-dialog-content">
                        <p>
                            <b>IMPORTANT TERMS OF USE FOR EDUGPT</b>
                        </p>
                        <p>
                            <b>16 October 2024</b>
                        </p>
                        <p>Callaghan Innovation (we, us) have developed the EduGPT Beta to facilitate easier access to government-provided information.</p>
                        <p>
                            EduGPT is available to you for free. The information that EduGPT draws from is limited to selected information from the Ministry of
                            Education Curriculum (Tāhūrangi) web site. We do not verify the accuracy of the content on that website. It is important to note
                            that EduGPT does not provide advice or offer viewpoint on behalf of the NZ Government or Ministry of Education.
                        </p>
                        <p>
                            EduGPT is still in a beta phase. EduGPT may not always be available. While our aim is that EduGPT provides useful information,
                            responses may not always be accurate and may not reflect correct, current or complete information. We are not liable for any errors
                            in the responses you receive and you should not rely on any response without independently confirming its accuracy.
                        </p>
                        <p>
                            Any information you input into EduGPT is deleted once you end your chat or session on EduGPT. Your history of inputs and EduGPT’s
                            responses are not retained beyond your current session. Despite this, we recommend that you do not input any personal information,
                            confidential or commercially sensitive information into EduGPT as a matter of best practice. You are solely responsible for any and
                            all information that you provide to EduGPT.
                        </p>
                        <p>
                            You must not use EduGPT in any way that causes, or may cause, damage to EduGPT, or impairs the availability or accessibility of
                            EduGPT for yourself or others.
                        </p>
                        <p>
                            You must not use EduGPT in any way, or for a purpose, which is unlawful, malicious, fraudulent, deceptive, abusive, offensive,
                            discriminatory or harmful.
                        </p>
                        <p>
                            To the maximum extent permitted by law, we will not be liable to you for your use of EduGPT or for any actions or outcomes that may
                            result from your use of EduGPT. If you are using EduGPT for business use and you are in trade, you agree that these terms are the
                            entire agreement between you and us for your use of EduGPT, and that you contract out of sections 9, 12A and 13 of the Fair Trading
                            Act 1986. These terms are governed by the laws of New Zealand.
                        </p>
                        <p>We may update these terms of use at any time by way of a pop up notice.</p>
                        <p>
                            <b>
                                By clicking I ACCEPT, you accept these terms of use. If you do not accept these terms of use, please do not click or access
                                EduGPT.
                            </b>
                        </p>
                        <p>For more information on EduGPT, see our Frequently Asked Questions.</p>
                        <br></br>
                        <p>
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="https://policies.google.com/privacy" tabIndex={-1}>
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="https://policies.google.com/terms" tabIndex={-1}>
                                Terms of Service
                            </a>{" "}
                            apply.
                        </p>
                        <div id="close-tc-modal-button" style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button className="tcmodal-button" onClick={() => setOpen(false)} tabIndex={-1}>
                                I Accept
                            </Button>
                        </div>
                    </DialogContent>
                    <DialogActions></DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    );
};

export default DisclaimerModal;
