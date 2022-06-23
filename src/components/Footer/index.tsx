import Image from 'next/image'
import logo from '@/src/assets/images/logo_muted.png'


export const Footer = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center bg-black h-28 items-center">
    <Image src={logo.src} layout="fixed" width={150} height={23} alt="FrontierX Logo" />
    </div>
  )
}