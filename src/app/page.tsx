'use client';
import { Breadcrumb, ButtonDefault, InputText } from '@/components/ui/parts';
import { ERRORMESSAGE } from '@/contexts/errorMessage';
import { useQuery } from '@/features/queryParams';
import { validateEmail } from '@/utils/validate';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ email: '' });
  const [formError, setFormError] = useState({ email: false });
  const { targetQueryValue, loading, changeQueryValue } = useQuery({
    target: '',
    text: '',
    email: '',
  });
  return (
    <>
      <Breadcrumb crumbs={[{ label: 'about', link: '/' }]} />
      <InputText
        value={form.email}
        onChange={(value) => setForm({ email: value })}
        forId="email"
        label="メールアドレス"
        isError={formError.email}
        setIsError={(value) => setFormError({ email: value })}
        onValidate={validateEmail}
        errorMessage={ERRORMESSAGE.validate.email}
      />
      <ButtonDefault
        label="送信"
        action={() => changeQueryValue({ queryTargets: 'email', newValues: form.email, link: '/' })}
        disabled={form.email === '' || formError.email}
        size="xl"
      />
      <p>{!loading && `${targetQueryValue.email}`}</p>
    </>
  );
}
