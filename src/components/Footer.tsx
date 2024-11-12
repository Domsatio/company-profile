import Link from "next/link";
import { Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";
import Image from "next/image";
import LogoDomsat from "../../public/assets/images/logodomsat.png";
import ListComponent from "./ListComponent";

type ListFooterLinkProps = {
  Home: { label: string; href: string }[];
  Help: { label: string; href: string }[];
  Company: { label: string; href: string }[];
};

type FooterLinkProps = {
  label: string;
  href: string;
};

const ListFooterLink: ListFooterLinkProps = {
  Home: [
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  Help: [
    { label: "FAQ", href: "/faq" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  Company: [
    { label: "Career", href: "/career" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function Footer() {
  const FooterLink = ({ label, href }: FooterLinkProps) => (
    <li>
      <Link href={href} className="hover:text-white transition-colors">
        {label}
      </Link>
    </li>
  );
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-12 relative lg:rounded-t-3xl">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Brand Section */}
          <div className="w-full space-y-4">
            <div className="flex items-center gap-2 font-semibold">
              <Image src={LogoDomsat} alt="Domsat" width={60} height={60} />
              <span className="text-xl">Domsat</span>
            </div>
            <div className="space-y-2 text-sm text-zinc-400">
              <p>Designs Crafted with Passion and Precision</p>
              <p>Leading the digital revolution</p>
            </div>
          </div>

          <div className="md:w-4/5 flex justify-between">
            {/* Home Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Home
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <ListComponent
                  data={ListFooterLink.Home}
                  renderItem={(item) => (
                    <FooterLink
                      key={item.label}
                      label={item.label}
                      href={item.href}
                    />
                  )}
                />
              </ul>
            </div>

            {/* Help Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Help
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <ListComponent
                  data={ListFooterLink.Help}
                  renderItem={(item) => (
                    <FooterLink
                      key={item.label}
                      label={item.label}
                      href={item.href}
                    />
                  )}
                />
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <ListComponent
                  data={ListFooterLink.Company}
                  renderItem={(item) => (
                    <FooterLink
                      key={item.label}
                      label={item.label}
                      href={item.href}
                    />
                  )}
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-400 text-center md:text-start">
            © Domsat {new Date().getFullYear()}
            <span className="block md:inline md:ml-2">
              All Rights Reserved.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com"
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-zinc-100 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5 text-zinc-900" />
        </button> */}
      </div>
    </footer>
  );
}
