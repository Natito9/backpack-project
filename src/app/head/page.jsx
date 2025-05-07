import Head from 'next/head';

export default function CoustumeHead() { return(
    <Head>
      <title>Backpack</title>
      <meta name="description" content="Helping Kids Understand Feelings - With Emmo! A digital friend supporting emotional exploration and self-awareness" />
      
      {/* Open Graph / Facebook */}
  <meta property="og:title" content="Backpack" />
  <meta
    property="og:description"
    content="Helping Kids Understand Feelings - With Emmo! A digital friend supporting emotional exploration and self-awareness"
  />
  <meta
    property="og:image"
      // Insert preview image when its available
    content="https://yourdomain.com/assets/social-preview.jpg"
  />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:type" content="website" />
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Backpack" />
  <meta
    name="twitter:description"
    content="Helping Kids Understand Feelings - With Emmo! A digital friend supporting emotional exploration and self-awareness"
  />
  <meta
    name="twitter:image"
    // Insert preview image when its available
    content="https://yourdomain.com/assets/social-preview.jpg"
  />

    </Head>
  );

}