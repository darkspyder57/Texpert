import '@/public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '@/public/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import '@/public/assets/vendor/aos/aos.css'
import '@/public/assets/vendor/glightbox/css/glightbox.min.css'
import '@/public/assets/vendor/swiper/swiper-bundle.min.css'
import '@/public/assets/css/main.css'
import BootstrapClient from './BootStrapClient'
import Script from 'next/script'



export const metadata = {
  title: "Texpert",
  description: "Learn and Grow",
  icons:{
    icon:["./android-chrome-512x512.png"],
    apple:["./apple-touch-icon.png"],
    android:["./android-chrome-512x512.png"],
    manifest:["./site.webmanifest"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        <BootstrapClient />
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></Script>
        <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/vendor/aos/aos.js" ></Script>
        <Script src="assets/vendor/glightbox/js/glightbox.min.js" ></Script>
        <Script src="assets/vendor/purecounter/purecounter_vanilla.js"></Script>
        <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>

        <Script src="assets/js/main.js"></Script>
      </body>
    </html>
  );
}
