export type StoryType = {
  theme: string;
  characters: CharacterData[];
  setting: SettingData;
  plotline: PlotlineData;
};

export type CharacterData = {
  initialDescriptor: string;
  secondaryDescriptor: string;
  characterTwist: string;
  goal?: string;
};

export type SettingData = {
  tempSetting: string;
};

export type PlotlineData = {
  tempPlot: string;
};

export const fakeStoryData: StoryType = {
  theme: 'Action/Adventure',
  characters: [
    {
      initialDescriptor: 'A witty young man',
      secondaryDescriptor: 'with a zest for life',
      characterTwist: ', but is scared of talking to girls',
    },
    {
      initialDescriptor: 'A witty young man',
      secondaryDescriptor: 'with a zest for life',
      characterTwist: ', but is scared of talking to girls',
    }
  ],
  setting: { tempSetting: "A temporary setting for now. It's ancient and beautful" },
  plotline: { tempPlot: 'The protagonists family was lost in the bermuda triangle during a plane heist. They embark on a journey to recover their loved ones. The first step is leaving their house.' },
};