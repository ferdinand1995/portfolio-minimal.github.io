import React from "react";
import { Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="405 - Page Not Found" />
      <Page>
        <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h1>405 - Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
        </div>
      </Page>
    </>
  );
}
