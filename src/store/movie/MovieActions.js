// import axios from 'axios';

// import { API_URL } from '../constants';
// import { request } from '../../lib/http';

const getMovies = function getMovies(queryParams) {
	return {
		type: 'GET_MOVIES',
		queryParams,
	};
};

const getMovie = function getMovie(movie_id) {
	return {
		type: 'GET_MOVIE',
		movie_id,
	};
};

/*

export const getProject = (project_id) => {
	return async (dispatch) => {
		try {
			const { data } = await request('GET', `/projects/${project_id}`);
			dispatch({
				type: 'GET_PROJECT_INFO',
				projectInfo: data,
			});
		} catch (error) {
			dispatch({
				type: 'GET_PROJECT_INFO_ERROR',
				errorMessage: error,
			});
		}
	};
};
*/

export {
	getMovies,
	getMovie,
};
