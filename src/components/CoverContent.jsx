import { applyDynamicTokens, getCurrentExperienceYears } from "../service/util";
import Avatar from "./Avatar";
import PdfGenerator from "./PdfGenerator";
import Reveal from "./Reveal";

const MetaItem = ({ icon, children, href }) => {
  const className =
    "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-blue-50 ring-1 ring-white/15";
  const content = (
    <>
      <i className={`${icon} w-4 text-center`} aria-hidden="true"></i>
      <span>{children}</span>
    </>
  );

  return href ? (
    <a href={href} className={`${className} transition-colors hover:bg-white/20`}>
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  );
};

const CoverContent = ({ datalang }) => {
  const { info, ui } = datalang;
  const post = applyDynamicTokens(info.post);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 px-6 py-10 sm:px-8 sm:py-12">
      {/* Manchas decorativas, puramente visuales. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      />

      <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:items-start lg:text-left">
        <Reveal variant="zoom" className="flex-shrink-0">
          <Avatar name={info.name} className="h-32 w-32 lg:h-40 lg:w-40" />
        </Reveal>

        <div className="min-w-0 flex-1">
          <Reveal
            as="h1"
            variant="left"
            className="text-balance text-3xl font-bold leading-tight text-white lg:text-5xl"
          >
            {info.name}
          </Reveal>

          <Reveal
            as="p"
            variant="left"
            delay={60}
            className="mt-2 text-base font-medium text-primary-100 lg:text-lg"
          >
            {info.role}
          </Reveal>

          <Reveal
            as="p"
            variant="left"
            delay={120}
            className="mt-4 max-w-3xl leading-relaxed text-blue-50/90"
          >
            {post}
          </Reveal>

          <Reveal
            variant="left"
            delay={180}
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            <MetaItem icon="fas fa-location-dot">{info.location}</MetaItem>
            <MetaItem icon="fas fa-envelope" href={`mailto:${info.email}`}>
              {info.email}
            </MetaItem>
            <MetaItem icon="fas fa-briefcase">
              {getCurrentExperienceYears()} {ui.experienceBadge}
            </MetaItem>
          </Reveal>

          <Reveal
            delay={240}
            className="d-print-none mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <PdfGenerator datalang={datalang} />
            <a
              href={`mailto:${info.email}`}
              className="btn border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
              {ui.contactTitle}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CoverContent;
