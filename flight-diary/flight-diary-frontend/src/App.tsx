import { useEffect, useState } from 'react';
import diaryService from './services/diaries';
import CreateFlight from './components/CreateFlight';
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
        <CreateFlight diaries={diaries} setDiaries={setDiaries}/>
        <h2>Diaries</h2>
        {Object.values(diaries).map((diary: Diary) => (
          <div key={diary.id}>
            <h3>{diary.date}</h3>
            <p>{diary.visibility}</p>
            <p>{diary.weather}</p>
          </div>
        ))}
    </div>
  )
}

export default App
