import { FC } from 'react';

type StoryDetailProps = {
  className?: string;
};

const StoryDetail: FC<StoryDetailProps> = (props) => {
  return <>
    <section id="storyDetail" className={`w-full max-w-8xl ${props.className}`}>
      The story details
    </section>
  </>;
};

export default StoryDetail;