'use client';
import { Breadcrumb, ButtonDefault, InputText, Loading } from '@/components/ui/parts';
import { APPURLS } from '@/contexts/appUrls';
import { ERRORMESSAGE } from '@/contexts/errorMessage';
import { PAGENAME } from '@/contexts/pageName';
import { useQuery } from '@/features/queryParams';
import { validateEmail } from '@/utils/validate';
import { useState } from 'react';

export const Form = () => {
  const [form, setForm] = useState({ email: '' });
  const [formError, setFormError] = useState({ email: false });
  const { targetQueryValue, loading, changeQueryValue } = useQuery({
    target: '',
    text: '',
    email: '',
  });
  return (
    <>
      <Breadcrumb crumbs={[{ label: PAGENAME.about, link: APPURLS.about }]} />
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
      <Loading isLoading={loading}>
        <p>{`${targetQueryValue.email}`}</p>
      </Loading>
    </>
  );
};
