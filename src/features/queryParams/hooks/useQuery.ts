import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { typeChangeQueryParms } from '..';

export const useQuery = <T extends object>(queryTargets: T) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [targetQueryValue, setTargetQueryValue] = useState<T>(queryTargets);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line
    const _tq: any = [];
    Object.keys(targetQueryValue).map((target) => {
      _tq.push({ [`${target}`]: searchParams.get(target) });
    });
    const mergedObject = _tq.reduce((result: object, obj: object) => {
      return { ...result, ...obj };
    }, {});
    setTargetQueryValue(mergedObject);
    setLoading(false);
    // eslint-disable-next-line
  }, [searchParams]);

  // 1つのクエリに対して1つしか変更できない
  const changeQueryValue = (value: typeChangeQueryParms) => {
    const newSearchParams = new URLSearchParams(searchParams);
    switch (typeof value.queryTargets) {
      case 'string':
        newSearchParams.set(`${value.queryTargets}`, value.newValues as string);
        break;
      default:
        value.queryTargets.map((target, index) => {
          newSearchParams.set(
            `${target}`,
            (value.newValues[index] as string) || value.newValues[0]
          );
        });
        break;
    }
    router.push(`${value.link}?${newSearchParams.toString()}`);
  };

  return { targetQueryValue, loading, changeQueryValue };
};
