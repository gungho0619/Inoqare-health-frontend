import { AiOutlineMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '../../public/images/landingpage/header/logo.png';
import Link from 'next/link';
import { BsSnapchat } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { ImTwitter } from 'react-icons/im';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container_wrapper">
        <div className="footer_container col-sm-12 col-md-6 col-lg-4">
          <h1 className="footer_container_title">Who We Are!</h1>
          <p className="footer_container_description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Image
            alt=""
            src={Logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
          />
        </div>

        <div className="footer_container col-sm-12 col-md-5 col-lg-4">
          <h1 className="footer_container_title">Contact Info</h1>

          {contact.map((data, i) => {
            return (
              <p key={i} className="d-flex flex-column gap-2">
                <div className="d-flex gap-2  footer_contact_items_landing">
                  <span className="contact_logo">
                    <FaLocationArrow />
                  </span>
                  <span>Address: {data.address}</span>
                </div>
                <div className="d-flex gap-2 footer_contact_items_landing">
                  <span className="contact_logo">
                    <IoMdCall />
                  </span>
                  <span> {data.number}</span>
                </div>
                <div className="d-flex gap-2 footer_contact_items_landing">
                  <span className="contact_logo">
                    <AiOutlineMail />
                  </span>
                  <span>Email: {data.email}</span>
                </div>
              </p>
            );
          })}
        </div>

        <div className="footer_container col-sm-12 col-md-5 col-lg-3">
          <h1 className="footer_container_title">Send Us a Message</h1>
          <p>
            <form className="d-flex flex-column gap-2 ">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="+33 "
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="France "
                />
              </div>

              <button type="submit" className=" submit_button">
                Submit
              </button>
            </form>
          </p>
        </div>
      </div>
      <div className="footer_bottom_container">
        <div className="footer_legal">
          <p> &copy; All rights reserved 2022 {legal.company_name} </p>
          <Link href={legal.privacy_policy_link}>
            <p>Privacy Policy</p>
          </Link>
        </div>

        <div className="footer_contact_container">
          {social_media.map((data, i) => {
            return (
              <div key={i} className="social_logo">
                {data.logo}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

const contact = [
  {
    address: 'M. Jean Dupont 13 Rue des Fleurs 7500 Paris France',
    number: '+904567745678',
    email: 'info@yourdomain.com',
  },
];

const legal = {
  company_name: 'company name',
  privacy_policy_link: '#',
};

const social_media = [
  {
    title: 'fb',
    link: '#',
    logo: <GrFacebookOption />,
  },
  {
    title: 'insta',
    link: '#',
    logo: <AiOutlineInstagram />,
  },
  {
    title: 'twitter',
    link: '#',
    logo: <ImTwitter />,
  },
  {
    title: 'youtube',
    link: '#',
    logo: <AiFillYoutube />,
  },
  {
    title: 'snapchat',
    link: '#',
    logo: <BsSnapchat />,
  },
];
