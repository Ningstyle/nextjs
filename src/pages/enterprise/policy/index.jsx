import { useState } from 'react';
/* eslint-disable jsx-a11y/tabindex-no-positive */
import Main from '../../../layout/BusinessMain';
import PolicyMain from '../../../layout/PolicyMain';

import PolicyMatching from './policyMatching'; // 政策匹配
import PolicySearch from './policySearch'; // 政策检索
import Recommend from './recommend'; // 申报推荐
import PolicyDeclare from './policyDeclare'; // 政策申报

export default function Home() {
  const [policyIndex, setPolicyIndex] = useState(0);
  const policyTabClick = (item, index) => {
    console.log(item, index);
    setPolicyIndex(index);
  };
  return (
    <div>
      <Main indexKey="1" customClass="customClassMain">
        <PolicyMain policyTabClick={policyTabClick}>
          {
            // eslint-disable-next-line no-nested-ternary, max-len
            policyIndex === 0 ? <PolicyMatching /> : policyIndex === 1 ? <PolicySearch /> : policyIndex === 2 ? <Recommend /> : policyIndex === 3 ? <PolicyDeclare /> : null
          }
        </PolicyMain>
      </Main>
    </div>
  );
}
