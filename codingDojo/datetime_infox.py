from datetime import date, datetime, timedelta

now = date.today()

user_input = '2022-02-24'

user_input_date_object = date(year = int(user_input[0:4]), month=int(user_input[5:7]), day=int(user_input[8:10]))

print(user_input_date_object)

print(now < user_input_date_object)
