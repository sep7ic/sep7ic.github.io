import random
""" 
I created this code on a debian based system.
I cant remember, but, getch for py may or may not be preinstalled with the Windows python distro
if not then download getch module from pip pls (pip install getch)
otherwise this code probably wont work :-(
"""
import getch

print(
'''
welcome to my quiz about ancient rome
     _
| ○ | |
†/│\)○(
 / \|_|
------------------------------- 
        
please press any key to begin. 
'''
)
getch.getch()

questions = [
    {
        'question': "In the legend “the foundations of rome”, which greek trojan hero sailed from macedon to sicily to laurentium in latium in search of a place to settle?",
        'options': ['A. Aeneas', 'B. Romulus', 'C. Achilles', 'D. Odysseus'],
        'answer': 'A', 
        'extra': 'The answer was Aeneas. Both my man livy and virgil speak about this [for livy, his book “Ab urbe condita” and for virgil, “aeneid”]. Aeneas was the son of the goddess, venus, and a prince of troy. Aeneas sailed to sicily, where his father, anchises, then died. Then he travlleded to latium, located in central italy, where he met latinus. There are two theories as to what happened next, however the cooler one is that aeneas beat latinus in battle'
    },
    {
        'question': "Who did latinus marry off to aeneas?",
        'options': ['A. Lavinius', 'B. Lavinia', 'C. Laurentium', 'D. Lucretia'],
        'answer': 'B',
        'extra': 'after aeneas met latinus, he made a deal with him and made a marriage alliance where he gave his daughter to aeneas to marry'
    },
    {
        'question': "Who was lavinia and aeneas’ son?",
        'options': ['A. Remus', 'B. Achilles', 'C. Diogenes', 'D. Ascanius'],
        'answer': 'D',
        'extra': 'n/a'
    },
    {
        'question': "Where was aeneas buried after the battle with the mezentius, the etruscans and the rutulians?",
        'options': ['A. Mediterranean Sea', 'B. By the River Numicus', 'C. the Palatine hill', 'D. Rome'],
        'answer': 'B',
        'extra': '###'
    },
    {
        'question': "Who founded Alba longa?",
        'options': ['A. Remus', 'B. Romulus', 'C. Ascanius', 'D. Aeneas'],
        'answer': 'C',
        'extra': 'Ascanius'
    },
    {
        'question': "Which alba longan king was struck down by lightning after self proclaiming he could create lightning at will in order to scare his subjects into worshipping him as a god?",
        'options': ['A. Romulus Silvius', 'B. Aeneas Silvius', 'C. Agrippa Silvius', 'D. Atys Silvius'],
        'answer': 'A',
        'extra': 'Romulus Silvius \nim giggling fthis has gotta be my favourite ever story about alba longa, in his book “Ab urbe condita” Livy [titus livius] mentions it in book 1 page 9 [Aventīnō fulmine ipse ictus rēgnum per manūs trādidit.] and Dionysius of Halicarnassus also mentions it in his book “Roman antiquities” [book 1] which you can read here vvv http://penelope.uchicago.edu/Thayer/e/roman/texts/dionysius_of_halicarnassus/1c*.html'
    },
    {
        'question': "Who was the first roman emperor to die by commiting suicide?",
        'options': ['A. Caligula', 'B. Nero', 'C. Augustus', 'D. Elagabalus'],
        'answer': 'B',
        'extra': 'Nero \nNero committed suicide after being declared an enemy by the roman senate [impressive in itself] [meaning that he could be assasinated without consequence], after declaring “I have only to appear and sing to have peace once more in Gaul". The senate were gonna crucify him but he fled before that happened. Yeah. the senate just thought he was too insane to continue his reign which is pretty funny'
    },
    {
        'question': "Which roman emperor infamously commanded his soldiers to collect seashells as a form of potential mockery?",
        'options': ['A. Nero', 'B. Tiberius', 'C. Caligula', 'D. Claudius'],
        'answer': 'C',
        'extra': 'Caligula \nI want to add, the more common known iteration of this story is Caligula waging war on the god of the sea, neptune, however, this is widely debated as Suetonius (a very popular historian and author of the book “The twelve caesars” [good book btw]) was known for greatly exaggerating his accounts, potentially as an attempt to paint the emperor as ‘tyrannical’ and ‘insane’'
    },
        {
        'question': "Where did Remus want to found rome?",
        'options': ['A. Aventine Hill', 'B. Palatine Hill', 'C. Capitoline Hill', 'D. Esquiline Hill'],
        'answer': 'A',
        'extra': 'the Aventine Hill \nAventine Hill (the aventine hill is one of the seven hill rome was built on. The name “Aventine” most likely was named after the alba longan king “Aventenius”, a father to proca (who was the father to numitor and amulius) and a great great great (plus lots more greats) grandson of the legendary aeneas.)'
    },
    {
        'question': "Who founded Rome atop of the Palatine hill in the ‘foundations of rome’ myth?",
        'options': ['A. Ascanius', 'B. Romulus', 'C. Remus', 'D. Nero'],
        'answer': 'B',
        'extra': 'Romulus \naccording to livy (titus livius) When the twins romulus and remus decide to found a new city, they were unable to decide who would be king, and because they could not base kingship off of age, they decided to ask the Gods of the area, by augury (an augury was a sign from the roman gods observed in the behaviour of birds), who should be king. To “take the auspices” (basically means to observe the birds, literally means that too), romulus went to the palatine hill, and remus the aventine. Remus saw six birds first, however romulus saw half a dozen more, which lead to conflict as they didnt know what to base it off. Romulus ending up killing remus.'
    },
    {
        'question': "Who was the 7th legendary king of rome?",
        'options': ['A. Ancus Marcius', 'B. Tullus Hostilius', 'C. Sextus Tarquinius Superbus', 'D. Lucius Tarquinius Superbus'],
        'answer': 'D',
        'extra': 'Lucius Tarquinius Superbus \nmore commonly known as Tarquin the proud, reigned a terrible 25 years until he and his bloodline were overthrown by a group of roman senators, lead by lucius junius brutus, the nephew of the king.'
    },
    {
        'question': "What were Rome's first two colonies (that they established in 752 BC)? ",
        'options': ['A. Antemnae and Crustumerium', 'B. Velitrae and Norba', 'C. Ostia and Antium', 'D. Tarracina'],
        'answer': 'A',
        'extra': 'Antemnae and Crustumerium'
    },
    {
        'question': "First roman usurper? (royal period)",
        'options': ['A. Julius Caesar', 'B. Lucius Tarquinius Superbus', 'C. Sextus Tarquinius Superbus', 'D. Lucius Hostilius'],
        'answer': 'B',
        'extra': 'Lucius Tarquinius Superbus'
    },
    {
        'question': "Where did lucius tarquinius superbus declare himself king?",
        'options': ['A. Pompeys Theatre', 'B. Curia Julia', 'C. Steps of the Curia Hostilia', 'D. Inside the Curia Julia'],
        'answer': 'C',
        'extra': 'steps of the curia hostilia \nServus tullius reigned until his assasination by his daughter, Tullia Minor and her husband (or his son in law) Lucius Tarquinius Superbus in 534bce, who was the seventh king of rome and the first usurper. He delcared himself king of rome on the steps of the Curia Hostilia. he refused to bury his predecessor, and even exiled a number of senators whom he believed to be loyal to Servius, in case of a revolt.'
    },
    {
        'question': "Roman noblewoman who was raped by lucius tarquinius superbus’s son sextus tarquinius?",
        'options': ['A. Lucretia', 'B. Latium', 'C. Laurentium', 'D. Lucretius'],
        'answer': 'B',
        'extra': 'Lucretia \nAfter, she then commited suicide which lead to Lucius junius brutus and a number of other senators starting a revolt. Rome swore to never have another king again, and even during the augustan era/transition from the republic to the empire the title “king” was still refused.'
    },
    {
        'question': "Person who orchestrated the revolt against the taquinius family after lucretias suicide?",
        'options': ['A. Ancus Marcius', 'B. Tarquinius Superbus', 'C. Marcus Brutus', 'D. Lucius Junius Brutus'],
        'answer': 'D',
        'extra': 'Lucius Junius Brutus, or the "first Brutus" \nIn 509bce, a patritian by the name of Lucretia was raped by the son of the king which drove her to suicide. This lead to Lucius Junius Brutus calling the curiate assembly, to which they agreed to overthrow Tarquinius superbus and the monarchy of rome, making Tarquinius superbus the last legendary king of rome.'
    },
    {
        'question': "Who was the first person to have the name “Caesar”?",
        'options': ['A. Sextus Julius Caesar', 'B. Gaius Julius Caesar', 'C. Caesar Augustus Octavian', 'D. Gaius Sextus Caesar'],
        'answer': 'A',
        'extra': 'Sextus Julius Caesar \n The title “Caesar” originally began as a cognomen (a cognomen was the third name that a roman citizen was generally given, and was apart of the tria nomina, a three-part naming system. The tria nomina consisted of the praenomen (personal name), nomen (family name), and cognomen.)) The Cognomen Caesar is believed to have came from Sextus Julius Caesar, who was praised for killing an elephant (called "caesai" in the Moorish language) during a battle. As a result, he was granted the cognomen "Caesar," which means "elephant" or "thick head of hair" in Latin. Cognomina (the plural of cognomen) could be inherited within a family, which would pass down through generations. Julius Caesars family belonged to the prestigious Julian clan, which claimed descent from Trojan prince and war hero Aeneas, and the goddess Venus. The Julian clan was one of the oldest and most influential patrician families in Rome. The cognomen "Caesar" was not initially associated with his family but was later adopted as a hereditary name by his successors. “Caesar” may not have started out as a cognomen at all, as historians and linguists have argued that the suffix “ar” is extremely uncommon and unusual for latin, but it was common in the Sabine Oscan language, an Indo-European Italic language from southern italy. Caesars adoptive son, Augustus, who was originally named Gaius Octavius, subsequently took the name Gaius Julius Caesar Octavianus. After the establishment of the Roman Empire, he became known as Augustus Caesar. Tiberius, who succeeded Augustus as emperor, was born as Tiberius Claudius Nero and was later adopted by Augustus. He took the name Tiberius Julius Caesar, and the regnal name Tiberius Caesar Augustus. Caligula, whose birth name was Gaius Julius Caesar Germanicus, later took the name Gaius Caesar Augustus Germanicus. He was the son of Germanicus, who was a nephew of Tiberius. Claudius, born as Tiberius Claudius Drusus, was the fourth emperor of Rome. He became known as Tiberius Claudius Caesar Augustus Germanicus after ascending to the throne, however, did not gain the name through inheritance like the past 3 emperors but rather through the fact that he was apart of the Julio-Claudian dynasty (he was the great-nephew of Augustus). Nero, originally named Lucius Domitius Ahenobarbus, became the last Roman emperor of the Julio-Claudian dynasty. He was adopted by his great-uncle Claudius and became known as Nero Claudius Caesar Augustus Germanicus. Galba became the first emperor not not directly related to the Julii or the Julio-Claudian dynasty to assume the name “Caesar”, and passed it on to his son, which lead to it being used as a synonym for “emperor” Kaiser (the german word for emperor) is related to the title “Caesar”, and came from the althochdeutsch word “Keisar” which is directly borrowed from the latin “Caesar”. In slavic and cyrillic languages, Tzar also comes from the old slavic word “tsesari” which came from the latin “Caesar”. “Caesar” made its way into english as “Czar” (borrowed from russian) and essentially means an autocratic leader or someone in charge. (eg Drug Czar, someone employed by the government to stop the illegal trade of drugs). I got carried away with this one'
    }
]
""" template for questions is below
    {
        'question': "",
        'options': ['A. ###', 'B. ###', 'C. ###', 'D. ###'],
        'answer': 'B',
        'extra': '###'
    }
"""

