import { useLang } from "../provider/langContext";
import Reveal from "./Reveal";
import SocialCard from "./SocialCard";

const FooterContent = () => {
  const { datalang } = useLang();
  const { info, ui } = datalang;

  return (
    <footer className="d-print-none border-t bg-white border-gray-200 dark:border-slate-800 dark:bg-slate-950">
      <Reveal className="mx-auto max-w-5xl space-y-6 px-4 py-10 text-center sm:px-6">
        <div>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            {info.name}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            {info.role}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          {info.social.map((item) => (
            <SocialCard key={item.name} {...item} />
          ))}
          <a
            href={`mailto:${info.email}`}
            aria-label={info.email}
            title={info.email}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white dark:bg-slate-800 dark:text-slate-300"
          >
            <i className="fas fa-envelope text-sm" aria-hidden="true"></i>
          </a>
        </div>

        <div className="border-t pt-6 text-sm border-gray-100 text-gray-500 dark:border-slate-800 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {info.name}
          </p>
          <p className="mt-1">{ui.builtWith}</p>
        </div>
      </Reveal>
    </footer>
  );
};

export default FooterContent;
