import { FC } from 'react';
import { CharacterData, StoryType } from '../../pieces/StoryType';
import Character from '../Character';

type StoryDetailProps = {
  className?: string;
  storyData: StoryType;
};

const StoryDetail: FC<StoryDetailProps> = (props) => {
  const {storyData: {theme, protagonist, setting, plotline}} = props;
  return <>
    <section id="storyDetail" className={`flex flex-col gap-4 w-full max-w-7xl ${props.className}`}>
      <div className="story-block"><h3 className="text-2xl">Theme: {theme}</h3></div>
      <section className="contents lg:flex lg:flex-row gap-4 justify-evenly">
        <div className="story-block lg:w-1/2 ">
          <h3 className="text-2xl mb-4">Characters</h3>
          <ul>
            <li>
              <div>
                <Character characterData={protagonist} />
              </div>
            </li>
          </ul>
        </div>
        <div className="story-block lg:w-1/2 ">
          <h3 className="text-2xl mb-4">Setting</h3>
          <p>{setting.tempSetting}</p>
        </div>
      </section>
      <div className="story-block">
        <h3 className="text-2xl mb-4">Plot</h3>
        <p>{plotline.tempPlot}</p>
      </div>
    </section>
  </>;
};

export default StoryDetail;