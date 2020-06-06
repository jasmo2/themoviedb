import { BaseUrlProps } from '../../SharedProps/BaseUrl'
import { MovieProps } from '../MovieCards/data'

export interface MoviesProps extends BaseUrlProps {
  movies: MovieProps[]
}
