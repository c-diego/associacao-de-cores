import json, csv

def read_csv(path):
  questionaries = []

  with open(path, newline='\n') as file:
    reader = csv.DictReader(file, delimiter=',', quotechar='"')
    questionaries = list(reader)
  
  return questionaries

def save_to_json(data_dict, path):
  with open(path, 'w', encoding='UTF-8') as file:
    json.dump(data_dict, file, ensure_ascii=False, indent=2)

questionaries = read_csv('./dados/2023.csv')
total = {}

for questions in questionaries[0].keys():
    total[questions] = []

for questionary in questionaries:
  for question, answer in questionary.items():
    total[question].append(answer)

for question, answers in total.items():
  count = {}

  for answer in answers:
    count[answer] = total[question].count(answer)

  total[question] = count

save_to_json(total, 'total2023.json')