def calculate_admission_probability(gpa, english_score):

    # pondération simple
    gpa_weight = 0.4
    english_weight = 0.2

    normalized_gpa = gpa / 4
    normalized_english = english_score / 120

    probability = (normalized_gpa * gpa_weight) + (normalized_english * english_weight)

    return round(probability,2)