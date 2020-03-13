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

comment_1_1 = Comment.create({
    text: "Really insightful!",
    answer_id: answer_1_1.id,
    user_id: user_3.id
})

comment_1_2 = Comment.create({
    text: "Honestly I thought the same thing. I really how they gave us enough without spoiling it.",
    answer_id: answer_1_1.id,
    user_id: user_7.id
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

comment_3_1 = Comment.create({
    text: "Cool bro",
    answer_id: answer_1_3.id,
    user_id: user_7.id
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


question_3 = Question.create({
    title: "What’s a practical piece of advice for people under 30?",
    user_id: user_5.id
})

answer_3_1 = Answer.create({
    text: "I just watched John Wick 3. 
    I came away from the movie with a few lessons you probably wouldn’t have guessed…

    If you listen to the news you might think I’d come away from such a gory violent film with the desire to slaughter a small Japanese village.

    And there's something to that because according to one study — violent movies make aggressive people more aggressive.

    But for me I came away with a desire to…

    1. Be More Professional

    Bloodied and beaten, John Wick collapsed under the hot desert sun.",
    user_id: user_7.id,
    question_id: question_3.id
})

comment_3_1 = Comment.create({
    text: "Well, Baba Yaga is a Russian witch according to its old folk tales. She is a man eater, likes Russian blood as a delicacy, but eventually helps the hero, Ivan, in all his conquests.",
    user_id: user_3.id,
    answer_id: answer_3_1.id 
})

comment_3_2 = Comment.create({
    text: "I believe john wick didn't go to the desert in a suite to look professional or even to dress well, he did it because the suite was his armor if you remember from John wick chapter 2.",
    user_id: user_2.id,
    answer_id: answer_3_1.id 
})


question_4 = Question.create({
    title: "How can I dramatically improve my life in 2 years?",
    user_id: user_1.id
})

answer_4_1 = Answer.create({
    text: "When I was in my late twenties, I went through a lot of tough years.

    One year, I spent a lot of time writing articles and books. None of my articles were published. Most of my books sold less than 50 copies. To say I failed would be a huge understatement.
    
    One year, I traveled to over 100 cities to build a business division from scratch. I would routinely present in front of groups of 30 to 300 people. I lived out of a suitcase, didn’t eat well and sacrificed my health to build the business.
    
    One year, I lost one of my closest friends, Erik, to cancer. For many days, it was hard to get out of bed after that.
    
    Despite these struggles, I was able to recover in 2 years.
    
    I stayed the course on writing and ended up getting over 70,000 total subscribers, 14 million views and being published in Forbes, Fortune, Time, Huffington Post, Business Insider, Quartz and more.
    
    I course corrected on my work life balance and spent a lot more time on my health. I invested in a high end blender and made a point to eat a green smoothie every day (I even have one just for my travel days!) and started to work out regularly with morning runs.
    
    I also decided to spend my energy on building a website that would inspire and motivate others to be the best version of themselves, because that’s what my friend Erik would have wanted.
    
    In short, I turned my life around in 2 years. Meaningful progress takes time, but if I can do it, you can do it.
    
    Here are the 10 key lessons I learned:
    
    Make your health your top priority -
    Want to change the world?
    
    Want to achieve financial freedom?
    
    Want to inspire others?
    
    Those are great goals, but without your health, you won’t be able to accomplish any of them.
    
    Here are my tips on how to prioritize your health so that you can stay healthy for the long term:
    
    Eat whole foods and reduced processed foods - Fruits (in moderation) and vegetables are your new best friends. Avoid products that have ingredients that you can’t pronounce or don’t recognize.
    Reduce your sugar intake - In a 2014 study published in the JAMA Internal Medicine, the Doctor and his colleagues found an association between a diet that was high in sugar and a greater risk of dying from heart disease. This was written about extensively in Harvard Health.
    Use health hacks to help you get your daily requirements in fruits and vegetables - For example, I buy fresh greens every week and then frozen fruits that can last longer. Every morning, I put these ingredients into a blender and eat a green smoothie. I would normally really struggle with eating these whole foods and blending it all together really makes it 10X easier for me to eat it daily. Blenders for the win!
    Work efficiently - Instead of working 18 hours straight, can you think of a way where you can work really hard and efficiently for 6 hours and be just as productive? Challenge yourself to be creative and to think of effective ways to work, as opposed to burning both ends of the candle. For example, I noticed I would work late nights but that I was incredibly inefficient in my output at night. So I switched my work habits and began to write a lot more during the morning. What happened? I was able to produce much higher quality writing pieces in a shorter amount of time.
    Make time for sleep - Sure, I can run off of 6 hours of sleep, but generally I can’t think as clearly, make more mistakes and my energy is a lot lower. Don’t cheat yourself on sleep time. Get a solid 7–9 hours.
    Workout consistently - I’ve worked out a lot in the past but have always struggled with consistency. Because of that and my eating habits, my weight would sometimes fluctuate, especially after a vacation! What I failed to understand is that I should have focused less on external goals and more on enjoying the process of working out consistently. So what did I do? I found a workout class that I love and enjoy (Orange Theory) and now I’m able to consistently go 4–5 times a week. Most days it’s the highlight of my day! In just 3.5 months I’ve already lost 19 pounds. My mood has improved a lot, my energy is a lot better and my mind is a lot sharper as well.",
    user_id: user_4.id,
    question_id: question_4.id
})

question_5 = Question.create({
    title: "What is something people need to understand?",
    user_id: user_6.id
})

answer_5_1 = Answer.create({
    text: "Success doesn’t require speed… It requests slowness

    So many people today are in a rush to become successful.
    
    They want to earn 7-figures in 12 months even though they have no marketable skills, no network, and no businesses acumen.
    
    They want to build their dream body in 12 weeks even though they haven’t set foot in a gym in years and don’t really understand the current state of their physical body.
    
    They want to magically find the man/woman of their dreams even though they themselves are completely undateable and have 0 social skills.
    
    And I get it…
    
    Human beings are inherently impatient.
    
    But the great irony of success (in any area of life) is that an approach that is overly focused on speed will actually force you to go slower.
    
    Trying to achieve too many things too quickly or changing too many aspects of yourself and personality in too short of a time span will detriment your results.
    
    Don’t believe me?
    
    Then let’s take a look at two (semi) hypothetical examples.",
    user_id: user_2.id,
    question_id: question_5.id
})

comment_5_1 = Comment.create({
    text: "I’m currently going through the latter and it took me 28 years to appreciate it. Before then, I was the former, always rushing and feeling like a failure when I wasn’t exact. Now I’m more patient with myself and I still see progress, more long-term valuable progress. It brings more peace of mind - thanks for sharing!",
    user_id: user_3.id,
    answer_id: answer_5_1.id
})

answer_5_2 = Answer.create({
    text: "Someone asked the richest man in the world, Bill Gates, “Is there anyone richer than you in the world ?”

    Bill Gates replied, “Yes, there is a person who is richer than me.”
    
    He then narrated a story.
    
    “It was during the time when I wasn’t rich or famous.
    
    “I was at the New York Airport when I saw a newspaper vendor.
    
    “I wanted to buy one newspaper but found that I didn’t have enough change. So I left the idea of buying and returned it to the vendor.
    
    “I told him of not having the change. The vendor said, ‘I am giving you this for free.’ On his insistence I took the newspaper.
    
    “Coincidentally, after two to three months, I landed at the same airport and again I was short of change for a newspaper. The vendor offered me the newspaper again. I refused and said that I can’t take it for I don’t have change today too. He said, ‘You can take it, I am sharing this from my profit, I won’t be at loss.’ I took the newspaper.
    
    “After 19 years I became famous and known by people. Suddenly I remembered that vendor. I began searching for him and after about 1½ months of searching, I found him.",
    user_id: user_8.id,
    question_id: question_5.id
})

question_6 = Question.create({
    title: "Why did you stop playing video games?",
    user_id: user_3.id
})

answer_6_1 = Answer.create({
    text: "That month without video games taught me a lot about myself. I realized cutting video games out of my life was not an effective way to improve my academic success. Video games were a part of who I was, and I should not have tried to remove that. Instead, I learned to become more disciplined with my working habits. If I was truly insistent on improving my academic success I had to change my mentality. My month without video games taught me all I have to do is play video games in a controlled manner. Throughout the course of the next year, I focused on doing my work first before I play video games and this strategy has proven effective. I can now say that I have a healthy balance between video games and school work. My rule of thumb is that homework for the next 2 days must be completed for me to play video games.

        Something about society led my young mind to believe that playing video games is unhealthy and must be cut. Society made me think that I should pursue something “better” like reading books, playing an instrument or playing sports as my main passion. I have a really big problem with people who ignorantly say “video games are bad for you”. Video games themselves are not bad for you, it is the addiction to it that can have negative consequences. I would actually argue that video games are good for you as long as you are not addicted. There is a stigma towards playing video games that I feel must be lifted. I hate how binging Netflix on a Friday night is considered an acceptable activity yet once I sit in front of my PC to play video games on a Friday night I’m considered “antisocial” and called a “no-lifer”.",
    user_id: user_6.id,
    question_id: question_6.id
})

comment_6_1 =  Comment.create({
    text: "This is perhaps one of the most needed answers for me right now. I’ve been suffering recently from depressive and anxious feelings because I’ve been so focused on being “productive”. In trying to learn something that I didn’t quite enjoy as much as indulging myself a bit in video games, movies, or building plastic models because I could have spent my time doing something more “productive” and “useful”, I was really suffering myself as a whole. It has shown in my mood, attitude towards life, creativity at work, and my relationships with others. This answer made me look at it in another perspective and that it’s not the act itself that’s the issue, but how I approached and thought about it.
    I really appreciate this answer and your insights. Thank you so much.",
    user_id: user_4.id,
    answer_id: answer_6_1.id
})