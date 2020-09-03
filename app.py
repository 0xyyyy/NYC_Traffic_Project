#import dependencies
from flask import Flask, jsonify, render_template
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd

#Create engine to connect to sqlite database
engine = create_engine("sqlite:///db.sqlite")

#Check that engine connection is working 
print(pd.read_sql("SELECT * FROM trraffic", engine))