import { FC, useState } from 'react';
import Button from '../shared/Button';
import StoryDetail from './StoryDetail';
import { fakeStoryData } from '../../pieces/StoryType';
type storyProps = {
  className?: string;
};

const Story: FC<storyProps> = (props) => {
  const [hasStoryDetail, setHasStoryDetail] = useState(false);

  const generateStoryBro = () => {
    setHasStoryDetail(true);
  };

  return <>
    <section id="story" className={`font-sans text-xl h-full max-h-full overflow-hidden ${props.className}`}>
      <div className="overflow-y-auto min-h-full p-8 flex flex-row gap-4 justify-evenly items-center text-center">
        { hasStoryDetail ?
          <StoryDetail storyData={fakeStoryData} className="" /> :
          <Button onClick={generateStoryBro}>Generate</Button>
        }
      </div>
    </section>
  </>;
};

export default Story;