import { Layout } from '@/components/layouts';
import { PAGENAME } from '@/contexts/pageName';

export default function Home() {
  return (
    <Layout pageName={PAGENAME.top}>
      <p>TOP</p>
    </Layout>
  );
}
