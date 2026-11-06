import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { NETFLIX_BG_IMAGE } from '../utils/constants'
import useGeminiRecommendations from '../hooks/useGeminiRecommendations'

const GptSearchPage = () => {
  const {loading,fetchGeminiRecommendations,error} = useGeminiRecommendations();
  return (
    <div >
      <div className='fixed -z-10'><img src={NETFLIX_BG_IMAGE} alt="Background-image "/></div>
      <GptSearchBar loading={loading} fetchGeminiRecommendations={fetchGeminiRecommendations}/>
      <GptMovieSuggestions loading={loading} error={error}/>
    </div>
  )
}

export default GptSearchPage