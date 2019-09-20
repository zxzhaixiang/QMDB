import pandas as pd
# ratings=pd.read_csv('data/movielens_latest/ml-latest-lean/ratings.zip', compression='gzip')
# tags=pd.read_csv('data/movielens_latest/ml-latest-lean/tags.csv')
# movies=pd.read_csv('data/movielens_latest/ml-latest-lean/movies.csv')

# movie_keywords=tags.groupby('movieId').apply(lambda x: x['tag'].tolist())
movie=pd.read_csv('data/processed_data/movies_with_kws.csv')
kws=movie.description_kws.tolist()+movie.cast_kws.tolist()
import ast
import re
# ast.literal_eval(kws[0])
kws=[' '.join(ast.literal_eval(x)) for x in kws]
corpus=[re.findall(r'(?u)\b\w+\b',x) for x in kws]
from gensim.models import Word2Vec, KeyedVectors
workdir='/Users/jluo/Downloads'
import time
t0=time.time()
model=  Word2Vec(size=300, min_count=1)
model.build_vocab(corpus) 
print('total key words',len(model.wv.vocab))
model.intersect_word2vec_format(
        workdir+'/GoogleNews-vectors-negative300.bin', binary=True, lockf=1.0)
print(time.time()-t0)
vocab=model.wv.vocab
print('total key words with vectors',len(model.wv.vocab))
model.wv.save('data/processed_data/kw_vectors.kv')
# to load the vectors
# wv = KeyedVectors.load('data/processed_data/kw_vectors.kv', mmap='r')