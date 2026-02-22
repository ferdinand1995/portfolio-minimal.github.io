import React from "react";
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function ColophonPage() {
  return (
    <>
      <Seo title="Colophon" useTitleTemplate={true} noIndex={true} />
      <Page>
        <LegalSection sectionId="colophon" heading="Colophon" />
      </Page>
    </>
  );
}
