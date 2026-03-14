import sys
from admission_model import calculate_admission_probability

gpa = float(sys.argv[1])
english = int(sys.argv[2])

prob = calculate_admission_probability(gpa, english)

print(prob)