from collections import defaultdict
import csv, json

def read_csv(path):
  data_list = []

  with open(path, newline='\n') as file:
    reader = csv.DictReader(file, delimiter=',', quotechar='"')
    data_list = list(reader)
  
  return data_list

def group_age_2003(age):
  if age <= 18:
    age_group = 'Até 18'
  elif age <= 24:
    age_group = '19 a 24'
  elif age <= 35:
    age_group = '25 a 35'
  elif age <= 50:
    age_group = '36 a 50'
  elif age <= 61:
    age_group = '51 a 69'
  else:
    age_group = 'mais de 70'

  return age_group


def create_dict(data_list):
  data_dict = defaultdict(list)

  for participant_answer in data_list:
    for question, answer in participant_answer.items():
        
        if (question == 'What is your age?'):
          answer = group_age_2003(int(answer))

        if (answer.isdigit()):
          answer = int(answer)
        
        data_dict[question].append(answer)

  return data_dict

def save_dict_to_json(data_dict, path):
  with open(path, 'w', encoding='UTF-8') as file:
    json.dump(data_dict, file, ensure_ascii=False, indent=2)

csv_file = '2003.csv'
json_file = '2003-2.json'

data_list = read_csv(csv_file)
data_dict = create_dict(data_list)
save_dict_to_json(data_dict, json_file)