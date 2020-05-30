import { BaseUrlProps } from 'SharedProps/BaseUrl'
import { MovieProps } from 'Components/MovieCards/data'

export interface MoviesProps extends BaseUrlProps {
  movies: MovieProps[]
}
