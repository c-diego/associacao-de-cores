from collections import defaultdict
import csv, json

def read_csv(path):
  data_list = []

  with open(path, newline='\n') as file:
    reader = csv.DictReader(file, delimiter=',', quotechar='"')
    data_list = list(reader)
  
  return data_list

def create_dict(data_list):
  data_dict = defaultdict(list)

  for participant_answer in data_list:
    for question, answer in participant_answer.items():
        
        if (answer.isdigit()):
          answer = int(answer)
        
        data_dict[question].append(answer)

  return data_dict

def save_dict_to_json(data_dict, path):
  with open(path, 'w', encoding='UTF-8') as file:
    json.dump(data_dict, file, ensure_ascii=False, indent=2)

csv_file = 'hallock.csv'
json_file = 'hallock.json'

data_list = read_csv(csv_file)
data_dict = create_dict(data_list)
save_dict_to_json(data_dict, json_file)