import { FC } from 'react';

type StoryDetailProps = {
  className?: string;
};

const StoryDetail: FC<StoryDetailProps> = (props) => {
  return <>
    <section id="storyDetail" className={`flex flex-col gap-4 w-full max-w-7xl ${props.className}`}>
      <div className="story-block">Theme</div>
      <section className="contents lg:flex lg:flex-row gap-4 justify-evenly">
        <div className="story-block lg:w-1/2 ">
          <h3>Characters</h3>
          <ul>
            <li>
              <div>
                <h4>Protagonist:</h4>
                <p>Blah bla blah</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="story-block lg:w-1/2 ">Setting</div>
      </section>
      <div className="story-block">Plot</div>
    </section>
  </>;
};

export default StoryDetail;