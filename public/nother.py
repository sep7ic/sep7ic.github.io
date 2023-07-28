import random
import getch
import matplotlib.pyplot as plt
import matplotlib.image as mpimg

questions = [
    {
        'question': "In the legend “the foundations of rome”, which greek trojan hero sailed from macedon to sicily to laurentium in latium in search of a place to settle?",
        'options': ['A. Aeneas', 'B. Romulus', 'C. Achilles', 'D. Odysseus'],
        'answer': 'A',
        'extra': 'The answer was Aeneas. Both my man livy and virgil speak about this [for livy, his book “Ab urbe condita” and for virgil, “aeneid”]. Aeneas was the son of the goddess, venus, and a prince of troy. Aeneas sailed to sicily, where his father, anchises, then died. Then he travlleded to latium, located in central italy, where he met latinus. There are two theories as to what happened next, however the cooler one is that aeneas beat latinus in battle'
    },
    {
        'question': "Question 2: Who painted the Mona Lisa?",
        'options': ['A. Leonardo da Vinci', 'B. Vincent van Gogh', 'C. Pablo Picasso', 'D. Michelangelo'],
        'answer': 'A',
        'extra': 'Leonardo da Vinci began painting the Mona Lisa about 1503, and it was in his studio when he died in 1519.'
    }
]

def ask_question(questions):
    question = random.choice(questions)
    print(question['question'])
    for option in question['options']:
        print(option)
    user_answer = input("Enter the letter of your answer: ")
    is_correct = user_answer.lower() == question['answer'].lower()

    print(question['extra'])
    
    # Load and display the image
    image_path = '/home/gaius/Pictures/2.png'  # Replace with the actual path to your image
    img = mpimg.imread(image_path)
    plt.imshow(img)
    plt.axis('off')
    plt.show()

    print("--------------------------\nPress a key to proceed\n--------------------------")
    getch.getch()

    return is_correct, question

def run_quiz(questions):
    score_right = 0
    score_wrong = 0
    asked_questions = []

    while questions:
        is_correct, question = ask_question(questions)
        asked_questions.append(question)

        if is_correct:
            score_right += 1
        else:
            score_wrong += 1

        questions = [q for q in questions if q not in asked_questions]

    total_score = score_right - score_wrong
    print("\n--- Quiz Results ---")
    print(f"total score: {total_score}")
    print(f"questions right: {score_right}")
    print(f"questions wrong: {score_wrong}")

    percentage = (score_right / (score_right + score_wrong)) * 100
    grade = ""

    if percentage >= 95:
        grade = "n A+! macte virtute!!"
    elif percentage >= 90:
        grade = "n A! bene!"
    elif percentage >= 80:
        grade = " B! "
    elif percentage >= 70:
        grade = " C"
    elif percentage >= 60:
        grade = " D"
    else:
        grade = "n F. you tried, and thats what matters :-)"

    print(f"you scored a{grade}")

run_quiz(questions)
