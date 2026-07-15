#!/bin/bash

pip install -r requirements.txt

wget -O movies.pkl "https://huggingface.co/Prateek-Dhar-Dwivedi/Movie_Recommender_System_Files/resolve/main/movies.pkl"

wget -O similarity.pkl "https://huggingface.co/Prateek-Dhar-Dwivedi/Movie_Recommender_System_Files/resolve/main/similarity.pkl"
