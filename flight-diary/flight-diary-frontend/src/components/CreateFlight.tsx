import diaryService from "../services/diaries";
import { Diary } from "../types";

interface Props {
  diaries: Diary[],
  setDiaries: React.Dispatch<React.SetStateAction<Diary[]>>
}

const CreateFlight = ({ diaries, setDiaries } : Props) => {
  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLFormElement;
    const newDiary = {
      date: target.date.value,
      visibility: target.visibility.value,
      weather: target.weather.value,
      comment: target.comment.value
    };
    const response = await diaryService.postDiary(newDiary);
    setDiaries(diaries.concat(response.data));
  };

  return (
    <div>
      <h2>Add new flight diary</h2>
      <form onSubmit={submitHandler}>
        <div>
          Date: 
          <input type="date" name="date"/>
        </div>
        <div>
          Visibility:
          <input type="radio" name="visibility" id="poor" value="poor" />
          <label htmlFor="poor">poor</label>
          <input type="radio" name="visibility" id="good" value="good" />
          <label htmlFor="good">good</label>
        </div>
        <div>
          Weather:
          <input type="radio" name="weather" id="sunny" value="sunny" />
          <label htmlFor="sunny">sunny</label>
          <input type="radio" name="weather" id="cloudy" value="cloudy" />
          <label htmlFor="cloudy">cloudy</label>
          <input type="radio" name="weather" id="windy" value="windy" />
          <label htmlFor="windy">windy</label>
          <input type="radio" name="weather" id="rainy" value="rainy" />
          <label htmlFor="rainy">rainy</label>
        </div>
        <div>
          Comment:
          <input type="text" name="comment" placeholder='add comment here...'/>
        </div>
        <button type='submit'>add</button>
      </form>
    </div>
)};

export default CreateFlight;