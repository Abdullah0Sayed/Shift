import '../css/footer.css';

import logo from '../images/logo.svg';
import '../css/logo.css';

import Box from '../components/Box';
import location from '../images/location.gif';
import workinghours from '../images/workinghours.gif';
import time from '../images/time.gif';
import email from '../images/email.gif';


import facebook from '../images/facebook.png';
import tiktok from '../images/tiktok.png';
import youtube from '../images/youtube.png';
import snapchat from '../images/snapchat.png';

import SocialLinks from './SocialLinks';


function Footer() {
    return (
        <div class="card text-center footer">

                <div class="card-body">
                    <Box icon={time} title="مواعيد العمل" description="من الخميس للجمعة : 6:00 ص - 6:00 م" />
                    <Box icon={email} title="البريد الإلكتروني" description="info@dettaglioauto.sa" />
                    <Box icon={location} title="مقر الشركة" description="طريق وادي وج , المثناه , 26511 الطائف , السعودية" />
                </div>
                <div class="links">
                    <SocialLinks link="" icon={facebook}/>
                    <SocialLinks link="" icon={youtube}/>
                    <SocialLinks link="" icon={tiktok}/>
                    <SocialLinks link="" icon={snapchat}/>
                </div>
                <p className='p-2 m-0'>سياسة الخصوصية</p>
                <div class="card-footer ">
                    جميع الحقوق محفوظة لدى SHIFT
                </div>
            </div>
    );
}

export default Footer;