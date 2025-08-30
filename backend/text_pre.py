from tensorflow.keras.preprocessing.text import one_hot
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np



def txt_preprocessing(txt):
    one_repo = one_hot(txt , 500)
    text =  pad_sequences([one_repo] , maxlen=8 , padding="post")
    return  np.array(text)
    