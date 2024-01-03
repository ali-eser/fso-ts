import { useEffect, useState } from 'react';
import diaryService from './services/diaries';

import { Diary } from './types';

const App = () => {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const diaries = await diaryService.getAll();
      setDiaries(diaries);
    };

    void fetchDiaries();
  }, [])

  return (
    <div>
        {Object.values(diaries).map((diary: Diary) => (
          <div>
            <h3>{diary.date}</h3>
            <p>{diary.visibility}</p>
            <p>{diary.weather}</p>
          </div>
        ))}
    </div>
  )
}

export default App
