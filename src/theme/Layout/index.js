import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith('/blog') && (
        <Head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7732822326275292" crossorigin="anonymous"></script>
        </Head>
      )}
      <Layout {...props} />
    </>
  );
}
