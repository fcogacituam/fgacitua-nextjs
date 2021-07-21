import Head from "next/head";
import { useRouter } from "next/router";
import MainLayout from "../../components/layouts/main";

export default function Post() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <MainLayout>
      <Head>
        <title>Post</title>
      </Head>
      <div>
        <h2>Post {pid}</h2>
      </div>
      {JSON.stringify(router)}
    </MainLayout>
  );
}
