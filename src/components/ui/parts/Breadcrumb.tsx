import { APPURLS } from '@/contexts/appUrls';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  crumbs: { link: string; label: string }[];
}

export const Breadcrumb: FC<Props> = ({ crumbs }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="inline-flex items-center space-x-4 py-2 text-sm font-medium">
        <li className="inline-flex items-center">
          <Link href={APPURLS.top}>TOP</Link>
        </li>
        {crumbs.map((crumb, index) => {
          return (
            <li className={`inline-flex items-center space-x-4`} key={index}>
              <span>/</span>
              {index + 1 === crumbs.length ? (
                <p>{crumb.label}</p>
              ) : (
                <a href={crumb.link}>{crumb.label}</a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
