export type StoryType = {
  theme: string;
  protagonist: Character;
  helper?: Character;
  settinhg: Setting;
  plotline: Plotline;
};

export type Character = {
  initialDescriptor: string;
  secondaryDescriptor: string;
  tertiaryDescriptor: string;
};

export type Setting = {

};

export type Plotline = {

};