import { FC } from 'react';
import { CharacterData } from '../pieces/StoryType';

type CharacterProps = {
  characterData: CharacterData;
};

const Character: FC<CharacterProps> = (props) => {
  const {characterData: {initialDescriptor, secondaryDescriptor, tertiaryDescriptor, goal}, } = props;

  const formatCharacterData = () => {
    // format the data into a sentence/sentences with correct spacing and grammar (good luck figuring that out)

  };

  return <>
    <h4 className="mb-2 underline">Protagonist:</h4>
    <p>
      {`${initialDescriptor} ${secondaryDescriptor} ${tertiaryDescriptor}.${goal ? ' ' + goal : ' They have no goal in life'}`}
    </p>
  </>;
};

export default Character;