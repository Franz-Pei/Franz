import numpy as np

def generate_surprises():
    special_tiles = np.random.choice(np.arange(1, 101), 10)
    return special_tiles
