import { FC } from 'react';
import { CharacterData } from '../pieces/StoryType';

type CharacterProps = {
  characterData: CharacterData;
  charIndex: number;
};

const Character: FC<CharacterProps> = (props) => {
  const { characterData: { initialDescriptor, secondaryDescriptor, characterTwist, goal }, charIndex } = props;

  const determineArticle = (word: string) => {
    return /[aeiou]/.test(word.substring(0, 1)) ? "an" : "a";
  };

  const sentenceStarter = () => {
    const article = determineArticle(initialDescriptor);
    return article.length > 1 ? article.slice(0, 1).toUpperCase() + article.slice(1) : article.slice(0, 1).toUpperCase();
  };

  const determineTwistPunctuation = () => {
    return characterTwist.startsWith('but', 0) ? ',' : '.'
  };

  const formatCharacterData = () => {
    // format the data into a sentence/sentences with correct spacing and grammar (good luck figuring that out)
    return `${sentenceStarter()} ${initialDescriptor} ${secondaryDescriptor}${determineTwistPunctuation()} ${characterTwist}.`;
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

      default:
        charRole = 'Helper';
        break;
    }

    return charRole
  };

  return <>
    <h4 className="mb-2 underline">{determineCharacterRole(charIndex)}:</h4>
    <p className="mb-8">
      {`${formatCharacterData()} ${goal ? ' ' + goal : ''}`}
    </p>
  </>;
};

export default Character;