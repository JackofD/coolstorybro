import { FC } from 'react';
import { CharacterData } from '../pieces/StoryType';

type CharacterProps = {
  characterData: CharacterData;
  charIndex: number;
};

const Character: FC<CharacterProps> = (props) => {
  const { characterData: { initialDescriptor, secondaryDescriptor, tertiaryDescriptor, goal }, charIndex } = props;

  const formatCharacterData = () => {
    // format the data into a sentence/sentences with correct spacing and grammar (good luck figuring that out)

  };

  const determineCharacterRole = (index: number) => {
    let charRole: string;
    switch (index) {
      case 0:
        charRole = 'Protagonist';
        break;

      case 1:
        charRole = 'Helper';
        break;
    }

    return charRole
  };

  return <>
    <h4 className="mb-2 underline">{determineCharacterRole(charIndex)}:</h4>
    <p className="mb-4">
      {`${initialDescriptor} ${secondaryDescriptor} ${tertiaryDescriptor}.${goal ? ' ' + goal : ' They have no goal in life'}`}
    </p>
  </>;
};

export default Character;