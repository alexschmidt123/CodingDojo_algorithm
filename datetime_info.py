from datetime import date, datetime, timedelta

now = datetime.now()

user_input = '2022-02-24'

user_input_datetime_object = datetime.strptime(user_input, "%Y-%m-%d")

print(user_input_datetime_object)

td_object = timedelta(hours=24)

user_td = now - user_input_datetime_object

print(user_input_datetime_object == user_td)





