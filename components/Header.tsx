import { FC } from 'react';

type headerProps = {
  className?: string;
};

const SiteHeader: FC<headerProps> = (props) => {
  return <>
    <div id="siteHeader" className={`px-8 flex flex-col place-content-center font-semibold font-sans text-4xl ${props.className}`}>
      Header !
    </div>
  </>;
};

export default SiteHeader;