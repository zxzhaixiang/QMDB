# Lean Version of MovieLens-latest dataset
This movielens dataset is created based on the ml-latest dataset. 
    Only the users that give >800 rating and movies that received >50 rating are kept.
    After cleaning, 5406431 rating information for 10713 movies by 4380 users are kept.
    The rating matrix density is 11.521935752533835%.



## Load data
movies.csv, tags.csv and links.csv are saved in plain csv format and can be directly.
ratings.zip is saved as a gzip csv file. It can be read by two methods:
* unzip the file and obtain a plain csv file, and read the csv file.
* use pandas.read_csv with the keyword compression set to be "gzip"
