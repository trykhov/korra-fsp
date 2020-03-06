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
user_7 = User.create({ email:"yugi@duel.org", username: "Jaden Yuki", password: "neos" })
user_8 = User.create({ email:"shingi@jn.org", username: "Shingi", password: "evangelion" })