import { FC, useState } from 'react';
import Button from '../shared/Button';
import StoryDetail from './StoryDetail';
import { StoryType, } from '../../pieces/StoryType';
import { getInternalCharacterData } from '../../scripts/getStoryData';

type storyProps = {
  className?: string;
};

const emptyStory: StoryType = {
  theme: '',
  characters: [],
  setting: { tempSetting: '' },
  plotline: { tempPlot: '' },
}

const Story: FC<storyProps> = (props) => {
  const [randomData, setRandomData] = useState<StoryType>(emptyStory);
  const [hasStoryDetail, setHasStoryDetail] = useState(false);

  const generateStoryBro = async () => {
    // get the data from wherever...

    // Set generated character data
    setRandomData(
      {
        ...randomData,
        characters: [
          ...getInternalCharacterData()
        ]
      });
    // set the random data
    setHasStoryDetail(true);
  };

  return <>
    <section id="story" className={`font-sans text-xl h-full max-h-full overflow-hidden ${props.className}`}>
      <div className="overflow-y-auto min-h-full p-8 flex flex-col gap-4 justify-evenly items-center text-center">
        <Button onClick={generateStoryBro}>Generate</Button>
        {hasStoryDetail ? <StoryDetail storyData={randomData} className="" /> : ''}
      </div>
    </section>
  </>;
};

export default Story;
