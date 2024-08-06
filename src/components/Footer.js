import '../css/footer.css';

import logo from '../images/logo.svg';
import '../css/logo.css';

import tamara from '../images/tmara.webp';
import applePay from '../images/epay.png';
import masterCard from '../images/mastercard.png';
import mada from '../images/mada.png';
import visa from '../images/visa.webp';

import Box from '../components/Box';
import location from '../images/location.gif';
import workinghours from '../images/workinghours.gif';
import time from '../images/time.gif';
import email from '../images/email.gif';


import facebook from '../images/facebook.png';
import tiktok from '../images/tiktok.png';
import youtube from '../images/youtube.png';
import snapchat from '../images/snapchat.png';
import instagram from '../images/instagram.png';

import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom';


function Footer() {
    let date = new Date();
    let currentYear = date.getFullYear();
    return (
        <div className=''>
           
                <div class="card text-center footer">

                    <div class="card-body row justify-content-evenly">
                        <Box icon={time} title="مواعيد العمل" description="من الخميس للجمعة : 6:00 ص - 6:00 م" />
                        <Box icon={email} title="البريد الإلكتروني" description="info@dshift.sa" />
                        <Box icon={location} title="مقر الشركة" description="طريق وادي وج , المثناه , 26511 الطائف , السعودية" />
                    </div>
                    <div className='row following-payments justify-content-center gap-4'>

                        <div class="following col-md-3 col-sm-1">
                            <h1 className='following-title'>تابعنا على مواقع التواصل الإجتماعي</h1>
                            <div className='links'>
                                <SocialLinks link="" icon={facebook} />
                                <SocialLinks link="" icon={youtube} />
                                <SocialLinks link="" icon={tiktok} />
                                <SocialLinks link="" icon={snapchat} />
                                <SocialLinks link="" icon={instagram} />

                            </div>
                          
                        </div>
                        <div class="payments col-md-3  col-sm-1">
                            <h1 className='payments-title'>وسائل الدفع المتاحة في SHIFT</h1>
                            <div className='payment'>
                                <img src={applePay} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام ابل اى باي' />
                                <img src={visa} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام فيزا'/>
                                <img src={masterCard} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام ماستر كارد'/>
                                <img src={mada} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام شبكة مدى'/>
                                {/* <img src={tamara} alt="" class="payment-icon" title='يمكنك الدفع بإستخدام تمارا'/> */}
                            </div>
                           
                        </div>

                    </div>
                    
                    <Link to={'/privacy-policy'} className='privacy-policy'><p className='p-2 m-0 text-dark'>سياسة الخصوصية</p></Link>
                    <div class="card-footer ">
                       <span>جميع حقوق الملكية محفوظة لدى <span>shift</span> &copy; {currentYear} </span>
                      
                    </div>
                </div>

            

        </div>

    );
}

export default Footer;