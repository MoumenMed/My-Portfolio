import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubLine,
  RiFacebookFill,
  RiWhatsappLine,
  RiMailLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex gap-x-5 text-xl">
      <Link
        href={"https://www.linkedin.com/in/mmoumen/?locale=de_DE"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href="mailto:mohamedmoumene.05@gmail.com"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
      <Link
        href={"https://wa.me/+212601252147"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://github.com/MoumenMed"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;