def ask_question(questions):
    ## Choose a random question and display it!
    question = random.choice(questions)
    print(question['question'])
    for option in question['options']:
        print(option)
    user_answer = input("enter your answer: \n") ## get the users answer
    is_correct = user_answer.lower() == question['answer'].lower()

    ## the below two lines handle the printing of the question
    print("\n" + question['extra'])
    print("\n--------------------------\nPress a key to proceed\n--------------------------\n")
    
    getch.getch()

    return is_correct, question

# RUN QUIZ FUNC
## run quiz function. this piece of the code defines a function which handles running the quiz and adding the score ect.
def run_quiz(questions):
    score_right = 0
    score_wrong = 0
    asked_questions = []

    while questions:
        is_correct, question = ask_question(questions)
        asked_questions.append(question)
        
        # this is where the score is incremented (or points reducted, depending if the user got the question correct)
        if is_correct:
            score_right += 1
        else:
            score_wrong += 1

        questions = [q for q in questions if q not in asked_questions]

    total_score = score_right - score_wrong

    ## this here prints the quiz results.
    print("\n--- quiz results ---")
    print(f"total score: {total_score}")
    print(f"questions right: {score_right}")
    print(f"questions wrong: {score_wrong}")

    percentage = (score_right / (score_right + score_wrong)) * 100
    grade = ""

# GRADES
##  you can change the minimum score needed and the congratulations message here:
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
