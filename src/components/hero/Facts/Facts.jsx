import { useState } from 'react';
import ScrumbleFacts from './ScrumbleFacts';
import PhrasesFacts from './PhrasesFacts';

export default function Facts({ onDone }) {
  const [phase, setPhase] = useState('scramble'); 

  return (
    <>
      {phase === 'scramble' && (
        <ScrumbleFacts onDone={() => setPhase('phrases')} />
      )}
      {phase === 'phrases' && (
        <PhrasesFacts onDone={onDone} />
      )}
    </>
  );
}
