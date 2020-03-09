# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 =  User.create({ email:"ultralord@jn.org", username: "Ultra Lord", password: "imultralord" })
user_2 = User.create({ email:"exia@gn.org", username: "EXIA", password: "gundam" })
user_3 = User.create({ email:"jw@babayaga.com", username: "John Wick", password: "consequences" })
user_4 = User.create({ email:"vader@sith.org", username: "Darth Vader", password: "padmea" })
user_5 = User.create({ email:"spiderman@avg.org", username: "Spider Man", password: "tonystark" })
user_6 = User.create({ email:"pika@poke.com", username: "Pikachu", password: "pikapi" })
user_7 = User.create({ email:"yugi@duel.org", username: "Jaden Yuki", password: "eleneos" })
user_8 = User.create({ email:"shingi@jn.org", username: "Shingi", password: "evangelion" })


question_1 = Question.create({
    title: "Did the first trailer of Avengers: Endgame meet your expectations?",
    user_id: user_5.id
})

answer_1_1 = Answer.create({
    text: "I’m glad it didn’t. The first time I saw the trailer, I simply asked “That’s it?” It felt as if it was Marvel Studios saying “Here’s that damn trailer that you asked for” as an attempt to tell everyone that another Avengers film is coming and the trailer is something to show for it.
    All we really got was a glimpse of what happened in the aftermath of Infinity War, the title and an official release date.
    But as I watched it a few more times, I began to appreciate it a lot more. The whole emptiness of the trailer, in the literal and figurative sense and whether or not it was intentional, presented quite the emotional tone.
    The emptiness of the trailer conveys the literal emptiness of the universe.",
    question_id: question_1.id,
    user_id: user_1.id
})

answer_1_2 = Answer.create({
    text: "Avengers: Endgame is one of the most anticipated movies of all time.

    As such as it was pretty much impossible for them to met the sky-high expectations that had been placed on this first trailer.

    Thus I did my best to avoid the hype train and keep myself grounded before this trailer came out.

    That all went out the window as soon as a saw the name. Avengers… Endgame?

    Shit! Sounds like a lot of our old favourites are not going to make it out of this one unscathed.

    Spoilers ahead-

    To reinforce this point we start off by seeing Tony stranded in space, running low on food and water. I guess that means Nebula ditched him, stuff like this is why Gamora was everyone's favourite.

    Cap loses his beard, another casualty of the snap.

    Widow, Thor and Banner sit around looking suitably morose.

    Hawkeye goes into Ronin mode. Seriously though, that was a great scene. With just one look at Jeremey Renner's face, you knew that this was a man who has lost everything.",
    question_id: question_1.id,
    user_id: user_3.id
})

answer_1_3 = Answer.create({
    text: "Sorry I took so long to answer. I was just busy cleaning out my Answer Requests because only about fifty freaking people have asked me about the Avengers: Endgame trailer in some way, shape or form.

    Hold up.
    
    What’d I just write?
    
    Avengers: Endgame trailer?",
    question_id: question_1.id,
    user_id: user_4.id
})

answer_1_4 = Answer.create({
    text: "Yes! I was expecting for Marvel to build on the feelings of desperation after Infinity War. One of the most jaw-dropping moments for me in IW was when Thanos stabbed Tony. I was sure this was Tony’s exit from the Avengers (figuratively and literally). My heart dropped as he gasped to breathe and Thanos said “I hope they remember you.” It was powerful drama. But Tony survived, and Thanos snapped, and we realized it - the villain WON!
    I expected the A4E trailer to build, because it’s about re-creation. 
    About standing up from hopelessness. Marvel masterfully presented a hopeless situation, with Tony (and probably Nebula) adrift in the vastness of space. 
    The remaining Avengers back on Earth broken and defeated, Cap desperate to make up for what he views as a complete failure to protect anyone. 
    The epic score adds to the emotion-building drama, as the signature logo forms from ‘dust’ and the true title is revealed, Avengers: Endgame, and the screen goes black. But then they offer a glimmer of hope when Scott Lang is discovered at the Avengers facility door. 
    Of course, they can’t show the amount of action that was shown in the IW trailer. 
    There’d be too many spoilers. It’s a powerful and effective trailer and makes me want to see the movie that much more.",
    user_id: user_2.id,
    question_id: question_1.id
})

answer_1_5 = Answer.create({
    text: "It wasn’t what I expected. At all. But I still loved it.

    I was expecting a normal trailer. Epic music, big fight scenes, a few awesome lines, pretty similar to the Infinity War trailer.
    
    The music was somber. There was no fighting. Still some awesome lines, but it was way different from the Infinity War trailer.
    
    And I loved it.
    
    Marvel is showing us right off the bat that this is not a normal Marvel movie. This is sad. This is dark. Minus Scott Lang being, well, Scott Lang.
    
    It didn’t give us much plot to work with. Sure, we learned some things, but we have been left with more questions than answers (i.e. how did Scott escape the Quantum Realm? Is that the real Scott? Why is Shuri missing? How will Tony escape? Did we just see the end of the movie? ect.)",
    user_id: user_8.id,
    question_id: question_1.id
})

question_2 = Question.create({
    title: "How smart is Batman in terms of tactics? If he was in the military, what rank would he receive?",
    user_id: user_7.id
})

answer_2_1 = Answer.create({
    text: "Contrary to popular opinion, Batman is, in fact, superhuman.

    I know, I know- canonically Batman is not superhuman and has no powers. Etc.
    
    On the other hand, the things Batman has done. One or two of those things are possible. On their own. After a lifetime of training. Not all at once.
    
    One cannot be “a master of 127 martial arts” and all the other nonsense things that Batman can and has done.
    
    So, in conclusion Batman would quickly prove his merit in any military in the world and be a five/four star general. Or the CJCS. Or the president.
    
    Batman can be whatever he wants to be. Frontline, command, whatever.",
    user_id: user_8.id,
    question_id: question_2.id
})