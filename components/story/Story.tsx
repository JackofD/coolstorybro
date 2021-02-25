import { FC } from 'react';
// import storyStyles from '../../styles/story.module.css';

type storyProps = {
  className?: string;
};

const Story: FC<storyProps> = (props) => {
  return <>
    <section id="story" className={`font-sans text-xl h-full max-h-full overflow-hidden ${props.className}`}>
      <div className="overflow-y-auto min-h-full p-8 flex flex-row gap-4 justify-evenly items-center text-center">
        {/* This will probably be conditionally rendered based on things */}
          <div>Story details</div>
          <div>Story inputs</div>
      </div>
    </section>
  </>;
};

export default Story;