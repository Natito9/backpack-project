import Head from 'next/head';

export default function Head() { return(
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
    content="https://yourdomain.com/assets/social-preview.jpg"
  />
  <meta property="og:url" content="https://yourdomain.com/" />
  <meta property="og:type" content="website" />

    </Head>
  );

}