import React from "react";
import Footer from "../components/footer";

export function FooterContainer () {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link >Story</Footer.Link>
                    <Footer.Link href ="#">Clients</Footer.Link>
                    <Footer.Link href ="#">Testimonials</Footer.Link>
                    <Footer.Link href ="#">Working hours</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Services</Footer.Title>
                    <Footer.Link >Relaxing massage</Footer.Link>
                    <Footer.Link href ="#">Thai Massage</Footer.Link>
                    <Footer.Link href ="#">meditation</Footer.Link>
                    <Footer.Link href ="#">Acro-yoga</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link >Mombasa</Footer.Link>
                    <Footer.Link href ="#">Nairobi</Footer.Link>
                    <Footer.Link href ="#">Diani</Footer.Link>
                    <Footer.Link href ="#">Support</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Social Media</Footer.Title>
                    <Footer.Link >Facebook</Footer.Link>
                    <Footer.Link href ="#">Linkedin</Footer.Link>
                    <Footer.Link href ="#">Youtube</Footer.Link>
                    <Footer.Link href ="#">Instagram</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}