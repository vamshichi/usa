import Link from 'next/link'
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Our Offices</h3>
            <div>
              <h4 className="font-semibold">Dubai Office</h4>
              <p>Phone: +971 50 943 1529</p>
              <p>Email: dubai@maxpo.ae</p>
            </div>
            <div>
              <h4 className="font-semibold">Saudi Arabia Office</h4>
              <p>Phone: +971 50 943 1529</p>
              <p>Email: saudi@maxpo.ae</p>
            </div>
            <div>
              <h4 className="font-semibold">India Office</h4>
              <p>Phone: +91 9845114655</p>
              <p>Email: info@maxpo.ae</p>
            </div>
          </div>

          {/* About Us */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <h4 className="font-semibold mb-2">Maxpo Exhibitions Private Limited</h4>
            <p className="text-sm">
              Pioneering excellence in the exhibition industry, we elevate businesses globally through expertly curated trade shows and transformative conferences. Crafting success through tailored experiences, we are the leaders in orchestrating award-worthy ceremonies and securing event accreditations worldwide.
            </p>
          </div>

          {/* Connect with Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/maxpoexhibitions" className="hover:text-gray-300">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://x.com/maxpoae" className="hover:text-gray-300">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Maxpo Exhibitions Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

