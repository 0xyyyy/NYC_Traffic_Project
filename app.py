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
# print(pd.read_sql("SELECT * FROM trraffic", engine))

Base = automap_base()

Base.prepare(engine, reflect = True)

trraffic_ = Base.classes.trraffic

app = Flask(__name__)

@app.route("/")
def home():
    return f"""Available paths: <br>
            /api/v1.0/trraffic <br>"""

@app.route("/api/v1.0/trraffic")
def trraffic():
    session = Session(engine)

    results = session.query(trraffic_.ID, trraffic_.Entry_ID, trraffic_.Segment_ID, trraffic_.Roadway_Name, trraffic_.From_, trraffic_.To_, trraffic_.Direction, trraffic_.Date, trraffic_.time12_1AM, trraffic_.time1_2AM, trraffic_.time2_3AM, trraffic_.time3_4AM, trraffic_.time4_5AM, trraffic_.time5_6AM, trraffic_.time6_7AM, trraffic_.time7_8AM, trraffic_.time8_9AM, trraffic_.time9_10AM, trraffic_.time10_11AM, trraffic_.time11_12PM, trraffic_.time12_1PM, trraffic_.time1_2PM, trraffic_.time2_3PM, trraffic_.time3_4PM, trraffic_.time4_5PM, trraffic_.time5_6PM, trraffic_.time6_7PM, trraffic_.time7_8PM, trraffic_.time8_9PM, trraffic_.time9_10PM, trraffic_.time10_11PM, trraffic_.time11_12AM, trraffic_.Latitude, trraffic_.Longitude, trraffic_.Month, trraffic_.Day, trraffic_.Year)

    session.close()

    traffic_info = []
    for ID, Entry_ID, Segment_ID, Roadway_Name, From_, To_, Direction, Date, time12_1AM, time1_2AM, time2_3AM, time3_4AM, time4_5AM, time5_6AM, time6_7AM, time7_8AM, time8_9AM, time9_10AM, time10_11AM, time11_12PM, time12_1PM, time1_2PM, time2_3PM, time3_4PM, time4_5PM, time5_6PM, time6_7PM, time7_8PM, time8_9PM, time9_10PM, time10_11PM, time11_12AM, Latitude, Longitude, Month, Day, Year in results:
        traffic_dict = {}
        traffic_dict["ID"] = ID,
        traffic_dict["Entry_ID"] = Entry_ID,
        traffic_dict["Segment_ID"] = Segment_ID,
        traffic_dict["Roadway_Name"] = Roadway_Name,
        traffic_dict["From"] = From_,
        traffic_dict["To"] = To_,
        traffic_dict["Direction"] = Direction,
        traffic_dict["Date"] = Date,
        traffic_dict["12_1AM"] = time12_1AM,
        traffic_dict["1_2AM"] = time1_2AM,
        traffic_dict["2_3AM"] = time2_3AM,
        traffic_dict["3_4AM"] = time3_4AM,
        traffic_dict["4_5AM"] = time4_5AM,
        traffic_dict["5_6AM"] = time5_6AM,
        traffic_dict["6_7AM"] = time6_7AM,
        traffic_dict["7_8AM"] = time7_8AM,
        traffic_dict["8_9AM"] = time8_9AM,
        traffic_dict["9_10AM"] = time9_10AM,
        traffic_dict["10_11AM"] = time10_11AM,
        traffic_dict["11_12PM"] = time11_12PM,
        traffic_dict["12_1PM"] = time12_1PM,
        traffic_dict["1_2PM"] = time1_2PM,
        traffic_dict["2_3PM"] = time2_3PM,
        traffic_dict["3_4PM"] = time3_4PM,
        traffic_dict["4_5PM"] = time4_5PM,
        traffic_dict["5_6PM"] = time5_6PM,
        traffic_dict["6_7PM"] = time6_7PM,
        traffic_dict["7_8PM"] = time7_8PM,
        traffic_dict["8_9PM"] = time8_9PM,
        traffic_dict["9_10PM"] = time9_10PM,
        traffic_dict["10_11PM"] = time10_11PM,
        traffic_dict["11_12AM"] = time11_12AM,
        traffic_dict["Latitude"] = Latitude,
        traffic_dict["Longitude"] = Longitude, 
        traffic_dict["Month"] = Month, 
        traffic_dict["Day"] =  Day, 
        traffic_dict["Year"] = Year 
        traffic_info.append(traffic_dict)
    return jsonify(traffic_info)

@app.route("/home")
def landingPage():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)