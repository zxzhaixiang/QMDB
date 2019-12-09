# QMDB
Quantum Movie Database is created by aggregating MovieLens dataset and TMDB 5000 dataset to enrich the content of movies. More specifically, we 
- select a relatively dense subset of MovieLens 27M dataset, both on movies and users
- tokenize some of the movie meta data from the TMDB dataset, including casts, directors, key descriptions
- merge the two data sources into one integrated dataset
The dataset can be found here
./processed_data/ratings_with_kws.csv  (contain a curated version of user/movie ratings from the full MovieLens 27M dataset. The data density is much higher than the origianl sparse dataset)
./processed_data/movies_with_kws.csv (content for movies)

## Movie Lens Dataset
The latest Movie Lens Dataset was releasted in 09/2018 and can be donwloaded here
https://grouplens.org/datasets/movielens/latest/

The small version (100,000 ratings and 3,600 tag applications applied to 9,000 movies by 600 users) is included here.

The large version (27,000,000 ratings and 1,100,000 tag applications applied to 58,000 movies by 280,000 users) will be the one we will be working with. Unfortunately it is too big for Github (100MB upper limit).

## TMDB 5000 Dataset
https://www.kaggle.com/tmdb/tmdb-movie-metadata/downloads/tmdb-5000-movie-dataset.zip/2

5000 movies with information like genre, average rating, company, language, id, overview, box office, etc.


## APIs

The Movie Database (TMDB) has nice APIs 
https://www.themoviedb.org/documentation/api

Also from OMDB:
http://www.omdbapi.com/

