"use client"
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton, InstagramIcon, EmailIcon, EmailShareButton } from 'next-share'

const SocialShareIcon = () => {
  return (
    <div className='flex space-x-2'>
    <WhatsappShareButton
      url={'https://wa.me/919312091320'}
      title={'Greeting from Regent Seating'}
      separator=":: "
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>

    <FacebookShareButton
      url={'regentsc@gmail.com'}
      quote={'Greeting from Regent Seating'}
      hashtag={'#regentsc'}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <TwitterShareButton
      url={'regentsc@gmail.com'}
      title={'Greeting from Regent Seating'}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>

    <EmailShareButton
      url={'info@regentsc.co.in'}
      subject={'Greeting from Regent Seating'}
      body="body"
    >
      <EmailIcon size={32} round />
    </EmailShareButton>

    {/* <InstagramIcon className='w-7 rounded' /> */}
    </div>
  )
}

export default SocialShareIcon