import { Layout } from '@/components/layouts';
import { Form } from '@/components/pages/about/form';
import { PAGENAME } from '@/contexts/pageName';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About page',
};

export default function About() {
  return (
    <Layout pageName={PAGENAME.about}>
      <Form />
    </Layout>
  );
}
