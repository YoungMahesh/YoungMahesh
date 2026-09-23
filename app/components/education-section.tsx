import React from "react";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-20 border-b border-hairline bg-canvas py-12 sm:py-16 print-avoid-break">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-primary">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-ink">
            Education &amp; Foundation
          </h2>
        </div>

        <div className="rounded-xl border border-hairline bg-surface-card p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-hairline pb-4">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-ink">
                Bachelor of Commerce (B.Com)
              </h3>
              <p className="text-sm text-body font-sans mt-0.5">
                KSK College • Yashwantrao Chavan Maharashtra Open University (YCMOU), Beed, Maharashtra
              </p>
            </div>
            <span className="font-mono text-xs sm:text-sm text-muted rounded-full bg-canvas border border-hairline px-3 py-1 self-start sm:self-center">
              May 2016 – May 2019
            </span>
          </div>

          <div className="pt-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-muted mb-2">
              Continuous Systems &amp; Software Engineering Focus:
            </h4>
            <p className="font-sans text-xs sm:text-sm text-body leading-relaxed">
              Transitioned into high-performance software engineering through disciplined, deep-dive practice and implementation. 
              Independently engineered distributed storage proxies (S3/SigV4), native Git bundle archives, and in-process streaming database engines. 
              Proven ability to research primary protocol specifications, decompose complex distributed invariants, and deliver production-grade developer tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
