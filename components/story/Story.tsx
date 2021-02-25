import { FC } from 'react';
// import storyStyles from '../../styles/story.module.css';

type storyProps = {
  className?: string;
};

const Story: FC<storyProps> = (props) => {
  return <>
    <section id="story" className={`font-sans text-xl h-full max-h-full overflow-hidden ${props.className}`}>
      <div className="overflow-y-auto min-h-full p-8">
        <div className="min-h-full flex flex-row gap-4 justify-evenly content-center text-center">
          <div>Story details</div>
          <div>Story inputs</div>
        </div>
      </div>
    </section>
  </>;
};

export default Story;