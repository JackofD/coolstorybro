import { CharacterData } from "../pieces/StoryType";
import AdjectiveData from "../pieces/data/adjectiveData.json";
import NounData from "../pieces/data/characterNounData.json";
import CharacterSecondary from "../pieces/data/characterInitialDescriptor.json";
import GenericObject from "../pieces/data/GenericObjectData.json";
import CharacterTwist from "../pieces/data/characterSecondaryDescriptorData.json";

export function getInternalStoryData() {
  // Pick a theme

  // Get character info

  // Get setting info

  // Get plot info

};

export const getInternalCharacterData = (): CharacterData[] => {
  const characterCountRandomizer = getRandomItemInRangeMin(1, 3);
  let charArray: CharacterData[] = [];

  for(let i = 1; i <= characterCountRandomizer; i++) {
    // get adjective data
    const adjectiveOne = AdjectiveData.trait[getRandomItemInRange(AdjectiveData.trait.length)];
    const adjectiveTwo = AdjectiveData.descriptor[getRandomItemInRange(AdjectiveData.descriptor.length)];
    const characterNoun = NounData[getRandomItemInRange(NounData.length)]

    // get secondary descriptor
    const charaSecond = CharacterSecondary[getRandomItemInRange(CharacterSecondary.length)];

    const objectlevel = Object.keys(GenericObject)[getRandomItemInRange(Object.keys(GenericObject).length)];
    const charaSecondObject = GenericObject[objectlevel][getRandomItemInRange(GenericObject[objectlevel].length)];

    // get the character twist
    const charaTwist = CharacterTwist[getRandomItemInRange(CharacterTwist.length)];

    // compile into character data object
    const characterObj = {
      initialDescriptor: `${adjectiveOne} ${adjectiveTwo} ${characterNoun}`,
      secondaryDescriptor: `${charaSecond} ${charaSecondObject}`,
      characterTwist: `${charaTwist}`,
      goal: `` // TO DO
    }

    console.log(characterObj);
    charArray.push(characterObj);
  }

  return charArray;
}

export const getInternalSettingData = () => {

}

export const getInternalPlotData = () => {

}

export const getRandomItemInRange = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max))
};
export const getRandomItemInRangeMin = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};