import { FC } from 'react';
import { SettingData } from '../pieces/StoryType';

type SettingProps = {
  settingData: SettingData;
};

const Setting: FC<SettingProps> = props => {

  const { settingData: { settingInitial, settingSecondary, settingTidbit } } = props;


  return (
    <>
      <p className="mb-4">
        {`Our story takes place  ${settingInitial}. ${settingSecondary}.`}
      </p>
      <p>{`${settingTidbit}.`}</p>
    </>
  );
};

export default Setting;