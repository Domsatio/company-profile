import Link from "next/link";
import Image from "next/image";
import DomsatLogo from "../../public/assets/images/Domsat.svg";
import ListComponent from "./ListComponent";
import { Separator } from "./ui/separator";
import { FooterLinkProps, FooterSectionProps, ListFooterLink, ListFooterLinkProps, socialLinks } from "@/constants/Footer";
import { Button } from "./ui/button";
import { Mail, MapPin } from "lucide-react";

const FooterLink = ({ label, href }: FooterLinkProps) => (
  <li>
    <Link href={href} className="hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

const FooterSection = ({ title, links }: FooterSectionProps) => (
  <div className="space-y-4">
    <h3 className="text-sm font-semibold text-zinc-100">
      {title}
    </h3>
    <ul className="space-y-2 text-sm text-zinc-400">
      <ListComponent
        data={links}
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
);

export default function Footer() {
  return (
    <footer className="bg-[#35363d] py-10 md:py-16 rounded-t-3xl dark:bg-dark dark:border-b-transparent dark:border dark:border-white">
      <div className="px-5 md:px-20 space-y-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Brand Section */}
          <div className="w-full space-y-7">
            <div className="flex items-center gap-3">
              <Image src={DomsatLogo} alt="Domsat" width={30} height={30} />
              <span className="text-xl md:text-2xl text-zinc-100 font-semibold">Domsat</span>
            </div>
            <div className="space-y-2 text-sm text-zinc-400">
              <div className="flex gap-3">
                <MapPin size={18} />
                <p>Jalan Puspowarno No. 94, RT 3, RW 1, Mangkujayan <br />
                  Ponorogo, Ponorogo, Jawa Timur, 63413</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <p>domsattech@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:w-4/5 flex justify-between">
            {(Object.keys(ListFooterLink) as Array<keyof ListFooterLinkProps>).map((section) => (
              <FooterSection
                key={section}
                title={section}
                links={ListFooterLink[section]}
              />
            ))}
          </div>
        </div>

        <Separator className="bg-zinc-400" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-4">
          <div className="text-xs sm:text-sm text-zinc-400 text-center md:text-start">
            &copy; PT. Domsat Solutechno Global {new Date().getFullYear()}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
              >
                <Button className="cursor-newtab rounded-full bg-[#35363d] border border-zinc-400 font-light hover:bg-zinc-800 transition-colors hover:text-zinc-100">
                  <Icon size={20} />
                  {label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
