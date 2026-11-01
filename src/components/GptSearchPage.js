import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BG_IMAGE } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div >
      <div className='absolute -z-10'><img src={NETFLIX_BG_IMAGE} alt="Background-image "/></div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearchPage